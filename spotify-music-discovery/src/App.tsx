import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Section from './components/Section';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LogoClounds from './components/LogoClouds';


function App() {
  return (
    <div className='App bg-[#1A1A1A]'>
      <Header />
      <Container />
      <Section />
      <Cards />
      <LogoClounds />
      <Footer />
    </div>
  );
}

export default App
