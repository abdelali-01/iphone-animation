import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
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
    </main>
  );
}
