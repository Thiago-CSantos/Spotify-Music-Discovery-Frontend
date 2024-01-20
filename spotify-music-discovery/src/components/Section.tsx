import React from 'react';
import './styles/section.css';

const Section = () => {

      return (
            <>
                  <div className=" border-t border-gray-600">
                        <div className="mx-auto max-w-7xl py-10 sm:px-6 sm:py-14 lg:px-8">
                              <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                                    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                                          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.5" />
                                          <defs>
                                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                                      <stop stop-color="#7775D6" />
                                                      <stop offset="1" stop-color="#E935C1" />
                                                </radialGradient>
                                          </defs>
                                    </svg>
                                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-28 lg:text-left">
                                          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Mais sobre a API do Spotify e sua documentação.</h2>
                                          <p className="mt-6 text-lg leading-8 text-gray-300">A API Web do Spotify permite a criação de aplicativos que podem interagir com o serviço de streaming do Spotify, como recuperar metadados de conteúdo, obter recomendações, criar e gerenciar playlists ou controlar a reprodução.</p>
                                          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                                <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300">Get started</a>
                                                <a href="https://developer.spotify.com/documentation/web-api" target='_blank' className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                                          </div>
                                    </div>
                                    <div className="relative mt-16 h-80 lg:mt-8">
                                          <img className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 transition duration-500 ease-in-out transform hover:scale-110" src="https://developer.spotify.com/images/documentation/open-access/soa-abstracted-linking-flow.png" alt="App screenshot" width="1824" height="1080"/>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );

}

export default Section;