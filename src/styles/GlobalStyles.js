import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    orientation: portrait;
  }

  body {
    // font-family: sans-serif;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.statusGreenColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    // background: ${colors.statusRedColor};
    color: #000;
  }

  input {
    border: none;
    border-bottom: 1px solid;
  }
`;
