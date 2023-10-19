import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import Alunos from '../pages/Cadastro/Alunos';
import Outros from '../pages/Cadastro/Outros';
import Relação from '../pages/Relação';
import Lancamento from '../pages/Lançamento';
import Financeiro from '../pages/Financeiro';
import Funcionario from '../pages/Cadastro/Funcionarios';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} isClosed />
      <PrivateRoute exact path="/login" component={Login} />
      <PrivateRoute exact path="/cadastro-alunos" component={Alunos} isClosed />
      <PrivateRoute exact path="/cadastro-outros" component={Outros} isClosed />
      <PrivateRoute exact path="/cadastro-funcionario" component={Funcionario} isClosed />
      <PrivateRoute exact path="/relação" component={Relação} isClosed />
      <PrivateRoute exact path="/lançamento" component={Lancamento} isClosed />
      <PrivateRoute exact path="/financeiro" component={Financeiro} isClosed />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
