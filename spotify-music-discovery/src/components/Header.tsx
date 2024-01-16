/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import './styles/header.css';
import myGif from './image/icons8-fones-de-ouvido.gif';

const Header = () => {
      const Links = [
            { name: 'Home', link: '/' },
            { name: 'Service', link: '/' },
            { name: 'About', link: '/' },
            { name: 'Contato', link: '/' },
      ];

      const [open, setOpen] = useState(false);

      return (
            <div className='shadow-md w-full top-0 left-0'>
                  <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
                        {/* {logo} */}
                        <div className='flex text-2xl cursor-pointer items-center gap-2'>
                              <img src={myGif} alt="ss" />
                              <span className='font-bold'>Music Discovery</span>
                        </div>
                        {/* Menu icons */}
                        <div onClick={() => setOpen(!open)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden '>
                              {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                        </div>

                        {/* nav links */}
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 bg-white
                         w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in max-md:mt-8 tallM:mt-4 ${open ? 'top-12' : 'top-[-490px]'}
                        `}>
                              {
                                    Links.map((link, key) => {
                                          return (
                                                <li key={key} className='font-medium md:my-0  text-[#262626] liHover py-1 px-4 font-[Urbanist] leading-[27px]'>
                                                      <a href={link.link}>{link.name}</a>
                                                </li>
                                          )
                                    })
                              }
                              <button className='btn bg-purple-700 text-white py-1 px-3 md:ml-8 rounded md:static'> Get Started</button>
                        </ul>
                  </div>
            </div>
      );
};

export default Header;