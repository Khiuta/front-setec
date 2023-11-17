import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
// import { get } from 'lodash';

import axios from '../../../services/axios';
import Title from '../../../components/Subheader';
import { Content } from './styled';

export default function Alunos() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [nascimento, setNasc] = useState('');
  const [igreja, setIgr] = useState('');
  const [endereço, setEnd] = useState('');
  const [cidade_estado, setNatu] = useState('');
  const [telefone, setTel] = useState('');
  const [status_civil, setStatus] = useState('');
  const [turma, setTurma] = useState('');
  const [municipios, setMunicipios] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    // #region validações
    if (validator.isEmpty(nome, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira um nome com 3 a 255 caracteres.');
    }

    if (validator.isEmpty(cpf)) {
      formErrors = true;
      toast.error('Insira um CPF válido.');
    }

    if (validator.isEmpty(rg, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira RG válido.');
    }

    if (validator.isEmpty(nascimento, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira uma data de nascimento.');
    }

    if (validator.isEmpty(igreja, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira a igreja do aluno.');
    }

    if (validator.isEmpty(endereço, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira o endereço do aluno.');
    }

    if (validator.isEmpty(cidade_estado, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira a naturalidade do aluno.');
    }

    if (validator.isEmpty(telefone, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira o número de telefone do aluno.');
    }

    if (validator.isEmpty(status_civil, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira o estado civil do aluno.');
    }

    if (validator.isEmpty(turma, { ignore_whitespace: false })) {
      formErrors = true;
      toast.error('Insira a turma do aluno.');
    }

    if (formErrors) return;
    // #endregion validações

    try {
      const response = await axios.post('/alunos', {
        nome, cpf, rg, nascimento, igreja, endereço, cidade_estado, telefone, status_civil, turma,
      });

      console.log(response.data);
      toast.success('Aluno cadastrado.');

      // #region Resetando
      setNome('');
      setCpf('');
      setRg('');
      setNasc('');
      setIgr('');
      setEnd('');
      setNatu('');
      setTel('');
      setStatus('');
      setTurma('');
      // #endregion Resetando
    } catch {
      console.log('deu erro');
    }
  };

  async function getData() {
    try {
      const response = await axios.get('/municipios');
      setMunicipios(response.data);
    } catch {
      toast.error('Ocorreu um erro na lista de municípios.');
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Title
        nome="Alunos"
      />
      <Content>
        <form onSubmit={handleSubmit}>
          <div className="lado-1">
            <label htmlFor="nome">
              <span>Nome</span>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do aluno"
                id="nome"
              />
            </label>
            <label htmlFor="cpf">
              CPF
              <input
                type="text"
                value={cpf}
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                onChange={(e) => setCpf(e.target.value)}
                placeholder="CPF do aluno"
                id="cpf"
              />
            </label>
            <label htmlFor="rg">
              RG
              <input
                type="text"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
                placeholder="RG do aluno"
                id="rg"
              />
            </label>
            <label htmlFor="nascimento">
              Nascimento
              <input
                type="date"
                value={nascimento}
                onChange={(e) => setNasc(e.target.value)}
                placeholder="Data de nascimento"
                id="nascimento"
              />
            </label>
            <label htmlFor="endereco">
              Endereço
              <input
                type="text"
                value={endereço}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="Endereço do aluno"
                id="endereco"
              />
            </label>
          </div>
          <div className="lado-2">
            <label htmlFor="ci/es">
              Cidade/Estado
              <input
                autoComplete="off"
                type="search"
                list="municipios"
                value={cidade_estado}
                onChange={(e) => setNatu(e.target.value)}
                placeholder="Cidade e Estado de origem"
                id="ci/es"
              />
            </label>
            <datalist id="municipios">
              {municipios && municipios.map((mun) => (
                <option value={mun.name}>{mun.name}</option>
              ))}
            </datalist>
            <label htmlFor="tel">
              Telefone
              <input
                type="text"
                value={telefone}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Número de telefone"
                id="tel"
              />
            </label>
            <label htmlFor="stts">
              Estado civil
              <input
                list="opt"
                value={status_civil}
                onChange={(e) => setStatus(e.target.value)}
                type="search"
                placeholder="Estado civil"
                id="stts"
              />
            </label>
            <datalist id="opt">
              <option value="Solteiro">Solteiro</option>
              <option value="Casado">Casado</option>
              <option value="Divorciado">Divorciado</option>
              <option value="Separado">Separado</option>
              <option value="Viúvo">Viúvo</option>
            </datalist>
            <label htmlFor="ig">
              Igreja
              <input
                type="text"
                value={igreja}
                onChange={(e) => setIgr(e.target.value)}
                placeholder="Igreja correspondente"
                id="ig"
              />
            </label>
            <label htmlFor="turma">
              Código
              <input
                type="text"
                value={turma}
                onChange={(e) => setTurma(e.target.value)}
                placeholder="Código da turma"
                id="turma"
              />
            </label>
          </div>
          <div className="botao">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Content>
    </>
  );
}
