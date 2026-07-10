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
    description: 'Our Gorgeous Grey collection embodies sophistication and timeless elegance. Each variety features unique veining patterns that range from subtle whispers to dramatic contrasts, making it perfect for contemporary and classical designs alike.',
    feeling: 'Elegant',
    color: 'Grey',
    varieties: [
      { name: 'Burberry Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Arctic Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Waterfall Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Cinereous Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Princess Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Versache Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Grey Flurry', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Silver River', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Riviera Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Alaska Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Fire Grey', image: '/images/marble-gorgeous-grey.png' },
      { name: 'Repen Grey', image: '/images/marble-gorgeous-grey.png' },
    ],
  },
  'beautiful-beige': {
    id: 'beautiful-beige',
    name: 'Beautiful Beige',
    tagline: 'The Feeling of a Beautiful Space',
    description: 'The Beautiful Beige series brings warmth and natural beauty to any environment. With a range of creamy tones and subtle patterns, these marbles add elegance and comfort, perfect for creating inviting luxury spaces.',
    feeling: 'Beautiful',
    color: 'Beige',
    varieties: [
      { name: 'D Martino', image: '/images/marble-beautiful-beige.png' },
      { name: 'Crema Nova', image: '/images/marble-beautiful-beige.png' },
      { name: 'Creama Perfeta', image: '/images/marble-beautiful-beige.png' },
      { name: 'Perlato Sicilia', image: '/images/marble-beautiful-beige.png' },
      { name: 'Crema Marfil', image: '/images/marble-beautiful-beige.png' },
      { name: 'Crema Bellisimo', image: '/images/marble-beautiful-beige.png' },
      { name: 'Velvet Cream', image: '/images/marble-beautiful-beige.png' },
      { name: 'Oracle Beige', image: '/images/marble-beautiful-beige.png' },
      { name: 'Brescia Aurora', image: '/images/marble-beautiful-beige.png' },
      { name: 'Ottoman Beige', image: '/images/marble-beautiful-beige.png' },
      { name: 'Crema Siena', image: '/images/marble-beautiful-beige.png' },
      { name: 'Brescia Marine', image: '/images/marble-beautiful-beige.png' },
    ],
  },
  'wow-white': {
    id: 'wow-white',
    name: 'Wow White',
    tagline: 'The Feeling of a Pure Space',
    description: 'Wow White collection showcases the pristine beauty of white marble with stunning natural patterns. These varieties bring brightness, clarity, and luxury to any space, perfect for minimalist and contemporary designs.',
    feeling: 'Pure',
    color: 'White',
    varieties: [
      { name: 'Statuario White', image: '/images/marble-wow-white.png' },
      { name: 'Calacatta Borghini', image: '/images/marble-wow-white.png' },
      { name: 'Bianco Supremo', image: '/images/marble-wow-white.png' },
      { name: 'Blanco Carrara', image: '/images/marble-wow-white.png' },
      { name: 'Pure White', image: '/images/marble-wow-white.png' },
      { name: 'Artic White', image: '/images/marble-wow-white.png' },
      { name: 'Crystal White', image: '/images/marble-wow-white.png' },
      { name: 'Polar White', image: '/images/marble-wow-white.png' },
      { name: 'Alpine White', image: '/images/marble-wow-white.png' },
      { name: 'Pearl White', image: '/images/marble-wow-white.png' },
      { name: 'Diamond White', image: '/images/marble-wow-white.png' },
      { name: 'Ivory White', image: '/images/marble-wow-white.png' },
    ],
  },
  'bold-black': {
    id: 'bold-black',
    name: 'Bold Black',
    tagline: 'The Feeling of a Classy Space',
    description: 'The Bold Black collection represents power and sophistication. With striking veining patterns in gold, white, and silver, these marbles create dramatic focal points and exude luxury in every application.',
    feeling: 'Classy',
    color: 'Black',
    varieties: [
      { name: 'Nero Saint Laurent', image: '/images/marble-bold-black.png' },
      { name: 'Golden Galaxy', image: '/images/marble-bold-black.png' },
      { name: 'Golden Portoro', image: '/images/marble-bold-black.png' },
      { name: 'Black Marquina', image: '/images/marble-bold-black.png' },
      { name: 'Metal Rust', image: '/images/marble-bold-black.png' },
      { name: 'Belgium Black', image: '/images/marble-bold-black.png' },
      { name: 'Versache Gold', image: '/images/marble-bold-black.png' },
      { name: 'Nero Picasso', image: '/images/marble-bold-black.png' },
      { name: 'Armani Black', image: '/images/marble-bold-black.png' },
      { name: 'Cosmic Portoro', image: '/images/marble-bold-black.png' },
      { name: 'Silver Portoro', image: '/images/marble-bold-black.png' },
      { name: 'Nero Carnico', image: '/images/marble-bold-black.png' },
    ],
  },
  'aesthetic-brown': {
    id: 'aesthetic-brown',
    name: 'Aesthetic Brown',
    tagline: 'The Feeling of an Artistic Space',
    description: 'The Aesthetic Brown collection brings warmth and artistic expression. These rich, earthy tones with gold and copper veining create spaces that feel both grounded and luxurious, perfect for classic and contemporary interiors.',
    feeling: 'Artistic',
    color: 'Brown',
    varieties: [
      { name: 'Golden Emperador', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Dark Emperador', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Viena Brown', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Bronze Armani', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Girgio Armani', image: '/images/marble-aesthetic-brown.png' },
      { name: 'African Gold', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Swiss Gold', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Armani Brown', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Spanish Armani', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Bulgari Brown', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Tobacco Brown', image: '/images/marble-aesthetic-brown.png' },
      { name: 'Metal Bronze', image: '/images/marble-aesthetic-brown.png' },
    ],
  },
  'onyx-marble': {
    id: 'onyx-marble',
    name: 'Onyx Marble',
    tagline: 'The Feeling of a Stunning Space',
    description: 'The Onyx Marble collection showcases translucent beauty with dramatic banding and warm hues. Perfect for creating stunning feature walls and luxurious installations, onyx marbles create truly unique and eye-catching designs.',
    feeling: 'Stunning',
    color: 'Onyx',
    varieties: [
      { name: 'Honey Onyx', image: '/images/marble-onyx.png' },
      { name: 'Champagne Onyx', image: '/images/marble-onyx.png' },
      { name: 'Classic White Onyx', image: '/images/marble-onyx.png' },
      { name: 'Copper Dune Onyx', image: '/images/marble-onyx.png' },
      { name: 'Crystal Brown Onyx', image: '/images/marble-onyx.png' },
      { name: 'Crystal White Onyx', image: '/images/marble-onyx.png' },
      { name: 'Emerald Green Onyx', image: '/images/marble-onyx.png' },
      { name: 'Golden Wave Onyx', image: '/images/marble-onyx.png' },
      { name: 'Feather White Onyx', image: '/images/marble-onyx.png' },
      { name: 'Ivory Onyx', image: '/images/marble-onyx.png' },
      { name: 'Pink Onyx', image: '/images/marble-onyx.png' },
      { name: 'Mango Onyx', image: '/images/marble-onyx.png' },
    ],
  },
}

export function getCollectionBySlug(slug: string): MarbleCollection | null {
  return marbleCollections[slug] || null
}

export function getAllCollectionSlugs(): string[] {
  return Object.keys(marbleCollections)
}
