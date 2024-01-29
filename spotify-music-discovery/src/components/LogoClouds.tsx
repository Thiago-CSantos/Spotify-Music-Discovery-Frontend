import './styles/logoClouds.css';

export default function LogoClounds() {
      return (
            <div className="bg-[#1A1A1A] py-24 sm:py-32 ">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-lg font-semibold leading-8 text-white">
                              Principais Tecnologias usadas:
                        </h2>
                        <div className=" mx-auto py-3 mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                              <img
                                    className="md:pl-1 col-span-2 max-h-12 w-full object-contain lg:col-span-1 transition duration-500 ease-in-out transform hover:scale-110"
                                    src="https://cdn.worldvectorlogo.com/logos/nodejs.svg"
                                    alt="NodeJS"
                                    width={158}
                                    height={48}
                              />
                              <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 transition duration-500 ease-in-out transform hover:scale-110"
                                    src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                                    alt="TypeScript"
                                    width={158}
                                    height={48}
                              />
                              <img
                                    className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 lg:pr-10 transition duration-500 ease-in-out transform hover:scale-110"
                                    src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                                    alt="ReactJS"
                                    width={158}
                                    height={48}
                              />
                              <img
                                    className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1 transition duration-500 ease-in-out transform hover:scale-110"
                                    src="https://cdn.worldvectorlogo.com/logos/tailwind-css-wordmark.svg"
                                    alt="TailwindCSS"
                                    width={158}
                                    height={48}
                              />
                              <img
                                    className="col-span-2 col-start-2 max-h-12 w-full pl-10 object-contain sm:col-start-auto lg:col-span-1 transition duration-500 ease-in-out transform hover:scale-110"
                                    src="https://cdn.worldvectorlogo.com/logos/spotify-logo.svg"
                                    alt="SpotifyAPI"
                                    width={158}
                                    height={48}
                              />
                        </div>
                  </div>
            </div>
      )
}
