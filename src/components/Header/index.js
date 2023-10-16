import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

import Menu from '../Menu';

export default function Header() {
  // const botaoClicado = useSelector((state) => state.example.botaoClicado);

  const [aberto, setAberto] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    const novoAberto = !aberto;
    setAberto(novoAberto);
    console.log(aberto);
  }

  return (
    <>
      <Nav>
        <AiOutlineMenu onClick={handleChange} className="menu" size={48} color="#fff" />
        <h1><Link to="/">SETEC</Link></h1>
      </Nav>
      {aberto && <Menu />}
    </>
  );
}
