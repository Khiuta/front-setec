import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styled';

export default function Subheader({ nome }) {
  return (
    <Title>
      <h1>{nome}</h1>
    </Title>
  );
}

Subheader.propTypes = {
  nome: PropTypes.string.isRequired,
};
