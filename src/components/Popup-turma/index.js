import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import { Pop } from './styled';

export default function Popup_turma({ cancel, id, sala_codigo }) {
  const [nome_turma, setProf] = useState('');
  const [disciplina_atual, setDisc] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.put(`/turma/${id}`, {
        sala_codigo, nome_turma, disciplina_atual,
      });

      console.log(response.data);

      toast.success('Editado');

      setProf('');
      setDisc('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Pop>
      <div className="box">
        <form>
          <label htmlFor="prof">
            <p>Professor:</p>
            <input
              type="text"
              id="prof"
              value={nome_turma}
              onChange={(e) => setProf(e.target.value)}
            />
          </label>
          <label htmlFor="disc">
            <p>Disciplina:</p>
            <input
              type="text"
              id="disc"
              value={disciplina_atual}
              onChange={(e) => setDisc(e.target.value)}
            />
          </label>
          <footer>
            <button type="button" className="cancel" onClick={cancel}>Cancelar</button>
            <button type="button" className="edit" onClick={handleSubmit}>Editar</button>
          </footer>
        </form>
      </div>
    </Pop>
  );
}

Popup_turma.propTypes = {
  cancel: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  sala_codigo: PropTypes.number.isRequired,
};
