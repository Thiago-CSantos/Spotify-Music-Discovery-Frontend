import React, { HTMLAttributes, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValorCompartilhado } from '../history/Store';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
      imgSrc: string;
      h1: string;
      paragrafo: string;
      to: string;
      addQueryParam: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, to, h1, paragrafo, addQueryParam, ...props }) => {

      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(setValorCompartilhado('Novo valor compartilhado - devicePlayer'));
            clickName();
      }, [])
      function clickName() {
            console.log('clicou');
      }
      return (
            <>

                  <div {...props} className='border border-neutral-800 relative max-w-xs overflow-hidden rounded-2xl shadow-lg group px-5 py-3'>
                        <div className='flex'>
                              <img src={imgSrc} alt="icone spotify" className='transition-transform group-hover:scale-110 duration-200' />
                        </div>
                        <div className='container text-white'>
                              <h1 className='font-bold '>{h1}</h1>
                              <p className='text-gray-400 indent-4'>{paragrafo}</p>
                        </div>
                        <div className='mt-1 mb-2'>
                              <Link to={to} className='group'>
                                    <span onClick={clickName} className="p-1 rounded-md bg-white font-semibold text-gray-900 shadow-sm hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300">
                                          Get started
                                    </span>
                              </Link>
                        </div>
                  </div>

            </>
      );
};

export default Card;
