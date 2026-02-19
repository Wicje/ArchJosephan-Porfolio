import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import About from "@/components/sections/About";
import ServiceStrip from "@/components/sections/ServiceStrip";
import Reference from "@/components/sections/Reference";
import MediaHub from "@/components/sections/MediaHub";
import CTASection from "@/components/sections/CTASection"; 
export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <About />
      <ServiceStrip />
      <Reference />
      <MediaHub />
      <CTASection />
    </>
  );
}
