import { NextResponse } from 'next/server';

// Import all product data
import { beigeProducts } from '@/lib/beige-products-data';
import { greyProducts } from '@/lib/gorgeous-grey-products-data';
import { whiteProducts } from '@/lib/wow-white-products-data';
import { boldBlackProducts } from '@/lib/bold-black-products-data';
import { exoticProducts } from '@/lib/exotic-products-data';
import { aestheticBrownProducts } from '@/lib/aesthetic-brown-products-data';
import { onyxProducts } from '@/lib/onyx-products-data';

interface ProductWithImages {
  slug: string;
  name: string;
  collection: string;
  originalImage?: string;
  warehouseImage?: string;
}

export async function GET() {
  try {
    // Collect all products from all collections
    const allProducts: ProductWithImages[] = [
      ...beigeProducts.map((p: any) => ({
        ...p,
        collection: 'beautiful-beige',
      })),
      ...greyProducts.map((p: any) => ({
        ...p,
        collection: 'gorgeous-grey',
      })),
      ...whiteProducts.map((p: any) => ({
        ...p,
        collection: 'wow-white',
      })),
      ...boldBlackProducts.map((p: any) => ({
        ...p,
        collection: 'bold-black',
      })),
      ...exoticProducts.map((p: any) => ({
        ...p,
        collection: 'exotic',
      })),
      ...aestheticBrownProducts.map((p: any) => ({
        ...p,
        collection: 'aesthetic-brown',
      })),
      ...onyxProducts.map((p: any) => ({
        ...p,
        collection: 'onyx',
      })),
    ];

    // Collection prefixes for IDs
    const prefixes: Record<string, string> = {
      'beautiful-beige': 'CM_BB',
      'gorgeous-grey': 'CM_GG',
      'wow-white': 'CM_WW',
      'bold-black': 'CM_BB',
      'exotic': 'CM_EX',
      'aesthetic-brown': 'CM_AB',
      'onyx': 'CM_ON',
    };

    // Generate CSV header
    let csv = 'id,title,link,image_link\n';

    // Generate CSV rows
    allProducts.forEach((product, index) => {
      const collectionName = product.collection;
      const prefix = prefixes[collectionName];
      const id = `${prefix}_${String(index + 1).padStart(2, '0')}`;

      // Use warehouseImage if available (Exotic), otherwise originalImage
      const imageUrl = product.warehouseImage || product.originalImage || '';

      // Skip if no image URL
      if (!imageUrl) return;

      // Construct product link
      const link = `https://www.chandakmarble.com/products/collections/${collectionName}/${product.slug}`;

      // Escape quotes in title
      const title = product.name.replace(/"/g, '""');

      // Add row to CSV
      csv += `${id},"${title}",${link},"${imageUrl}"\n`;
    });

    // Return CSV as downloadable file
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="chandak-marble-catalog.csv"',
      },
    });
  } catch (error) {
    console.error('CSV export error:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSV' },
      { status: 500 }
    );
  }
}
