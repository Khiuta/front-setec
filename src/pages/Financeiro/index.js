import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import Title from '../../components/Subheader';
import { Content } from './styled';
import Popup_fin from '../../components/Popup-fin';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Financeiro() {
  const dispatch = useDispatch();

  const [popup, setPopup] = useState(false);
  const [pagamentos, setPagamentos] = useState([]);
  const [faturamento, setFat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePopup = () => {
    const newPopup = popup;
    setPopup(!newPopup);
  };

  async function getData() {
    try {
      setIsLoading(true);

      const response = await axios.get('/lancamentos/lan/ordem');
      setPagamentos(response.data);

      const response2 = await axios.get('/lancamentos/calc');
      setFat(response2.data);

      setIsLoading(false);
    } catch {
      dispatch(actions.loginFailure());
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const dados = [
    {
      mes: 'Jan',
      lucro: faturamento.totalJan,
    },
    {
      mes: 'Fev',
      lucro: faturamento.totalFev,
    },
    {
      mes: 'Mar',
      lucro: faturamento.totalMar,
    },
    {
      mes: 'Abr',
      lucro: faturamento.totalAbril,
    },
    {
      mes: 'Maio',
      lucro: faturamento.totalMaio,
    },
    {
      mes: 'Jun',
      lucro: faturamento.totalJun,
    },
    {
      mes: 'Jul',
      lucro: faturamento.totalJul,
    },
    {
      mes: 'Ago',
      lucro: faturamento.totalAgo,
    },
    {
      mes: 'Set',
      lucro: faturamento.totalSet,
    },
    {
      mes: 'Out',
      lucro: faturamento.totalOut,
    },
    {
      mes: 'Nov',
      lucro: faturamento.totalNov,
    },
    {
      mes: 'Dez',
      lucro: faturamento.totalDez,
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
          {popup && <Popup_fin />}
          <div className="inf">

            {pagamentos.map((pagamento) => (

              <section key={pagamento.id}>

                <p>{pagamento.data_pagamento}</p>
                {' '}
                <p>{`R$${pagamento.valor_recebido}`}</p>
                {' '}
                <p>{pagamento.metodo}</p>

              </section>

            ))}

          </div>

        </div>

        <div className="lado-2">

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
