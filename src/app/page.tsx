import About from "@/components/About";
import Contact from "@/components/Contact";
import Focus from "@/components/Focus";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OffHours from "@/components/OffHours";
import ScrollReveal from "@/components/ScrollReveal";
import Stack from "@/components/Stack";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Focus />
        <Timeline />
        <Stack />
        <OffHours />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
