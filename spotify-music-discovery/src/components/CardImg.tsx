import React, { useEffect, useState } from 'react';
import './styles/cardImg.css';
import { MdQueueMusic } from 'react-icons/md';
import { SiMusicbrainz } from 'react-icons/si';

interface CardImgProps {
      nomeMusica: string;
      artistas: any;
      image: string;
      playlist: string;
      tracks: string;
      milessegundos: number;
      progresso_ms: number;
}

const CardImg: React.FC<CardImgProps> = ({ nomeMusica, artistas, image, playlist, tracks, milessegundos, progresso_ms }) => {

      const [artits, setArtits] = useState<string[]>([]);
      const [minutos, setMinutos] = useState<string>('');
      const [progresso, setProgresso] = useState<string>('');
      const [inputValue, setInputValue] = useState<number>(0);

      function converterMsParaMinutos(ms: number) {
            const minutos = Math.floor(ms / 60000); // 1 minuto = 60000 milissegundos
            const segundos = Math.floor((ms % 60000) / 1000); // 1 segundo = 1000 milissegundos

            const formatoMinutos = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
            return formatoMinutos;
      }

      useEffect(() => {
            const nomesArtistas: string[] = [];
            for (let i = 0; i < artistas.length; i++) {
                  nomesArtistas.push(artistas[i].name);
            };
            setArtits(nomesArtistas);

            const min: string = converterMsParaMinutos(milessegundos);
            setMinutos(min);

            const progressMin: string = converterMsParaMinutos(progresso_ms);
            setProgresso(progressMin);

            setInputValue((progresso_ms / milessegundos) * 100);

      }, [artistas, minutos, progresso]);

      return (
            <div className='containers'>
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>

                  <main>
                        <div className="card">
                              <div className="nav">
                                    <a href={tracks} target='_blank'><SiMusicbrainz className='w-7 h-7' /></a>
                                    <span>Now Playing</span>
                                    <a href={playlist} target='_blank'><MdQueueMusic className='w-7 h-7' /></a>
                              </div>

                              <div className="img">
                                    <img src={image} alt="image spotify" />
                              </div>

                              <div className="details">
                                    <p className="title">{nomeMusica}</p>
                                    <p className="artista">{artits.join(', ')}</p>
                              </div>

                              <div className="progress">
                                    <input type="range" min={0} max={100} value={inputValue} />
                              </div>

                              <div className='timer'>
                                    <span>{progresso}</span>
                                    <span>{minutos}</span>
                              </div>
                        </div>
                  </main>
            </div>
      );
};

export default CardImg;