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
  metadataBase: new URL('http://fortisandco.my.id/'),
  title: {
    default: "Fortis & Co. | Legal Services for Student Entrepreneurs",
    template: "%s | Fortis & Co."
  },
  description: "Fortis & Co adalah platform layanan hukum dan konsultasi bisnis yang dirancang khusus untuk mahasiswa, wirausahawan muda, dan bisnis tahap awal.",
  keywords: [
    "Legal Services", 
    "Student Entrepreneurs",
    "Konsultan Hukum Mahasiswa",
    "Business Consulting Indonesia", 
    "Startup Law", 
    "Indonesia Legal",
    "Konsultan Bisnis",
    "Hukum Startup",
    "Fortis and Co",
    "Jasa Hukum Mahasiswa"
  ],
  authors: [{ name: "Fortis & Co." }],
  creator: "Fortis & Co.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  alternates: {
    canonical: "http://fortisandco.my.id/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "http://fortisandco.my.id/",
    title: "Fortis & Co. | Legal Services for Student Entrepreneurs",
    description: "Fortis & Co adalah platform layanan hukum dan konsultasi bisnis yang dirancang khusus untuk mahasiswa, wirausahawan muda, dan bisnis tahap awal.",
    siteName: "Fortis & Co.",
    images: [{
      url: "/hero/hero.png",
      width: 1200,
      height: 630,
      alt: "Fortis & Co. Legal Professionals"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortis & Co. | Legal Services for Student Entrepreneurs",
    description: "Fortis & Co adalah platform layanan hukum dan konsultasi bisnis yang dirancang khusus untuk mahasiswa, wirausahawan muda, dan bisnis tahap awal.",
    images: ["/hero/hero.png"]
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Fortis & Co.",
  "description": "Platform layanan hukum dan konsultasi bisnis untuk mahasiswa dan wirausahawan muda di Indonesia.",
  "url": "http://fortisandco.my.id/",
  "logo": "http://fortisandco.my.id/logo/logo.png",
  "image": "http://fortisandco.my.id/hero/hero.png",
  "telephone": "+62 877 8059 3612",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta",
    "addressCountry": "ID"
  },
  "sameAs": [
    "http://fortisandco.my.id/"
  ],
  "serviceType": [
    "Legal Consulting",
    "Business Consulting",
    "Startup Law"
  ],
  "areaServed": "Indonesia",
  "priceRange": "Free Consultation Available"
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
