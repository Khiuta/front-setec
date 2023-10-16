import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { List } from './styled';

export default function Menu() {
  const [style, setStyle] = useState('dontShow');

  const isAdmin = useSelector((state) => state.auth.usuario.is_admin);

  const handleChange = () => {
    const newStyle = style;
    switch (newStyle) {
      case 'dontShow':
        setStyle('show');
        break;
      case 'show':
        setStyle('dontShow');
        break;
      default:
        setStyle('show');
    }
  };

  return (
    <List>
      <ul>
        <li className={style} onClick={handleChange}>
          <p>
            Cadastro
            <ul>
              <li><Link to="/cadastro-alunos">Alunos</Link></li>
              <li><Link to="/cadastro-outros">Outros</Link></li>
              {isAdmin && <li><Link to="/cadastro-funcionario">Funcionario</Link></li>}
            </ul>
          </p>
        </li>
        <li>
          <Link to="/relação">
            Relação
          </Link>
        </li>
        <li>
          <Link to="/financeiro">
            Financeiro
          </Link>
        </li>
        <li>
          <Link to="/lançamento">
            Lançamento
          </Link>
        </li>
      </ul>
    </List>
  );
}
