import React, { useState } from 'react';
import './styles/login.css'
import axios from 'axios';

const Cadastrar: React.FC = () => {
      const apiUrl = import.meta.env.VITE_REACT_APP_NODEJS_API_URL || 'default-api-url';
      console.log('Teste', apiUrl);

      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [erro, setErro] = useState('');

      const handleCadastrar = async (e: any) => {
            e.preventDefault();

            if (nome === '' || email === '' || password === '') {
                  setErro('Por favor, preencha todos os campos.');
                  return;
            }

            try {
                  const resposta = await axios.post(`${apiUrl}/cadastrarApp`, {
                        name: nome,
                        email: email,
                        password: password,
                  });
                  setErro('');
                  console.log(resposta.data);
                  window.location.href = '/login'
            }
            catch (error: any) {
                  if (error.response.status === 416) {
                        setErro(error.response.data)
                        console.error('Erro ao cadastrar usuário:', error.response.data);
                  } else if (error.response.status === 500) {
                        console.error('Erro interno do servidor', error.response.data);
                  }
            }
      }

      return (
            <>
                  <div className="login-form-wrap">

                        <div>
                              <h2 className='border-b-2 border-[#1db954] mb-2 pb-1'>Cadastrar-se</h2>
                              <form action="" method="post" className="login-form">
                                    <input type="text" name='nome' placeholder='Nome completo' required onChange={(e) => setNome(e.target.value)} />
                                    <input type="email" name='email' placeholder='E-mail' required onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" name='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                                    <button type="submit" className='bg-[#1DB954] w-full block relative mt-3 mb-0 p-2 text-white text-center font-bold uppercase transition-all ease-linear hover:bg-transparent hover:text-black hover:border border'
                                          onClick={(e) => { handleCadastrar(e) }}>Cadastrar-se</button>
                              </form>
                              <button type="button" className='w-full block relative mb-5 p-1 text-left'>
                                    <a href="/login"
                                          className='text-blue-600 decoration-1 underline ml-3 visited:text-blue-800 '>
                                          Já possui cadastro?
                                    </a>
                              </button>
                              <p className='text-red-500'>{erro}</p>
                        </div>

                  </div>
            </>
      );
};

export default Cadastrar;