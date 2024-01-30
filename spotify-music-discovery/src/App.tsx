import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import RedirectPlayer from './routes/RedirectPlayer';
import Error from './routes/Error'
import Agora from './routes/Player';
import { Provider } from 'react-redux';
import store from './history/Store';
import Login from './routes/Login';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/redirectPlayer' element={<RedirectPlayer imgSrc={''} />} />
          <Route path='/player' element={<Agora />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
