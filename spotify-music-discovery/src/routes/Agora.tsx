import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/agora.css'
import Sidebar from '../components/Sidebar';
import CardImg from '../components/CardImg';

const Agora = () => {
      const urlString = useLocation();
      const [urlImg, setUrlImg] = useState('');

      useEffect(() => {

            const urlParams = new URLSearchParams(urlString.search);
            const accessToken = urlParams.get('accessToken');
            console.log(accessToken);

            axios.get(`http://localhost:8080/player?accessToken=${accessToken}`)
                  .then(response => {
                        console.log(response.data);
                        setUrlImg(response.data);
                  })
                  .catch(error => {
                        console.log('erro', error);
                  })


      }, [urlString.search, urlImg]);


      return (
            <div className='w-full min-h-screen text-white flex justify-center items-center bg-bg-cardPlayer bg-no-repeat bg-cover'>
                  <Sidebar urlImage={urlImg} />
                  <div className='h-screen flex justify-center'>

                        <div className=' w-96 ml-28'>
                              <h1>Tocando</h1>
                              {/* <img className='m-auto' src={urlImg} alt="imagem do spotify" /> */}
                              <CardImg image={urlImg} />
                        </div>
                  </div>
            </div>
      );
};

export default Agora;