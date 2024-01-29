import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/agora.css'
import Sidebar from '../components/Sidebar';
import CardImg from '../components/CardImg';
import { io } from 'socket.io-client';

const Player = () => {
      const urlString = useLocation();

      const [nomeMusica, setNomeMusica] = useState('');
      const [artistas, setArtistas] = useState([]);
      const [urlImg, setUrlImg] = useState('');
      const [playlist, setPlaylist] = useState('');
      const [tracks, setTracks] = useState('');
      const [duration_ms, setDuration_ms] = useState(0);
      const [progresso_ms, setProgresso_ms] = useState(0);
      const [device, setDevice] = useState<string[]>([]);

      useEffect(() => {

            const urlParams = new URLSearchParams(urlString.search);
            const accessToken = urlParams.get('accessToken');

            axios.get(`http://localhost:8080/player?accessToken=${accessToken}`)
                  .then(response => {
                        // imagem
                        setUrlImg(response.data.urlImage);
                        console.log(response.data);
                        
                        // Artistas
                        const arrayArtistas = response.data.dados.item.artists;
                        setArtistas(arrayArtistas);

                        // Nome da Musica
                        setNomeMusica(response.data.dados.item.name);

                        // Playlist
                        setPlaylist(response.data.dados.context.external_urls.spotify);

                        // Tracks
                        setTracks(response.data.dados.item.external_urls.spotify);

                        // Duração da musica
                        setDuration_ms(response.data.dados.item.duration_ms);

                        // Progresso da musica
                        setProgresso_ms(response.data.dados.progress_ms);


                        const deviceDados = response.data.dados.device;
                        // // Converte para um array
                        const deviceArray = Object.keys(deviceDados).map(key => `${key}: ${deviceDados[key]}`);
                        setDevice(deviceArray);
                        // console.log('teste', device);

                  })
                  .catch(error => {
                        console.log('erro', error);
                  })

            // WebSocket io
            const socket = io('http://localhost:8080');
            socket.emit('select', accessToken);

            socket.on('update', (data) => {
                  setProgresso_ms(data.progress_ms);
            });
            return () => {
                  socket.disconnect();
            };

      }, [urlString.search, urlImg, progresso_ms, device]);

      // console.log('Log do player: ', device);


      return (
            <div className='w-full min-h-screen text-white flex justify-center items-center bg-bg-cardPlayer bg-no-repeat bg-cover'>
                  <Sidebar urlImage={urlImg} deviceArrays={device} />
                  <div className='h-screen flex justify-center'>

                        <div className=' w-96 ml-28'>
                              <h1>Tocando</h1>
                              {/* <img className='m-auto' src={urlImg} alt="imagem do spotify" /> */}
                              <CardImg nomeMusica={nomeMusica} artistas={artistas} image={urlImg} playlist={playlist} tracks={tracks} milessegundos={duration_ms} progresso_ms={progresso_ms} />
                        </div>
                  </div>
            </div>
      );
};

export default Player;