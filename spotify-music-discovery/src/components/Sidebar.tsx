import React, { HTMLAttributes, useEffect, useState } from 'react';
import './styles/sidebar.css';
import myImg from './image/icons8-fones-de-ouvido.gif';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { IoHomeOutline } from "react-icons/io5";
import { FaLink } from 'react-icons/fa';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
      urlImage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ urlImage, ...props }) => {

      const [open, setOpen] = useState(true);

      function clicarSidebar() {
            setOpen(!open);
      }

      useEffect(() => {

            function handleResize() {
                  const novaLargura = window.innerWidth;
                  if (novaLargura <= 740) {
                        setOpen(false);
                  }else{
                        setOpen(true);
                  }
            };

            // Adiciona um ouvinte de evento para atualizar a largura da tela quando a janela é redimensionada
            window.addEventListener('resize', handleResize);

            return () => {
                  window.removeEventListener('resize', handleResize);
            };
      }, []);

      return (
            <nav {...props} className={`sidebar z-10 ${open ? '' : 'close'}`}>
                  <header>
                        <div className="image-text">
                              <span className='image'>
                                    <img src={myImg} alt="gif" />
                              </span>

                              <div className="text header-text">
                                    <span className='name'>Stats</span>
                                    <span className='profession'>for Spotify</span>
                              </div>
                        </div>

                        <button onClick={clicarSidebar}>
                              {open ? (
                                    <ChevronLeftIcon className='w-6 h-6 flex justify-center items-center rounded-[50%] toggle' />
                              ) : (
                                    <ChevronRightIcon className='w-6 h-6 flex justify-center items-center rounded-[50%] toggle' />
                              )}
                        </button>
                  </header>
                  <div className="menu-bar">
                        <div className="menu">
                              <ul className="menu-links">
                                    <li className="nav-link icon">
                                          <a href="/">
                                                <IoHomeOutline className='icon' />
                                                {open ? (
                                                      <span className="text nav-text">Home</span>
                                                ) : (
                                                      <span></span>
                                                )}
                                          </a>
                                    </li>
                                    <li className="nav-link icon">
                                          <a href={urlImage} target='_blank'>
                                                <FaLink className='icon ' />
                                                {open ? (
                                                      <span className="text nav-text">Abrir imagem</span>
                                                ) : (
                                                      <span></span>
                                                )}
                                          </a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>
      );
};

export default Sidebar;