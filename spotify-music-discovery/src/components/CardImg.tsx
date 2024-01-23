import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import './styles/cardImg.css';
import { MdQueueMusic } from 'react-icons/md';

interface CardImgProps {
      image: string;
}

const CardImg: React.FC<CardImgProps> = ({ image, ...props }) => {
      return (
            <div className='containers'>
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>

                  <main>
                        <div className="card">
                              <div className="nav">
                                    <ArrowDownCircleIcon className='w-7' />
                                    <span> Now Playing</span>
                                    <MdQueueMusic className='w-7 h-7'/>
                              </div>

                              <div className="img">
                                    <img src={image} alt="image spotify" />
                              </div>

                              <div className="details">
                                    <p className="title">Nome da Musica</p>
                                    <p className="artista">Nome do Artista</p>
                              </div>

                              <div className="progress">
                                    <input type="range" min={0} max={100} />
                              </div>

                              <div className='timer'>
                                    <span>00:00</span>
                                    <span>03:43</span>
                              </div>
                        </div>
                  </main>
            </div>
      );
};

export default CardImg;