import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { SchemaMarkup } from '@/components/schema-markup'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { LuxuryCursor } from '@/components/luxury-cursor'
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
  title: 'Imported Marble Flooring & Cladding | Chandak Marble Since 1981 | Kishangarh',
  description: 'Chandak Marble - India\'s premier importer of luxury Italian marble flooring, architectural stone, and premium natural marble. Direct quarry imports from Italy, Turkey, Greece. 40+ years trusted by architects, builders, luxury homes. Direct factory pricing.',
  keywords: 'imported marble, Italian marble, marble flooring, architectural stone, luxury marble, Italian marble Kishangarh, marble supplier, premium marble, natural stone, marble cladding, imported marble India, marble for villas, marble for hotels',
  openGraph: {
    title: 'Luxury Imported Marble Flooring & Cladding | Chandak Marble',
    description: 'Discover premium imported marble flooring and architectural stone from Italy, Turkey, and Greece. Direct from quarry for luxury homes, villas, hotels, and landmark projects.',
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
      <head>
        <SchemaMarkup />
      </head>
      <body className="font-sans antialiased">
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1680601959684903');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1680601959684903&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <LuxuryCursor />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
