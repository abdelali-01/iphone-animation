import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import MobileMockup from "@/components/MobileMockup";
import ModelSection from "@/components/ModelSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <ModelSection/>
      <Features/>
      <MobileMockup/>
      <Footer/>
    </main>
  );
}
