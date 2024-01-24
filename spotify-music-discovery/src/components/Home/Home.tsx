import { useRef } from "react";
import Cards from "../Cards";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import LogoClounds from "../LogoClouds";
import Section from "../Section";



export default function Home() {
      const ref = useRef(null);

      return (
            <div className='App bg-[#1A1A1A]'>
                  <Header />
                  <Container />
                  <Section />
                  <Cards/>
                  <LogoClounds />
                  <Footer />
            </div>
      )
}