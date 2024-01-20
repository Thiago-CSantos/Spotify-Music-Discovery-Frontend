import Cards from "../components/Cards";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoClounds from "../components/LogoClouds";
import Section from "../components/Section";


export default function Home() {
      return (
            <div className='App bg-[#1A1A1A]'>
                  <Header />
                  <Container />
                  <Section />
                  <Cards />
                  <LogoClounds />
                  <Footer />
            </div>
      )
}