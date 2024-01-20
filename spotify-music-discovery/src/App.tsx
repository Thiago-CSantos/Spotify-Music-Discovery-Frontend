import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Section from './components/Section';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App bg-[#1A1A1A]'>
      <Header />
      <Container />
      <Section />
      <Cards />
      <Footer/>
    </div>
  );
}

export default App
