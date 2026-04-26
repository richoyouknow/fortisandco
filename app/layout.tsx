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
    default: "Fortis & Co. | Legal Services & Business Consulting for Student Entrepreneurs",
    template: "%s | Fortis & Co. - Trusted Legal Partner"
  },
  description: "Fortis & Co. provides accessible legal services and business consulting for students, young entrepreneurs, and startups in Indonesia. Protect your business with professional legal support.",
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
    "Fortis And Co."
  ],
  authors: [{ name: "Fortis & Co." }],
  creator: "Fortis & Co.",
  publisher: "Fortis & Co.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: "https://www.fortisandco.my.id/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fortisandco.my.id/",
    title: "Fortis & Co. | Strategic Legal Partner for the Next Generation of Entrepreneurs",
    description: "Empowering student-led ventures with professional legal foundations. Affordable and approachable legal consulting.",
    siteName: "Fortis & Co.",
    images: [{
      url: "https://www.fortisandco.my.id/hero/hero.png",
      width: 1200,
      height: 630,
      alt: "Fortis & Co. - Empowering Entrepreneurs"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortis & Co. | Legal & Business Solutions for Startups",
    description: "Build a stronger legal foundation with Fortis & Co. Tailored for students and young business owners.",
    images: ["https://www.fortisandco.my.id/hero/hero.png"]
  },
  verification: {
    google: "Qz1OZtCiOKlgOS8HuiNN8xGLkLCpH2I8asOSX8tHfBY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Fortis & Co.",
  "description": "Professional legal services and business consulting platform for student entrepreneurs and startups in Indonesia.",
  "url": "https://www.fortisandco.my.id/",
  "logo": "https://www.fortisandco.my.id/logo/logo.png",
  "image": "https://www.fortisandco.my.id/hero/hero.png",
  "telephone": "+62 813 9850 6109",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jakarta",
    "addressLocality": "Jakarta",
    "addressCountry": "ID"
  },
  "serviceType": [
    "Legal Consultation",
    "Business Licensing",
    "Trademark Guidance"
  ],
  "areaServed": "Indonesia"
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
