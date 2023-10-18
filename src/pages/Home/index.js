import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import { Content, Search } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Home() {
  const dispatch = useDispatch();

  const [busca, setBusca] = useState('');

  const [turmas, setTurma] = useState([]);

  const [lancamento, setLancamento] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
      setIsLoading(true);

      const response = await axios.get('/turma');
      const response2 = await axios.get('/lancamentos');

      setLancamento(response2.data);
      setTurma(response.data);

      setIsLoading(false);
    } catch {
      dispatch(actions.loginFailure());
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Search>
        <input
          type="text"
          placeholder="Procure por professor"
          onChange={(e) => setBusca(e.target.value)}
        />
      </Search>
      <Content>
        {turmas.filter((turma) => (busca.toLowerCase() === ''
          ? turma
          : turma.nome_turma.toLowerCase().includes(busca)
        )).map((turma) => (
          <div className="card">
            <header><h2>{turma.nome_turma}</h2></header>
            <section className="info">
              <p>
                Quantidade de alunos:
                {' '}
                {turma.qtd_alunos}
              </p>
              <p>
                Disciplina do mês:
                {' '}
                {turma.disciplina_atual}
              </p>
              <p>
                Quantidade de devedores:
                {' '}
                {turma.qtd_devedores}
              </p>
            </section>
          </div>
        ))}
      </Content>
    </>
  );
}
