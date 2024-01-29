import React, { HTMLAttributes, useEffect, useState } from 'react';
import axios from 'axios';

interface Propriedades extends HTMLAttributes<HTMLDivElement> {
      imgSrc: string;
}


const RedirectPlayer: React.FC<Propriedades> = ({ imgSrc, ...props }) => {
      const [dados, setDados] = useState<any>(null);
      // Config para usar o Spotify
      const clientId = 'cab7c6673d954a31828e2f2c616c4c75';
      const redirectUri = 'http://localhost:8080/callback';
      const authorizationUrl = 'https://accounts.spotify.com/authorize';
      const responseType = 'code';
      const scope = 'app-remote-control streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state';

      useEffect(() => {
            // Inicia a autenticação ao montar o componente
            const authUrl = `${authorizationUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
            // Redireciona a pagina 
            window.location.replace(authUrl);

      }, []);
      return (
            <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                  <div className="text-center">
                        <p className="text-base font-semibold text-indigo-600">307</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Estamos te redirecionando para a pagina</h1>
                        <p className="mt-6 text-3xl leading-7 text-gray-600">Isso pode levar alguns minutos<span className='font-extrabold'> ...</span></p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                              <a
                                    href="/"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                    Voltar
                              </a>

                        </div>
                  </div>
            </main>
      );
};
export default RedirectPlayer;