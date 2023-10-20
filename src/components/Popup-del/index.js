import React from 'react';
import PropTypes from 'prop-types';

import { Pop } from './styled';

export default function Popup_del({
  p_nome, s_nome, t_nome, cancel, confirm, id,
}) {
  return (
    <Pop>
      <div className="box">
        <header>
          <h1>
            Deseja apagar o aluno
            {' '}
            {`${p_nome} ${s_nome} ${t_nome}`}
            ?
          </h1>
        </header>
        <button type="button" id="cancel" onClick={cancel}>Cancelar</button>
        <button type="button" id="confirm" onClick={() => confirm(id)}>Confirmar</button>
      </div>
    </Pop>
  );
}

Popup_del.defaultProps = {
  t_nome: '',
};

Popup_del.propTypes = {
  p_nome: PropTypes.string.isRequired,
  s_nome: PropTypes.string.isRequired,
  t_nome: PropTypes.string,
  cancel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
