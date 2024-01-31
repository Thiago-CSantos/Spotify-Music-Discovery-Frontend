import React, { useState } from 'react';
import './styles/login.css'
import axios from 'axios';

const Login: React.FC = () => {
      const apiUrl = import.meta.env.VITE_REACT_APP_NODEJS_API_URL;

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [user, setUser] = useState(null);
      const [erro, setErro] = useState('');

      const handleLogin = async (e: any) => {
            e.preventDefault();

            if (email === '' || password === '') {
                  setErro('Por favor, preencha todos os campos.');
                  return;
            }

            try {
                  const resposta = await axios.post(`${apiUrl}/loginApp`, {
                        email: email,
                        password: password,
                  });
                  console.log('Resposta', resposta.data);
                  if (resposta.data.exist === true) {
                        console.log('exist é true');
                        window.location.replace('/');
                  } else if (!user) {
                        setUser(null);
                        return;
                  }
                  setUser(resposta.data.user.name);
            } catch (error: any) {
                  if (error.response && error.response.status === 401) {
                        setErro('Usuário ou senha inválidos');
                  } else {
                        setErro('Erro ao acessar o servidor');
                  }
            }
      };

      return (
            <>
                  <div className="login-form-wrap">
                        <div>
                              <h2 className='border-b-2 border-[#1db954] mb-2 pb-1'>Login</h2>
                              <form action="" method="post" className="login-form">
                                    <input type="email" name='email' placeholder='E-mail' required onChange={(e) => { setEmail(e.target.value) }} />
                                    <input type="password" name='password' placeholder='Password' required onChange={(e) => { setPassword(e.target.value) }} />
                                    <button type="submit" className='bg-[#1DB954] w-full block relative mt-3 mb-1 p-2 text-white text-center font-bold uppercase transition-all ease-linear hover:bg-transparent hover:text-black hover:border border'
                                          onClick={(e) => { handleLogin(e) }}>Login</button>
                              </form>
                              <button type="button" className='w-full block relative mb-0 p-1 text-left'>
                                    <a href="/cadastrar"
                                          className='text-blue-600 decoration-1 underline ml-3 visited:text-blue-800 '>
                                          Não possui cadastro?
                                    </a>
                              </button>
                              <p className='text-red-500'>{erro}</p>
                        </div>
                  </div>
            </>
      );
};

export default Login;