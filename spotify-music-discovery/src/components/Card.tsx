import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
      imgSrc: string;
      h1: string;
      paragrafo: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, h1, paragrafo, ...props }) => {
      return (
            <>
                  <div {...props} className='border border-neutral-800 relative max-w-xs overflow-hidden rounded-2xl shadow-lg group px-5'>
                        <div className='flex'>
                              <img src={imgSrc} alt="icone spotify"
                                    className='transition-transform group-hover:scale-110 duration-200' />

                        </div>
                        <div className='container text-white'>
                              <h1 className='font-bold '>{h1}</h1>
                              <p className='text-gray-400 indent-4'>{paragrafo}</p>
                        </div>
                        <div className='mt-1 mb-2'>
                              <a href="#" className="p-1 rounded-md bg-white font-semibold text-gray-900 shadow-sm hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300">Get started</a>
                        </div>
                  </div>
            </>
      );
};

export default Card;
