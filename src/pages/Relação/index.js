import React, { useState, useEffect } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import axios from '../../services/axios';

import * as actions from '../../store/modules/auth/actions';
import * as colors from '../../config/colors';
import { Content, Search } from './styled';
import Title from '../../components/Subheader';
import DropInfo from '../../components/DropInfo';
import Loading from '../../components/Loading';

export default function Relação() {
  const dispatch = useDispatch();

  const [info, setInfo] = useState(false);
  const [style, setStyle] = useState('drop');
  const [alunos, setAlunos] = useState([]);
  const [busca, setBusca] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Title
        nome="Relação de alunos"
      />
      <Search>
        <input
          type="text"
          placeholder="Digite sua busca"
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
                    <IoIosArrowDropdown
                      type="checkbox"
                      onClick={() => handleDrop(aluno.id)}
                      className={style}
                      size={24}
                    />
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
                    id={aluno.id}
                    data={getData}

                  />
                </React.Fragment>
              );
            }
            return (
              <section key={aluno.id}>
                {aluno.pagamento === 'devendo' ? <BsFillCircleFill size={24} color={colors.statusRedColor} className="circle" /> : <BsFillCircleFill size={24} color={colors.statusGreenColor} className="circle" /> }
                <p>
                  {aluno.nome}
                </p>
                <IoIosArrowDropdown
                  type="checkbox"
                  onClick={() => handleDrop(aluno.id)}
                  className="drop"
                  size={24}
                />
              </section>
            );
          })}
        </div>
      </Content>
    </>
  );
}
