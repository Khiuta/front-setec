import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

import Title from '../../components/Subheader';
import { Content } from './styled';
import Popup_fin from '../../components/Popup-fin';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Financeiro() {
  const [popup, setPopup] = useState(false);
  const [pagamentos, setPagamentos] = useState([]);
  const [meses, setMeses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePopup = () => {
    const newPopup = popup;
    setPopup(!newPopup);
  };

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const response = await axios.get('/lancamentos/lan/ordem');

      const janeiro = await axios.get('/lancamentos/Janeiro');
      const fevereiro = await axios.get('/lancamentos/Fevereiro');
      const marco = await axios.get('/lancamentos/Marco');
      const abril = await axios.get('/lancamentos/Abril');
      const maio = await axios.get('/lancamentos/Maio');
      const junho = await axios.get('/lancamentos/Junho');
      const julho = await axios.get('/lancamentos/Julho');
      const agosto = await axios.get('/lancamentos/Agosto');
      const setembro = await axios.get('/lancamentos/Setembro');
      const outubro = await axios.get('/lancamentos/Outubro');
      const novembro = await axios.get('/lancamentos/Novembro');
      const dezembro = await axios.get('/lancamentos/Dezembro');

      setPagamentos(response.data);
      setMeses([
        janeiro.data,
        fevereiro.data,
        marco.data,
        abril.data,
        maio.data,
        junho.data,
        julho.data,
        agosto.data,
        setembro.data,
        outubro.data,
        novembro.data,
        dezembro.data,
      ]);

      setIsLoading(false);
    }
    getData();
  }, []);

  const dados = [
    {
      mes: 'Jan',
      lucro: meses[0],
    },
    {
      mes: 'Fev',
      lucro: meses[1],
    },
    {
      mes: 'Mar',
      lucro: meses[2],
    },
    {
      mes: 'Abr',
      lucro: meses[3],
    },
    {
      mes: 'Maio',
      lucro: meses[4],
    },
    {
      mes: 'Jun',
      lucro: meses[5],
    },
    {
      mes: 'Jul',
      lucro: meses[6],
    },
    {
      mes: 'Ago',
      lucro: meses[7],
    },
    {
      mes: 'Set',
      lucro: meses[8],
    },
    {
      mes: 'Out',
      lucro: meses[9],
    },
    {
      mes: 'Nov',
      lucro: meses[10],
    },
    {
      mes: 'Dez',
      lucro: meses[11],
    },
  ];

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Title nome="Financeiro" />
      <Content>
        <div className="lado-1">

          <header className="sup">
            <button type="submit" onClick={handlePopup}>Exportar</button>
          </header>

          <div className="inf">

            {pagamentos.map((pagamento) => (

              <section key={pagamento.id}>

                <p>{pagamento.data_pagamento}</p>
                {' '}
                <p>{`Valor recebido: R$${pagamento.valor_recebido}`}</p>
                {' '}
                <p>{pagamento.metodo}</p>

              </section>

            ))}

          </div>

        </div>

        <div className="lado-2">

          {popup && <Popup_fin />}

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={dados}
              margin={{
                top: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="lucro" fill="#155881" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Content>
    </>
  );
}
