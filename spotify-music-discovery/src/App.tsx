import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Teste from './routes/RedirectPlayer';
import Error from './routes/Error'
import Agora from './routes/Agora';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/redirectPlayer' element={<Teste imgSrc={''} />} />
        <Route path='/player' element={<Agora />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
