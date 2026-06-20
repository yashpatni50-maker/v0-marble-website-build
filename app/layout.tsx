import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chandak Marble | Premium Imported Italian Marble in Kishangarh Since 1981',
  description: 'Chandak Marble - Leading importer and supplier of premium Italian marble, Turkish marble, Onyx marble in Kishangarh, Rajasthan. Trusted by architects, builders, and homeowners since 1981. Direct factory pricing.',
  keywords: 'Italian marble Kishangarh, imported marble India, marble supplier Rajasthan, luxury marble, premium marble, Chandak Marble, Italian marble price, white marble, grey marble, onyx marble',
  openGraph: {
    title: 'Chandak Marble | Premium Imported Italian Marble Since 1981',
    description: 'Premium imported natural marble for luxury homes, villas, hotels, and commercial projects. Trusted by architects, builders, and homeowners since 1981.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
 <body className="font-sans antialiased">
  {children}
  {process.env.NODE_ENV === 'production' && <Analytics />}
</body>
</html>
  )
}
