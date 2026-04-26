import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fortisandco.my.id"),
  title: {
    default: "Fortis & Co. – Legal Services & Business Consulting for Entrepreneurs",
    template: "%s | Fortis & Co.",
  },
  description:
    "Jasa legal services & business consulting untuk mahasiswa, pengusaha muda, dan startup di Indonesia. Bangun fondasi bisnis yang kuat dan aman.",
  keywords: [
    "Fortis & Co",
    "Legal Services Indonesia",
    "Student Entrepreneurs Legal Support",
    "Business Consulting for Startups",
    "Legal Advice for Young Entrepreneurs",
    "Startup Law Indonesia",
    "Business Licensing Assistance",
    "Intellectual Property Guidance",
    "Legal Documentation Templates",
    "Fortis And Co.",
    "jasa hukum murah",
    "konsultasi bisnis mahasiswa",
  ],
  authors: [{ name: "Fortis & Co." }],
  creator: "Fortis & Co.",
  publisher: "Fortis & Co.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fortis & Co. – Legal Services & Business Consulting for Entrepreneurs",
    description:
      "Jasa legal services & business consulting untuk mahasiswa, pengusaha muda, dan startup di Indonesia. Bangun fondasi bisnis yang kuat dan aman.",
    url: "https://www.fortisandco.my.id",
    siteName: "Fortis & Co.",
    locale: "id_ID",
    type: "website",
    images: [{
      url: "https://www.fortisandco.my.id/hero/hero.png",
      width: 1200,
      height: 630,
      alt: "Fortis & Co. - Empowering Entrepreneurs"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortis & Co. – Legal Services & Business Consulting for Entrepreneurs",
    description: "Jasa legal services & business consulting untuk mahasiswa, pengusaha muda, dan startup di Indonesia.",
    images: ["https://www.fortisandco.my.id/hero/hero.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Qz1OZtCiOKlgOS8HuiNN8xGLkLCpH2I8asOSX8tHfBY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Fortis & Co.",
  "image": "https://www.fortisandco.my.id/hero/hero.png",
  "@id": "https://www.fortisandco.my.id",
  "url": "https://www.fortisandco.my.id",
  "telephone": "+6281398506109",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jakarta",
    "addressLocality": "Jakarta",
    "addressRegion": "DKI Jakarta",
    "postalCode": "10000",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2088,
    "longitude": 106.8456
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/fortisandco"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${lora.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="font-jakarta bg-background text-foreground flex flex-col min-h-screen">
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
