import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
    </>
  );
}