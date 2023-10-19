import React, { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';

import Title from '../../../components/Subheader';
import { Main } from './styled';

export default function Outros() {
  const [nome_inst, setInst] = useState('');
  const [nome_turma, setTurma] = useState('');
  const [desconto, setDesconto] = useState('');
  const [valor, setValor] = useState('');
  const [nome_dis, setDis] = useState('');
  const [sala_codigo, setCodigo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = e.target.className;
    console.log(endpoint);
    let form_errors = false;

    switch (endpoint) {
      case 'instituicao':
        if (!validator.isLength(nome_inst, { min: 3, max: 255 })) {
          form_errors = true;
          toast.error('Informe um nome válido de instituição.');
        }
        if (form_errors) break;
        try {
          const response = await axios.post(`/${endpoint}`, {
            nome_inst,
          });
          console.log(response.data);
          toast.success('Instituição cadastrada.');
        } catch {
          console.log('deu errado');
        }
        break;
      case 'disciplina':
        if (!validator.isLength(nome_dis, { min: 3, max: 255 })) {
          form_errors = true;
          toast.error('Informe um nome válido de disciplina.');
        }
        if (form_errors) break;
        try {
          const response = await axios.post(`/${endpoint}`, {
            nome_dis,
          });
          console.log(response.data);
          toast.success('Disciplina cadastrada.');
        } catch {
          console.log('deu errado');
        }
        break;
      case 'turma':
        console.log(nome_turma);
        if (!validator.isLength(nome_turma, { min: 3, max: 255 })) {
          form_errors = true;
          toast.error('Informe um nome válido de turma.');
        }
        if (validator.isEmpty(sala_codigo)) {
          form_errors = true;
          toast.error('Informe o código da sala.');
        }
        if (form_errors) break;
        try {
          const response = await axios.post(`/${endpoint}`, {
            nome_turma, sala_codigo,
          });
          console.log(response.data);
          toast.success('Turma cadastrada.');
        } catch {
          console.log('deu errado');
        }
        break;
      case 'descontos':
        console.log(desconto);
        if (!validator.isLength(desconto, { min: 3, max: 255 })) {
          form_errors = true;

          toast.error('Informe um nome válido de desconto.');
        }
        if (validator.isEmpty(valor)) {
          form_errors = true;

          toast.error('Informe o valor do desconto.');
        }
        if (form_errors) break;
        try {
          // const valor = parseInt(valorString, 10);

          console.log(typeof valor);

          const response = await axios.post(`/${endpoint}`, {
            desconto, valor,
          });

          console.log(response.data);

          toast.success('Desconto cadastrado.');
        } catch {
          console.log('deu errado');
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Title nome="Outros cadastros" />
      <Main>
        <section className="sup">
          <div className="inst">
            <header>
              <h1>Instituição</h1>
            </header>
            <div className="form-inst">
              <form onSubmit={handleSubmit} className="instituicao">
                <label htmlFor="nome-inst">
                  Nome da instituição
                  <input
                    type="text"
                    placeholder="Nome da instituição"
                    id="nome-inst"
                    value={nome_inst}
                    onChange={(e) => setInst(e.target.value)}
                  />
                </label>
                <div className="botao">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
          <div className="turma-div">
            <header>
              <h1>Turma</h1>
            </header>
            <div className="form-turma">
              <form onSubmit={handleSubmit} className="turma">
                <label htmlFor="nome-turma">
                  Nome da turma
                  <input
                    type="text"
                    placeholder="Professor da turma"
                    id="nome-turma"
                    value={nome_turma}
                    onChange={(e) => setTurma(e.target.value)}
                  />
                </label>
                <label htmlFor="codigo-turma">
                  Código da turma
                  <input
                    type="text"
                    placeholder="Código da turma"
                    id="codigo-turma"
                    value={sala_codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </label>
                <div className="botao">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="inf">
          <div className="dis">
            <header>
              <h1>Disciplina</h1>
            </header>
            <div className="form-dis">
              <form onSubmit={handleSubmit} className="disciplina">
                <label htmlFor="nome-dis">
                  Nome da disciplina
                  <input
                    type="text"
                    placeholder="Nome da disciplina"
                    id="nome-dis"
                    value={nome_dis}
                    onChange={(e) => setDis(e.target.value)}
                  />
                </label>
                <div className="botao">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
          <div className="des">
            <header>
              <h1>Descontos</h1>
            </header>
            <div className="form-des">
              <form className="descontos" onSubmit={handleSubmit}>
                <label htmlFor="desconto">
                  Nome do desconto
                  <input
                    type="text"
                    placeholder="Nome do desconto"
                    id="desconto"
                    value={desconto}
                    onChange={(e) => setDesconto(e.target.value)}
                  />
                </label>
                <label htmlFor="valor">
                  Valor do desconto
                  <input
                    type="text"
                    placeholder="Valor do desconto"
                    id="valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </label>
                <div className="botao">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>

        </section>
      </Main>
    </>
  );
}
