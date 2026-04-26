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
  metadataBase: new URL('https://www.fortisandco.my.id/'),
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
    canonical: "https://www.fortisandco.my.id/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.fortisandco.my.id/",
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
  verification: {
    google: "Qz1OZtCiOKlgOS8HuiNN8xGLkLCpH2I8asOSX8tHfBY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Fortis & Co.",
  "description": "Platform layanan hukum dan konsultasi bisnis untuk mahasiswa dan wirausahawan muda di Indonesia.",
  "url": "https://www.fortisandco.my.id/",
  "logo": "https://www.fortisandco.my.id/logo/logo.png",
  "image": "https://www.fortisandco.my.id/hero/hero.png",
  "telephone": "+62 813 9850 6109",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://www.fortisandco.my.id/"
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
