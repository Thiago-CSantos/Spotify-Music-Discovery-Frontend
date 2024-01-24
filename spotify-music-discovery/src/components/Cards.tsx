import React from 'react';
import Card from './Card';
import myGif from './image/spotify_4138136.png';



const Cards:React.FC = () => {
      return (
            <>
                  <div id='cardsStarted' className='xl:px-56 tallM:px-2 px-2 grid sm:grid-cols-3 gap-4 justify-center'>
                        <Card to='redirectPlayer' imgSrc={myGif} h1='Musica que está tocando' paragrafo='Buscar a música que está tocando.' />
                        <Card to='teste' imgSrc={myGif} h1='fd' paragrafo='lorem akmdnkalsjdjsahd jksad sa dlkhasdkjl asd sad asdasdasdasdasd asdas d' />
                        <Card to='' imgSrc={myGif} h1='gg' paragrafo='lorem akmdnkalsjdjsahd jksad sa dlkhasdkjl asd sad asdasdasdasdasd asdas d' />
                        <Card to='' imgSrc={myGif} h1='hhfdgdfgdfgdfg' paragrafo='lorem akmdnkalsjdjsahd jksad sa dlkhasdkjl asd sad asdasdasdasdasd asdas d' />
                  </div>
            </>
      )
};

export default Cards;