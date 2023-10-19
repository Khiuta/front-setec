import React from 'react';
import PropTypes from 'prop-types';

import { Info } from './styled';

export default function DropInfo({
  nome, cpf, rg, nasc, igr, end, natu, tel, stts, turma, matricula,
}) {
  const date = matricula.split('T');
  const dat = date[0].split('-');
  console.log(date);

  return (
    <Info className="drop-info">
      <div className="lado-1">
        <p>
          <strong>Nome</strong>
          {' '}
          {nome}
        </p>
        <br />
        <p>
          <strong>CPF</strong>
          {' '}
          {cpf}
        </p>
        <br />
        <p>
          <strong>RG</strong>
          {' '}
          {rg}
        </p>
        <br />
        <p>
          <strong>Nascimento</strong>
          {' '}
          {nasc}
        </p>
        <br />
        <p>
          <strong>Igreja</strong>
          {' '}
          {igr}
        </p>
        <br />
      </div>
      <div className="lado-2">
        <p>
          <strong>Endereço</strong>
          {' '}
          {end}
        </p>
        <br />
        <p>
          <strong>Cidade/Estado</strong>
          {' '}
          {natu}
        </p>
        <br />
        <p>
          <strong>Telefone</strong>
          {' '}
          {tel}
        </p>
        <br />
        <p>
          <strong>Status civil</strong>
          {' '}
          {stts}
        </p>
        <br />
        <p>
          <strong>Turma</strong>
          {' '}
          {turma}
        </p>
        <br />
        <p>
          <strong>Matricula</strong>
          {' '}
          {`${dat[2]}/${dat[1]}/${dat[0]}`}
        </p>
      </div>
    </Info>
  );
}

DropInfo.propTypes = {
  nome: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  rg: PropTypes.string.isRequired,
  nasc: PropTypes.string.isRequired,
  igr: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  natu: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  stts: PropTypes.string.isRequired,
  turma: PropTypes.string.isRequired,
  matricula: PropTypes.string.isRequired,
};
