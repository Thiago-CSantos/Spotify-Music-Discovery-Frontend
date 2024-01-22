import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/agora.css'
import Sidebar from '../components/Sidebar';

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
            <>
                  <Sidebar urlImage={urlImg}/>
                  <div className='bg-[#e4e9f7] h-screen flex justify-center'>

                        <div className='bg-red-500 w-96 ml-28'>
                              <h1>Tocando</h1>
                              <img className='m-auto' src={urlImg} alt="imagem do spotify" />
                        </div>
                  </div>
            </>
      );
};

export default Agora;