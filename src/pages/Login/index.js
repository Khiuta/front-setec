import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { Form, Div } from './styled';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formError = false;

    dispatch(actions.loginRequest({
      nome, login, senha, prevPath,
    }));
  };

  const handleLog = () => {
    console.log(senha);
    console.log(nome);
  };

  return (
    <Div>
      <Form onSubmit={handleLog}>
        <header>
          <h1>Login</h1>
        </header>

        <div id="labels">
          <label htmlFor="nome_completo">
            Nome Completo
            <input type="text" id="nome_completo" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <br />
          <label htmlFor="nome_usuario">
            Nome de Usuario
            <input type="text" id="nome_usuario" value={login} onChange={(e) => setLogin(e.target.value)} />
          </label>
          <br />
          <label htmlFor="senha_usuario">
            Senha
            <input type="password" id="senha_usuario" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>
        </div>

        <footer>
          <button type="submit" onClick={handleSubmit}>Enviar</button>
        </footer>
      </Form>
    </Div>
  );
}
