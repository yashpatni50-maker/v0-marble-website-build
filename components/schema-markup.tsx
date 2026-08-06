import Script from 'next/script'

export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Chandak Marble International",
    "url": "https://chandakmarble.com",
    "logo": "https://chandakmarble.com/logo.png",
    "description": "Premium imported marble supplier since 1981",
    "sameAs": [
      "https://instagram.com/chandakmarbles",
      "https://facebook.com/chandakmarbles",
      "https://www.youtube.com/@ChandakMarble"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+91-95008-53000"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chandak Marble International",
    "image": "https://chandakmarble.com/logo.png",
    "description": "Premium imported marble supplier and showroom in Kishangarh, Rajasthan",
    "url": "https://chandakmarble.com",
    "telephone": "+91-95008-53000",
    "priceRange": "$$",
    "areaServed": ["IN"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khasra No. 375 & 361, Makrana Road, Madanganj, Kali Dungri",
      "addressLocality": "Kishangarh",
      "addressRegion": "Rajasthan",
      "postalCode": "305801",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.6454857",
      "longitude": "74.8541434"
    },
    "hasMap": "https://www.google.com/maps/place/Chandak+Marble+International/@26.6454857,74.8541434,17z",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
