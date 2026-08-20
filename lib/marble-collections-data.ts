export interface MarbleVariety {
  name: string
  image: string
}

export interface MarbleCollection {
  id: string
  name: string
  tagline: string
  description: string
  feeling: string
  color: string
  varieties: MarbleVariety[]
}

export const marbleCollections: Record<string, MarbleCollection> = {
  'gorgeous-grey': {
    id: 'gorgeous-grey',
    name: 'Gorgeous Grey',
    tagline: 'The Feeling of an Elegant Space',
    description: 'Gorgeous Grey marble flooring brings timeless sophistication to luxury homes and commercial spaces. Our hand-selected Italian and Turkish marble varieties feature stunning veining patterns ideal for contemporary architecture, hotel lobbies, and upscale villa interiors. Perfect for statement flooring and wall cladding in modern luxury design projects.',
    feeling: 'Elegant',
    color: 'Grey',
    varieties: [
      { name: 'Moon Stone Silver', image: '' },
      { name: 'Princess Grey', image: '' },
      { name: 'Symphoney Grey', image: '' },
      { name: 'Cinerious Grey', image: '' },
      { name: 'Burberry Grey', image: '' },
      { name: 'Silk Spider Grey', image: '' },
      { name: 'Floral Grey', image: '' },
      { name: 'Grey Sonata', image: '' },
      { name: 'Spanish Armani Grey', image: '' },
      { name: 'Iceberg Grey', image: '' },
      { name: 'Silver Star Grey', image: '' },
      { name: 'Bardiglio Grey', image: '' },
      { name: 'Grey Orobico', image: '' },
      { name: 'Grey William', image: '' },
      { name: 'Grey Emperador', image: '' },
      { name: 'Premium Grey', image: '' },
      { name: 'Alaska Grey', image: '' },
    ],
  },
  'beautiful-beige': {
    id: 'beautiful-beige',
    name: 'Beautiful Beige',
    tagline: 'The Feeling of a Beautiful Space',
    description: 'Beautiful Beige marble flooring creates warm, inviting luxury interiors with natural elegance. Premium imported Italian marble varieties featuring creamy tones and subtle patterns—ideal for residential marble flooring, wall cladding in luxury villas, high-end restaurants, and upscale hotel suites. Architects love beige marble for its versatility and timeless appeal.',
    feeling: 'Beautiful',
    color: 'Beige',
    varieties: [
      { name: 'D Martino', image: '/images/variety-d-martino.png' },
      { name: 'Crema Nova', image: '/images/variety-crema-nova.png' },
      { name: 'Creama Perfeta', image: '/images/variety-creama-perfeta.png' },
      { name: 'Perlato Sicilia', image: '/images/variety-perlato-sicilia.png' },
      { name: 'Crema Marfil', image: '/images/variety-crema-marfil.png' },
      { name: 'Crema Bellisimo', image: '/images/variety-crema-bellisimo.png' },
      { name: 'Velvet Cream', image: '/images/variety-velvet-cream.png' },
      { name: 'Oracle Beige', image: '/images/variety-oracle-beige.png' },
      { name: 'Brescia Aurora', image: '/images/variety-brescia-aurora.png' },
      { name: 'Ottoman Beige', image: '/images/variety-ottoman-beige.png' },
      { name: 'Crema Siena', image: '/images/variety-crema-siena.png' },
      { name: 'Brescia Marine', image: '/images/variety-brescia-marine.png' },
    ],
  },
  'wow-white': {
    id: 'wow-white',
    name: 'Wow White',
    tagline: 'The Feeling of a Pure Space',
    description: 'Wow White Italian marble flooring epitomizes pure luxury and architectural sophistication. Sourced from premium quarries in Italy, these pristine white marble varieties with natural veining are ideal for luxury home marble flooring, minimalist architecture, high-end wall cladding, and exclusive hotel installations. Perfect for contemporary and classical architectural design projects.',
    feeling: 'Pure',
    color: 'White',
    varieties: [
      { name: 'Greek Statuario', image: '' },
      { name: 'Statuario Grey', image: '' },
      { name: 'Michel Angelo White', image: '' },
      { name: 'Cararra White', image: '' },
      { name: 'Volakas White', image: '' },
      { name: 'Panda White', image: '' },
      { name: 'Calacutta White', image: '' },
      { name: 'Swarovski White', image: '' },
      { name: 'Golden Spider White', image: '' },
      { name: 'Calacutta Gold', image: '' },
      { name: 'Angelo White', image: '' },
      { name: 'Statuario White', image: '' },
      { name: 'Lasa White', image: '' },
    ],
  },
  'bold-black': {
    id: 'bold-black',
    name: 'Bold Black',
    tagline: 'The Feeling of a Classy Space',
    description: 'Bold Black premium marble flooring represents architectural power and luxury sophistication. With striking gold and silver veining, these imported Italian marbles create dramatic feature walls and luxurious flooring in high-end villas, luxury hotels, commercial buildings, and prestigious office spaces. Ideal for bold architectural statements and premium interior cladding.',
    feeling: 'Classy',
    color: 'Black',
    varieties: [
      { name: 'Nero Saint Laurent', image: '/images/variety-nero-saint-laurent.png' },
      { name: 'Golden Galaxy', image: '/images/variety-golden-galaxy.png' },
      { name: 'Golden Portoro', image: '/images/variety-golden-portoro.png' },
      { name: 'Black Marquina', image: '/images/variety-black-marquina.png' },
      { name: 'Metal Rust', image: '/images/variety-metal-rust.png' },
      { name: 'Belgium Black', image: '/images/variety-belgium-black.png' },
      { name: 'Versache Gold', image: '/images/variety-versace-gold.png' },
      { name: 'Nero Picasso', image: '/images/variety-nero-picasso.png' },
      { name: 'Armani Black', image: '/images/variety-armani-black.png' },
      { name: 'Cosmic Portoro', image: '/images/variety-cosmic-portoro.png' },
      { name: 'Silver Portoro', image: '/images/variety-silver-portoro.png' },
      { name: 'Nero Carnico', image: '/images/variety-nero-carnico.png' },
    ],
  },
  'aesthetic-brown': {
    id: 'aesthetic-brown',
    name: 'Aesthetic Brown',
    tagline: 'The Feeling of an Artistic Space',
    description: 'Aesthetic Brown imported marble flooring brings artistic expression and warmth to luxury interiors. These rich Italian and Turkish marble varieties with gold and copper veining are perfect for upscale villa flooring, luxury hotel design, fine dining restaurants, and architectural projects requiring sophisticated natural stone cladding. A classic choice for premium residential and commercial spaces.',
    feeling: 'Artistic',
    color: 'Brown',
    varieties: [
      { name: 'Golden Emperador', image: '/images/variety-golden-emperador.png' },
      { name: 'Dark Emperador', image: '/images/variety-dark-emperador.png' },
      { name: 'Viena Brown', image: '/images/variety-viena-brown.png' },
      { name: 'Bronze Armani', image: '/images/variety-bronze-armani.png' },
      { name: 'Girgio Armani', image: '/images/variety-girgio-armani.png' },
      { name: 'African Gold', image: '/images/variety-african-gold.png' },
      { name: 'Swiss Gold', image: '/images/variety-swiss-gold.png' },
      { name: 'Armani Brown', image: '/images/variety-armani-brown.png' },
      { name: 'Spanish Armani', image: '/images/variety-spanish-armani.png' },
      { name: 'Bulgari Brown', image: '/images/variety-bulgari-brown.png' },
      { name: 'Tobacco Brown', image: '/images/variety-tobacco-brown.png' },
      { name: 'Metal Bronze', image: '/images/variety-metal-bronze.png' },
    ],
  },
  'onyx-marble': {
    id: 'onyx-marble',
    name: 'Onyx Marble',
    tagline: 'The Feeling of a Stunning Space',
    description: 'Onyx marble represents the pinnacle of luxury architectural stone, with translucent beauty and dramatic banding. Perfect for exclusive feature walls, luxury villa interior cladding, high-end hotel installations, and signature design elements. These premium imported onyx varieties create truly unique, eye-catching architectural statements that showcase sophistication and timeless elegance.',
    feeling: 'Stunning',
    color: 'Onyx',
    varieties: [
      { name: 'Honey Onyx', image: '/images/variety-honey-onyx.png' },
      { name: 'Champagne Onyx', image: '/images/variety-champagne-onyx.png' },
      { name: 'Classic White Onyx', image: '/images/variety-classic-white-onyx.png' },
      { name: 'Copper Dune Onyx', image: '/images/variety-copper-dune-onyx.png' },
      { name: 'Crystal Brown Onyx', image: '/images/variety-crystal-brown-onyx.png' },
      { name: 'Crystal White Onyx', image: '/images/variety-crystal-white-onyx.png' },
      { name: 'Emerald Green Onyx', image: '/images/variety-emerald-green-onyx.png' },
      { name: 'Golden Wave Onyx', image: '/images/variety-golden-wave-onyx.png' },
      { name: 'Feather White Onyx', image: '/images/variety-feather-white-onyx.png' },
      { name: 'Ivory Onyx', image: '/images/variety-ivory-onyx.png' },
      { name: 'Pink Onyx', image: '/images/variety-pink-onyx.png' },
      { name: 'Mango Onyx', image: '/images/variety-mango-onyx.png' },
    ],
  },
}

export function getCollectionBySlug(slug: string): MarbleCollection | null {
  return marbleCollections[slug] || null
}

export function getAllCollectionSlugs(): string[] {
  return Object.keys(marbleCollections)
}
