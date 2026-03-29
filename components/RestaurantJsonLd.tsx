import { site } from "@/data/site";
import { contact } from "@/data/contact";

export default function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    url: site.url,
    description: site.meta.description,
    telephone: contact.phone.display,
    email: contact.email.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: "Christchurch",
      addressRegion: "Canterbury",
      postalCode: "8053",
      addressCountry: "NZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -43.5004694,
      longitude: 172.5642989,
    },
    servesCuisine: "Thai",
    priceRange: "$$",
    currenciesAccepted: "NZD",
    paymentAccepted: "Cash, Credit Card",
    hasMenu: `${site.url}/menu`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "11:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "17:00",
        closes: "21:00",
      },
    ],
    sameAs: ["https://www.facebook.com/GOODTHAI166/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
