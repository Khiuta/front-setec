import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
    position: static;
    background: ${primaryColor};
    display: flex;
    flex: 1 1 100vw;
    height: 100px;
    align-items: center;

    h1 {
      position: relative;
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 36px;
      cursor: pointer;
      left: 40%;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    .menu {
      position: relative;
      left: 1%;
      cursor: pointer;
    }

    @media only screen and (max-width: 412px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 100px;
     align-items: center;

    h1 {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
      cursor: pointer;
      left: 29%;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    .menu {
      position: relative;
      left: 1%;
      cursor: pointer;
    }
    }
`;
