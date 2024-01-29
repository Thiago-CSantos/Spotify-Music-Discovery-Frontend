import { Provider } from "react-redux";
import store from "../../history/Store";
import Cards from "../Cards";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import LogoClounds from "../LogoClouds";
import Section from "../Section";



export default function Home() {
      return (
            <div className='App bg-[#1A1A1A]'>
                  <Provider store={store}>
                        <Header />
                        <Container />
                        <Section />
                        <Cards />
                        <LogoClounds />
                        <Footer />
                  </Provider>
            </div>
      )
}