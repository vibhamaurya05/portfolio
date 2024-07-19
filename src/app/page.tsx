
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import { ThreeDCardDemo } from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <TechStack/>           
        <Services/>
        <ThreeDCardDemo/> 
        <Contact/>
        <Footer/>
    </>
  );
}



