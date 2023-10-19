import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  usuario: {},
  token: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      // console.log('Sucesso');
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.usuario = action.payload.usuario;
      newState.token = action.payload.token;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default:
      return state;
  }
}
