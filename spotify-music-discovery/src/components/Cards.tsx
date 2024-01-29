import React from 'react';
import Card from './Card';
import myGif from './image/spotify_4138136.png';



const Cards: React.FC = () => {
      return (
            <>
                  <div id='cardsStarted' className='xl:px-56 tallM:px-2 px-2 grid sm:grid-cols-3 gap-4 justify-center'>
                        <Card to='redirectPlayer' imgSrc={myGif} h1='Musica que está tocando' paragrafo='Buscar a música que está tocando.' addQueryParam={''} />
                        <Card to='redirect' imgSrc={myGif} h1='Teste do WebSocket' paragrafo='Está versão esta em teste ainda!!' addQueryParam={''} />
                        <Card to='redirect' imgSrc={myGif} h1='Teste' paragrafo='Está versão esta em teste ainda!!' addQueryParam={''} />
                        <Card to='redirect' imgSrc={myGif} h1='Teste' paragrafo='Está versão esta em teste ainda!!' addQueryParam={''} />
                  </div>
            </>
      )
};

export default Cards;