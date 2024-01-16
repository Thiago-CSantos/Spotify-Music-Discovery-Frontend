import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import myImage from './image/Image.svg';
import './styles/container.css'
import { Parallax } from 'react-parallax';

const Container = () => {
      const initialContador = Number(localStorage.getItem('contador')) || 0;
      const [contador, setContador] = useState(initialContador);

      const atualizaContador = () => {
            const contadorStorage = contador + 1;
            setContador(contadorStorage);
            // Salva no localStorage
            localStorage.setItem('contador', String(contadorStorage));
      };

      window.onload = atualizaContador;
      console.log(contador);


      // Defina os breakpoints conforme necessário
      const isWideEnough = useMediaQuery({ minWidth: 912 });

      return (

            <>
                  <div className='global-conainer tall:flex ml-0 mr-0 bg-[#1A1A1A]'>
                        {/* sub-container */}
                        <div className='container flex-col justify-center items-start inline-flex tall:pl-[140px] pl-3'>
                              <div className="flex-col justify-start items-end gap-5 inline-flex">
                                    <div className="self-stretch text-white text-5xl font-semibold font-['Urbanist'] leading-[72px]">Discover Your Dream Property with Estatein</div>
                                    <div className="self-stretch text-neutral-400 text-lg font-medium font-['Urbanist'] leading-[27px]">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</div>
                              </div>
                              {/* Botão */}
                              <div className='w-full justify-start items-center gap-5 inline-flex mb-2 tall:mb-0'>
                                    <div className="px-6 py-2 border border-neutral-800 rounded">
                                          <div className="text-gray-400 leading-[27px] hover:cursor-pointer">Learn More</div>
                                    </div>
                                    <div className="px-6 py-2 border border-neutral-800 bg-violet-700 rounded  ">
                                          <div className="text-white leading-[27px] hover:cursor-pointer">Browse Properties</div>
                                    </div>
                              </div>

                        </div>

                        {isWideEnough ? (
                              <div className='img01'>
                                    <img className='' src={myImage} alt="image" />
                              </div>
                        ) : (
                              <div className='img01'>
                                    <Parallax bgImage={myImage} bgImageSizes='5000' bgImageAlt="the cat" strength={200}>

                                          <div style={{ height: '300px' }} />
                                    </Parallax>
                              </div>
                        )}
                  </div>
                  {/* cards */}
                  <div className="w-full bg-[#1A1A1A] pt-6 pb-3 -mt-4 flex justify-start tall:pl-[140px] pl-3">
                        <div className='w-1/2 justify-start items-start gap-7 inline-flex'>
                              <div className='grow basis-0 px-2 py-1 bg-zinc-900 rounded-xl border border-neutral-800 flex-col justify-start items-start inline-flex'>
                                    <div className='self-stretch text-white text-[20px] font-bold leading-[60px]'>
                                          {contador}+
                                    </div>
                                    <div className='self-stretch text-neutral-400 text-sm font-medium font-[Urbanist] leading-[27px]'>
                                          Número Acesso
                                    </div>
                              </div>
                              <div className='grow basis-0 px-2 py-1 bg-zinc-900 rounded-xl border border-neutral-800 flex-col justify-start items-start inline-flex'>
                                    <div className='self-stretch text-white text-[20px] font-bold leading-[60px]'>
                                          300+
                                    </div>
                                    <div className='self-stretch text-neutral-400 text-sm font-medium font-[Urbanist] leading-[27px]'>
                                          Happy
                                    </div>
                              </div>
                              <div className='grow basis-0 px-2 py-1 bg-zinc-900 rounded-xl border border-neutral-800 flex-col '>
                                    <div className='self-stretch text-white text-[20px] font-bold leading-[60px]'>
                                          400+
                                    </div>
                                    <div className='self-stretch text-neutral-400 text-sm font-medium font-[Urbanist] leading-[27px]'>
                                          Happy
                                    </div>
                              </div>
                        </div>
                  </div>
            </>

      );
};

export default Container;