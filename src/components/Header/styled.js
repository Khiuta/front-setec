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
      left: 43%;
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
    @media only screen and (min-width: 00px) and (max-width: 999px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 9vh;
     align-items: center;

    h1 {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
      cursor: pointer;
      left: 40%;
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

      height: 5vh;
    }
    }
    @media only screen and (min-width: 800px) and (max-width: 899px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 9vh;
     align-items: center;

    h1 {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
      cursor: pointer;
      left: 40%;
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

      height: 5vh;
    }
    }
    @media only screen and (min-width: 700px) and (max-width: 799px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 9vh;
     align-items: center;

    h1 {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
      cursor: pointer;
      left: 40%;
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

      height: 5vh;
    }
    }
    @media only screen and (min-width: 600px) and (max-width: 699px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 9vh;
     align-items: center;

    h1 {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
      cursor: pointer;
      left: 37%;
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

      height: 5vh;
    }
    }
    @media only screen and (min-width: 500px) and (max-width: 599px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 9vh;
     align-items: center;

    h1 {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
      cursor: pointer;
      left: 33%;
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

      height: 5vh;
    }
    }
    @media only screen and (min-width: 400px) and (max-width: 499px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 9vh;
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
      height: 5vh;

    }
    }
    @media only screen and (min-width: 300px) and (max-width: 399px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 9vh;
     align-items: center;

    h1 {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
      cursor: pointer;
      left: 25%;
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

      height: 5vh;
    }
    }

  @media only screen and (min-width: 265px) and (max-width: 299px){
      position: static;
      background: ${primaryColor};
      display: flex;
      flex: 1 1 100vw;
      height: 80px;
      align-items: center;

    h1 {
      color: #fff;
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
      cursor: pointer;
      left: 27%;
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
