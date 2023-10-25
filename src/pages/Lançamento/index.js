import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import axios from '../../services/axios';
import Title from '../../components/Subheader';
import { Content } from './styled';
import Loading from '../../components/Loading';

export default function Lancamento() {
  const [aluno, setNome] = useState('');
  const [valor_matricula, setMatricula] = useState();
  const [desconto, setDesconto] = useState();
  const [valor_recebido, setRecebido] = useState();
  const [data_pagamento, setPagamento] = useState('');
  const [data_lancamento, setLancamento] = useState(moment().format('DD/MM/YYYY'));
  const [mes_referente, setReferente] = useState('');
  const [metodo, setMetodo] = useState();
  const [listaAlunos, setListaAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [descontos, setDescontos] = useState([]);
  const [valor, setValor] = useState();
  const [data, setData] = useState();

  let calc = 0;

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const response = await axios.get('/descontos');
      const response2 = await axios.get('/alunos');

      setDescontos(response.data);
      setListaAlunos(response2.data);

      console.log(descontos);

      setIsLoading(false);
    }
    getData();
  }, []);

  const handleBlur = (e) => {
    calc = parseFloat(valor_matricula - (valor_matricula * desconto) / 100, 10);
    console.log(calc);
    setRecebido(calc);
  };

  const handleData = () => {
    const dt = data.split('-');

    setPagamento(`${dt[2]}/${dt[1]}/${dt[0]}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const dt = data.split('-');

    // setPagamento(`${dt[2]}/${dt[1]}/${dt[0]}`);
    // console.log(data_pagamento);

    try {
      const response = await axios.post('/lancamentos', {
        aluno,
        valor_matricula,
        desconto,
        valor_recebido,
        data_pagamento,
        data_lancamento,
        mes_referente,
        metodo,
      });
      console.log(response.data);
      toast.success('Lançado.');
    } catch {
      console.log('deu errado');
      toast.error('Ocorreu um erro.');
    }

    // #region Resetando
    setNome('');
    setMatricula('');
    setDesconto('');
    setRecebido('');
    setPagamento('');
    setReferente('');
    setMetodo('');
    // #endregion Resetando
  };

  const handleDesconto = (e) => {
    const teste = e.target.value;

    console.log(teste);
  };

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Title nome="Lançamento" />
      <Content className="main">
        <form onSubmit={handleSubmit}>
          <div className="lado-1">
            <section>
              <label htmlFor="nome_aluno">
                Nome do aluno
                <input
                  autoComplete="off"
                  type="search"
                  list="lista-alunos"
                  id="nome_aluno"
                  value={aluno}
                  onChange={(e) => setNome(e.target.value)}
                />
              </label>
              <datalist id="lista-alunos">
                {listaAlunos && listaAlunos.map((aln) => (
                  <option value={aln.nome}>{aln.nome}</option>
                ))}
              </datalist>
              <label htmlFor="val_mat">
                Valor da matrícula
                <input
                  type="text"
                  id="val_mat"
                  value={valor_matricula}
                  onChange={(e) => setMatricula(parseInt(e.target.value, 10))}
                />
              </label>
              <label htmlFor="desconto">
                Desconto
                <input
                  autoComplete="off"
                  type="search"
                  id="desconto"
                  list="lista"
                  onChange={(e) => setDesconto(parseInt(e.target.value, 10))}
                  onBlur={handleBlur}
                  value={desconto}
                />

              </label>
              <datalist id="lista">
                {descontos.map((desconte) => (
                  <option value={desconte.valor} onClick={handleDesconto}>
                    {desconte.desconto}
                    {' '}
                    {desconte.valor}
                  </option>

                ))}
              </datalist>
              <div className="metodos">
                <p>Pix</p>
                <input type="checkbox" value="Pix" onChange={(e) => setMetodo(e.target.value)} />
                <p>Cartão</p>
                <input type="checkbox" value="Cartão" onChange={(e) => setMetodo(e.target.value)} />
                <p>Dinheiro</p>
                <input type="checkbox" value="Dinheiro" onChange={(e) => setMetodo(e.target.value)} />
              </div>
            </section>
          </div>
          <div className="lado-2">
            <section>
              <label htmlFor="val_rec">
                Valor recebido
                <input
                  type="number"
                  id="val_rec"
                  value={valor_recebido}
                />
              </label>
              <label htmlFor="data_pag">
                Pagamento
                <input
                  type="date"
                  id="data_pag"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  onBlur={(handleData)}
                />
              </label>
              <label htmlFor="mes_ref">
                Mês referente
                <input
                  type="text"
                  id="mes_ref"
                  value={mes_referente}
                  onChange={(e) => setReferente(e.target.value)}
                />
              </label>
            </section>
          </div>
          <footer>
            <button type="submit">Enviar</button>
          </footer>
        </form>
      </Content>
    </>
  );
}
