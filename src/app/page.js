import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Content from "./components/Content";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Content/>
    <Footer/>
    </>
  );
}
