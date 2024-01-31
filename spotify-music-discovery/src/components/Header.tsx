/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import './styles/header.css';
import myGif from './image/icons8-fones-de-ouvido.gif';
import { Link } from 'react-router-dom';

const Header = () => {
      const Links = [
            { name: 'Home', link: 'homeSection', off: 100 },
            { name: 'Service', link: 'cardsStarted', off: -50 },
            { name: 'About', link: 'sobreSection' },
            { name: 'Contato', link: 'footerSection' },
      ];

      const [open, setOpen] = useState(false);

      return (
            <div id='homeSection' className='shadow-md w-full top-0 left-0'>
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
                                    Links.map((links, key) => {
                                          return (
                                                <li key={key} className='font-medium md:my-0  text-[#262626] liHover py-1 px-4 font-[Urbanist] leading-[27px] cursor-pointer'>
                                                      <ScrollLink to={links.link} smooth={true} duration={500} offset={links.off || 0}>
                                                            {links.name}
                                                      </ScrollLink>
                                                </li>
                                          )
                                    })
                              }
                              <ScrollLink to={'cardsStarted'} smooth={true} duration={500} offset={-50}>
                                    <button className='btn bg-purple-700 hover:bg-white text-white py-1 px-3 md:ml-8 rounded hover:bg-gray-2 00 border hover:border hover:border-neutral-800 hover:text-[#262626] md:static'> Get Started</button>
                              </ScrollLink>
                              <Link to={'/login'}>
                                    <button className='btn bg-transparent hover:bg-purple-700 text-[#262626] py-1 px-3 md:ml-8 rounded hover:bg-gray-2 00 border border-neutral-800 hover:border hover:border-none hover:text-white md:static'>Login</button>
                              </Link>
                        </ul>
                  </div>
            </div>
      );
};

export default Header;