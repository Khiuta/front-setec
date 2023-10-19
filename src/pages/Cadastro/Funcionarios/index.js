import { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { Div, Form } from './styled';
import axios from '../../../services/axios';

export default function Funcionario() {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    // #region validações
    if (validator.isEmpty(nome, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira um nome com 3 a 255 caracteres.');
    }

    if (validator.isEmpty(login)) {
      formErrors = true;
      toast.error('Insira um nome de login valido.');
    }

    if (senha.length < 6 || senha.length > 18) {
      formErrors = true;
      toast.error('Insira uma senha maior que 6 caracteres e menor ou igual a 18.');
    }

    if (formErrors) return;
    // #endregion validações

    try {
      const response = await axios.post('/usuarios', {
        nome, login, senha,
      });

      console.log(response.data);
      toast.success('Funcionario cadastrado.');

      // #region Resetando
      setNome('');
      setLogin('');
      setSenha('');
      // #endregion Resetando
    } catch {
      console.log('deu errado');
    }
  };
  return (
    <Div>
      <Form>
        <header>
          <h1>
            Cadastro
          </h1>
        </header>

        <div id="cadastros">
          <label htmlFor="nome_completo">
            Nome completo
            <input id="nome_completo" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <br />

          <label htmlFor="nome_de_usuario">
            Nome de usuario
            <input id="nome_de_usuario" type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
          </label>
          <br />

          <label htmlFor="senha">
            Senha
            <input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>
        </div>
        <footer>
          <button type="submit" onClick={handleSubmit}>Enviar</button>
        </footer>
      </Form>
    </Div>
  );
}
