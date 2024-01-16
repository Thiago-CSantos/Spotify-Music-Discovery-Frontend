import React from 'react';
import { Parallax } from 'react-parallax';
import myImage from './image/Image.svg';

const ParallaxComponent = () => {
      return (
            <div>
                  {/* Conteúdo acima do efeito parallax */}
                  <div style={{ height: '500px', backgroundColor: '#1A1A1A', color: 'white', textAlign: 'center' }}>
                        <h1>Conteúdo acima do parallax</h1>
                  </div>

                  {/* Efeito parallax */}
                  <Parallax bgImage={myImage} strength={500}>
                        <div style={{ height: '500px' }}>
                              {/* Conteúdo dentro do efeito parallax */}
                              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <h1>Conteúdo dentro do parallax</h1>
                              </div>
                        </div>
                  </Parallax>

                  {/* Conteúdo abaixo do efeito parallax */}
                  <div style={{ height: '500px', backgroundColor: '#1A1A1A', color: 'white', textAlign: 'center' }}>
                        <h1>Conteúdo abaixo do parallax</h1>
                  </div>
            </div>
      );
};

export default ParallaxComponent;
