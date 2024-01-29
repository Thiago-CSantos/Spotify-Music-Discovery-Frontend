import './styles/footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
      return (
            <>

                  {/* <section >
                        <div className='wave wave1' id="wave1"></div>
                        <div className='wave wave2' id="wave2"></div>
                        <div className='wave wave3' id="wave3"></div>
                        <div className='wave wave4' id="wave4"></div>
                  </section> */}

                  <footer id='footerSection' className='md:mt-9'>
                        <div className='relative w-full min-h-28 py-5 px-12 flex justify-center items-center waves'>
                              <ul className='relative flex justify-center items-center flex-wrap text-2xl  text-white'>
                                    <li className='hover:-translate-y-3 duration-300 mx-3 inline-block transition hover:text-[#00acee] '><a href="https://www.facebook.com/ThiagoSantosThC/"><FaFacebook /></a></li>
                                    <li className='hover:-translate-y-3 duration-300 mx-3 transition hover:text-[#0e76a8] '><a href="https://www.linkedin.com/in/thiago-santos-thc/" target='_blank'><FaLinkedin /></a></li>
                                    <li className='hover:-translate-y-3 duration-300 mx-3 transition hover:text-[#E4405F] '><a href="https://www.instagram.com/__thcx.y__/" target='_blank'><FaInstagram /> </a></li>
                                    <li className='hover:-translate-y-3 duration-300 mx-3 transition hover:text-[#6b6464] '><a href="https://github.com/Thiago-CSantos" target='_blank'><FaGithub /></a></li>
                              </ul>
                              <br />
                              <p className='text-white text-center mt-4 font-light pb-2 '> @2024 ThiagoCSantos | All Rights Reserved</p>
                        </div>

                  </footer>
            </>
      );
};

export default Footer;