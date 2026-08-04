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
      { name: 'Burberry Grey', image: '/images/variety-burberry-grey.png' },
      { name: 'Arctic Grey', image: '/images/variety-arctic-grey.png' },
      { name: 'Waterfall Grey', image: '/images/variety-waterfall-grey.png' },
      { name: 'Cinereous Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Princess Grey', image: '/images/variety-arctic-grey.png' },
      { name: 'Versache Grey', image: '/images/variety-burberry-grey.png' },
      { name: 'Grey Flurry', image: '/images/variety-waterfall-grey.png' },
      { name: 'Silver River', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Riviera Grey', image: '/images/variety-arctic-grey.png' },
      { name: 'Alaska Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Fire Grey', image: '/images/variety-burberry-grey.png' },
      { name: 'Repen Grey', image: '/images/variety-waterfall-grey.png' },
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
      { name: 'Creama Perfeta', image: '/images/marble-beautiful-beige.png' },
      { name: 'Perlato Sicilia', image: '/images/variety-crema-nova.png' },
      { name: 'Crema Marfil', image: '/images/variety-crema-marfil.png' },
      { name: 'Crema Bellisimo', image: '/images/marble-beautiful-beige.png' },
      { name: 'Velvet Cream', image: '/images/variety-d-martino.png' },
      { name: 'Oracle Beige', image: '/images/variety-crema-marfil.png' },
      { name: 'Brescia Aurora', image: '/images/marble-beautiful-beige.png' },
      { name: 'Ottoman Beige', image: '/images/variety-d-martino.png' },
      { name: 'Crema Siena', image: '/images/variety-crema-nova.png' },
      { name: 'Brescia Marine', image: '/images/marble-beautiful-beige.png' },
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
      { name: 'Statuario White', image: '/images/variety-statuario-white.png' },
      { name: 'Calacatta Borghini', image: '/images/variety-calacatta-borghini.png' },
      { name: 'Bianco Supremo', image: '/images/variety-bianco-supremo.png' },
      { name: 'Blanco Carrara', image: '/images/marble-wow-white.png' },
      { name: 'Pure White', image: '/images/variety-statuario-white.png' },
      { name: 'Artic White', image: '/images/variety-calacatta-borghini.png' },
      { name: 'Crystal White', image: '/images/marble-wow-white.png' },
      { name: 'Polar White', image: '/images/variety-bianco-supremo.png' },
      { name: 'Alpine White', image: '/images/marble-wow-white.png' },
      { name: 'Pearl White', image: '/images/variety-statuario-white.png' },
      { name: 'Diamond White', image: '/images/variety-calacatta-borghini.png' },
      { name: 'Ivory White', image: '/images/variety-bianco-supremo.png' },
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
      { name: 'Golden Portoro', image: '/images/marble-bold-black.png' },
      { name: 'Black Marquina', image: '/images/variety-nero-saint-laurent.png' },
      { name: 'Metal Rust', image: '/images/variety-golden-galaxy.png' },
      { name: 'Belgium Black', image: '/images/marble-bold-black.png' },
      { name: 'Versache Gold', image: '/images/variety-golden-galaxy.png' },
      { name: 'Nero Picasso', image: '/images/variety-nero-saint-laurent.png' },
      { name: 'Armani Black', image: '/images/marble-bold-black.png' },
      { name: 'Cosmic Portoro', image: '/images/variety-golden-galaxy.png' },
      { name: 'Silver Portoro', image: '/images/variety-nero-saint-laurent.png' },
      { name: 'Nero Carnico', image: '/images/marble-bold-black.png' },
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
      { name: 'Dark Emperador', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Viena Brown', image: '/images/variety-golden-emperador.png' },
      { name: 'Bronze Armani', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Girgio Armani', image: '/images/variety-golden-emperador.png' },
      { name: 'African Gold', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Swiss Gold', image: '/images/variety-golden-emperador.png' },
      { name: 'Armani Brown', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Spanish Armani', image: '/images/variety-golden-emperador.png' },
      { name: 'Bulgari Brown', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Tobacco Brown', image: '/images/variety-golden-emperador.png' },
      { name: 'Metal Bronze', image: '/images/marble-aesthetic-brown.png' },
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
      { name: 'Classic White Onyx', image: '/images/marble-onyx.png' },
      { name: 'Copper Dune Onyx', image: '/images/variety-honey-onyx.png' },
      { name: 'Crystal Brown Onyx', image: '/images/variety-champagne-onyx.png' },
      { name: 'Crystal White Onyx', image: '/images/marble-onyx.png' },
      { name: 'Emerald Green Onyx', image: '/images/variety-honey-onyx.png' },
      { name: 'Golden Wave Onyx', image: '/images/variety-champagne-onyx.png' },
      { name: 'Feather White Onyx', image: '/images/marble-onyx.png' },
      { name: 'Ivory Onyx', image: '/images/variety-champagne-onyx.png' },
      { name: 'Pink Onyx', image: '/images/variety-honey-onyx.png' },
      { name: 'Mango Onyx', image: '/images/variety-champagne-onyx.png' },
    ],
  },
}

export function getCollectionBySlug(slug: string): MarbleCollection | null {
  return marbleCollections[slug] || null
}

export function getAllCollectionSlugs(): string[] {
  return Object.keys(marbleCollections)
}
