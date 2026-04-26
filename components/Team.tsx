"use client";

import { Gallery4, Gallery4Item } from "@/components/blocks/gallery4";

const teamItems: Gallery4Item[] = [
  {
    id: "ceo",
    title: "Avaldra Gervan Syawalana",
    role: "Chief Executive Officer (CEO)",
    description: "Leading the overall vision, growth, and direction of Fortis & Co.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=avaldra.syawalana@student.president.ac.id",
    image: "/members/Avaldra Gervan Syawalana.jpeg"
  },
  {
    id: "legal",
    title: "Caroline Connitasya Allicia Mogot",
    role: "Legal Associate",
    description: "Supporting legal operations, research, and practical legal guidance.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=caroline.mogot@student.president.ac.id",
    image: "/members/CarolineConnitasyaAlliciaMogot.jpeg"
  },
  {
    id: "clo",
    title: "Dinda Aprilia Dwi Risqi",
    role: "Chief Legal Officer (CLO)",
    description: "Responsible for legal oversight, consultation structure, and legal service quality.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=dinda.risqi@student.president.ac.id",
    image: "/members/DindaApriliaDwiRisqi.jpeg"
  },
  {
    id: "cto",
    title: "Emilia Sanhaledzha Sofyan",
    role: "Chief Technology Officer (CTO)",
    description: "Responsible for platform development, user experience, and digital product support.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=emilia.sofyan@student.president.ac.id",
    image: "/members/EmiliaSanhaledzaSofyan.jpeg"
  },
  {
    id: "ui",
    title: "Revandra Adriansyah",
    role: "UI & Product Support",
    description: "Supporting interface development and improving the client platform experience.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=revandra.adriansyah@student.president.ac.id",
    image: "/members/RevandraAdriansyah.jpeg"
  },
  {
    id: "cs",
    title: "Srikandi Syifa Ash Sahwa",
    role: "Customer Success & Admin",
    description: "Managing communication, client support, and operational coordination.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=srikandi.sahwa@student.president.ac.id",
    image: "/members/SyifaAshSahwa.jpeg"
  },
  {
    id: "marketing",
    title: "Muhammad Affan",
    role: "Head of Marketing & Partnership",
    description: "Leading brand growth, partnerships, and external collaboration.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=muhammad.affan@student.president.ac.id",
    image: "/members/MuhammadAffan.jpeg"
  }
];

export default function Team() {
  return (
    <Gallery4 
      title="The People Behind Fortis & Co" 
      description="We believe legal services become more approachable when they are supported by real people who understand the journey of building something from the ground up."
      items={teamItems} 
    />
  );
}
