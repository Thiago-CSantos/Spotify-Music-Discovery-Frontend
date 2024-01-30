import React, { useState } from 'react';
import './styles/login.css'
import axios from 'axios';

const Login: React.FC = () => {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [user, setUser] = useState(null);
      const [erro, setErro] = useState('');

      const handleLogin = async (e: any) => {
            e.preventDefault();

            try {
                  const resposta = await axios.post('http://localhost:8080/loginApp', {
                        email: email,
                        password: password,
                  });

                  console.log('Resposta', resposta.data);
                  setUser(resposta.data.name);
            } catch (error: any) {
                  if (error.response && error.response.status === 401) {
                        setErro('Usuário ou senha inválidos');
                  } else {
                        setErro('Erro ao acessar o servidor');
                  }
            }


      };

      const handleLougout = async (e: any) => {
            e.preventDefault();
            setUser(null);
      }

      return (
            <>
                  <div className="login-form-wrap">
                        {user == null ? (
                              <div>
                                    <h2>Login</h2>
                                    <form action="" method="post" className="login-form">
                                          <input type="email" name='email' placeholder='E-mail' required onChange={(e) => { setEmail(e.target.value) }} />
                                          <input type="password" name='password' placeholder='Password' required onChange={(e) => { setPassword(e.target.value) }} />
                                          <button type="submit" className='bg-[#329ddf] w-full block relative mt-3 mb-8 p-2 text-white text-center font-bold uppercase transition-all ease-linear hover:bg-purple-400'
                                                onClick={(e) => { handleLogin(e) }}>Login</button>
                                    </form>
                                    <button type="button" className='w-full block relative mb-5 p-1 text-left'>
                                          <a href="/cadastrar"
                                                className='text-blue-600 decoration-1 underline ml-3 visited:text-blue-800 '>
                                                Não possui cadastro?
                                          </a>
                                    </button>
                                    <p className='text-red-500'>{erro}</p>
                              </div>
                        ) : (
                              <div>
                                    <h2>Olá, {user}</h2>
                                    <button className='bg-[#329ddf] w-full block relative mt-3 mb-8 p-5 text-white text-center font-bold uppercase transition-all ease-linear hover:bg-purple-400' type='button'
                                          onClick={(e) => { handleLougout(e) }}>Logout</button>
                              </div>
                        )
                        }

                  </div>

            </>
      );
};

export default Login;