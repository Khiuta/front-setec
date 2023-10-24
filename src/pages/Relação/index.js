import React, { useState, useEffect } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import * as colors from '../../config/colors';
import { Content, Search } from './styled';
import Title from '../../components/Subheader';
import DropInfo from '../../components/DropInfo';
import Loading from '../../components/Loading';
import Popup_del from '../../components/Popup-del';

export default function Relação() {
  const dispatch = useDispatch();

  const [info, setInfo] = useState(false);
  const [style, setStyle] = useState('drop');
  const [alunos, setAlunos] = useState([]);
  const [busca, setBusca] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [p_nome, setPnome] = useState('');
  const [s_nome, setSnome] = useState('');
  const [t_nome, setTnome] = useState('');
  const [id, setId] = useState('');

  async function getData() {
    try {
      setIsLoading(true);

      const response = await axios.get('/alunos');
      await axios.get('/lancamentos');
      setAlunos(response.data);

      setIsLoading(false);
    } catch {
      dispatch(actions.loginFailure());
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDrop = (identifier) => {
    const newInfo = info === identifier ? false : identifier;
    setInfo(newInfo);
    // console.log(identifier);
    // console.log(info);

    const newStyle = style;
    switch (newStyle) {
      case 'drop':
        setStyle('drop-2');
        break;
      case 'drop-2':
        setStyle('drop');
        break;
      default:
        setStyle('drop');
        break;
    }
  };

  const handleRemove = async (identifier) => {
    await axios.delete(`/alunos/${identifier}`);
    getData();
    const newPop = popup;
    setPopup(!newPop);
  };

  const handlePop = (nome, identifier) => {
    const newPop = popup;
    setPopup(!newPop);

    let aluno = nome;
    aluno = aluno.split(' ');

    setPnome(aluno[0]);
    setId(identifier);

    if (aluno[1].length <= 3) {
      setSnome(aluno[1]);
      return setTnome(aluno[2]);
    }

    setSnome(aluno[1]);
    setTnome('');
  };

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      {popup && (
      <Popup_del
        p_nome={p_nome}
        s_nome={s_nome}
        t_nome={t_nome}
        cancel={() => {
          const newPop = popup;
          setPopup(!newPop);
        }}
        confirm={handleRemove}
        id={id}
      />
      )}
      <Title
        nome="Relação de alunos"
      />
      <Search>
        <input
          type="text"
          placeholder="Pesquise o aluno"
          onChange={(e) => setBusca(e.target.value)}
        />
        <FiSearch size={30} className="lupa" />
      </Search>
      <Content>
        <div className="alunos">
          {alunos.filter((aluno) => (busca.toLowerCase() === ''
            ? aluno
            : aluno.nome.toLowerCase().includes(busca)
          )).map((aluno) => {
            if (info === aluno.id) {
              return (
                <React.Fragment key={aluno.id}>

                  <section>
                    {aluno.pagamento === 'devendo'
                      ? (
                        <BsFillCircleFill
                          size={24}
                          color={colors.statusRedColor}
                          className="circle"
                        />
                      )
                      : (
                        <BsFillCircleFill
                          size={24}
                          color={colors.statusGreenColor}
                          className="circle"
                        />
                      )}
                    <p>
                      {aluno.nome}
                    </p>
                    <div className="icons">
                      <AiOutlineDelete
                        className="thrash"
                        size={28}
                        onClick={handlePop}
                      />
                      <IoIosArrowDropdown
                        type="checkbox"
                        onClick={() => handleDrop(aluno.id)}
                        className="drop"
                        size={28}
                      />
                    </div>
                  </section>
                  <DropInfo
                    nome={aluno.nome}
                    cpf={aluno.cpf}
                    rg={aluno.rg}
                    nasc={aluno.nascimento}
                    igr={aluno.igreja}
                    end={aluno.endereço}
                    natu={aluno.cidade_estado}
                    tel={aluno.telefone}
                    stts={aluno.status_civil}
                    turma={aluno.turma}
                    matricula={aluno.created_at}

                  />
                </React.Fragment>
              );
            }
            return (
              <section key={aluno.id}>
                {aluno.pagamento === 'devendo'
                  ? (
                    <BsFillCircleFill
                      size={24}
                      color={colors.statusRedColor}
                      className="circle"
                    />
                  )
                  : (
                    <BsFillCircleFill
                      size={24}
                      color={colors.statusGreenColor}
                      className="circle"
                    />
                  )}
                <p>
                  {aluno.nome}
                </p>
                <div className="icons">
                  <AiOutlineDelete
                    className="thrash"
                    size={28}
                    onClick={() => handlePop(aluno.nome, aluno.id)}
                  />
                  <IoIosArrowDropdown
                    type="checkbox"
                    onClick={() => handleDrop(aluno.id)}
                    className="drop"
                    size={28}
                  />
                </div>
              </section>
            );
          })}
        </div>
      </Content>
    </>
  );
}
