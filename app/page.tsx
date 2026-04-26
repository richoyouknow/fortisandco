import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Problems from "@/components/Problems";
import Clients from "@/components/Clients";
import DataFacts from "@/components/DataFacts";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Problems />
        <Clients />
        <DataFacts />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
