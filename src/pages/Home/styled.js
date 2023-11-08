import styled from 'styled-components';
import { primaryLightColor } from '../../config/colors';

export const Search = styled.header`
  display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 20vw;
    min-width: 15vw;
    padding: 5px 0px 5px 10px;
  }
  @media only screen and (min-width: 265px) and (max-width: 299px) {
    display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 80vw;
    min-width: 75vw;
    padding: 5px 0px 5px 10px;
  }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
  display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 75vw;
    min-width: 70vw;
    padding: 5px 0px 5px 10px;
  }
  }
  @media only screen and (min-width: 400px) and (max-width: 649px) {
    display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 50vw;
    min-width: 45vw;
    padding: 5px 0px 5px 10px;
  }
  }
  @media only screen and (min-width: 650px) and (max-width: 749px) {
    display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 40vw;
    min-width: 35vw;
    padding: 5px 0px 5px 10px;
  }
  }
  @media only screen and (min-width: 750px) and (max-width: 859px) {
    display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 35vw;
    min-width: 30vw;
    padding: 5px 0px 5px 10px;
  }
  }
  @media only screen and (min-width: 860px) and (max-width: 1000px) {
    display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 30vw;
    min-width: 25vw;
    padding: 5px 0px 5px 10px;
  }
  }
  @media only screen and (min-width: 1001px) and (max-width: 1250px) {
    display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 30vw;
    min-width: 25vw;
    padding: 5px 0px 5px 10px;
  }
  }
  @media only screen and (min-width: 1251px) and (max-width: 1410px) {
    display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 25vw;
    min-width: 20vw;
    padding: 5px 0px 5px 10px;
  }
  }
  @media only screen and (min-width: 1411px) and (max-width: 1500px) {
    display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 5vh;
    border: 1px solid black;
    border-radius: 1vh;
    background: ${primaryLightColor};
    width: 25vw;
    min-width: 20vw;
    padding: 5px 0px 5px 10px;
  }
  }
`;

export const Content = styled.main`
  display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 100px);
  padding: 2vh;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, .1);
  border-bottom: 50px solid rgba(255, 255,  255, 0);

  ::-webkit-scrollbar {
      width: 0px;
  }
  ::-webkit-scrollbar-track {
      background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, .5);
  }

  .card {
    display: flex;
    flex: 1 1 18vw;
    max-width: 24vw;
    max-height: 40vh;
    min-height: 30vh;
    background: #fff;
    border-radius: 1vh;
    border: 1px solid black;
    justify-content: center;
    flex-direction: column;
    gap: 1vw;
    padding: 10px;
    background: ${primaryLightColor};
  }

  @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1.05);
    }
  }

  @keyframes shrink {
    from {
      transform: scale(1.05);
    } to {
      transform: scale(1);
    }
  }

  .card:hover {
    animation: grow .5s forwards;
  }

  .card:not(:hover) {
    animation: shrink .5s forwards;
  }

  .card header {
    display: flex;
    flex: 1 3 100%;
    justify-content: center;
    font-size: 2.5vh;
  }

  .card .info {
    display: flex;
    flex: 3 1 100%;
    flex-direction: column;
    font-size: 2.5vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-wrap: break-word;
    gap: 2vh;
    padding: 0px 10px 0px 10px;
  }

  .edit {
    display: flex;
    justify-content: flex-end;

    .icon-edit {
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 265px) and (max-width: 299px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    margin: 1vw;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 100%;
      min-height: 40%;
      min-width: 95%;
    }

    .card .info {
      font-size: 2.2vh;
      gap: 5%;
    }

    .card header {
      align-items: center;
      font-size: 19px;
    }
    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 20px;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 100%;
      min-height: 40%;
      min-width: 95%;
    }

    .card .info {
      font-size: 15px;
      gap: 10%;
    }

    .card header {
      align-items: center;
      font-size: 22px;
    }
    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 25px;
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 649px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 100%;
      min-height: 50%;
      min-width: 95%;
    }

    .card .info {
      font-size: 18px;
      gap: 10%;
    }

    .card header {
      align-items: center;
      font-size: 22px;
    }

    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 30px;
    }
  }
  @media only screen and (min-width: 650px) and (max-width: 749px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
    //align-items: center;
    margin: 5px;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 45%;
      min-height: 40%;
      min-width: 45%;

    }

    .card .info {
      font-size: 16px;
      gap: 10%;
    }

    .card header {
      align-items: center;
      font-size: 19px;
    }

    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 30px;
    }
  }
  @media only screen and (min-width: 750px) and (max-width: 859px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
    //align-items: center;
    margin: 5px;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 45%;
      min-height: 40%;
      min-width: 45%;

    }

    .card .info {
      font-size: 18px;
      gap: 10%;
    }

    .card header {
      align-items: center;
      font-size: 19px;
    }

    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 30px;
    }
  }
  @media only screen and (min-width: 860px) and (max-width: 1000px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
    //align-items: center;
    margin: 5px;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 45%;
      min-height: 45%;
      min-width: 45%;

    }

    .card .info {
      font-size: 18px;
      gap: 10%;
    }

    .card header {
      align-items: center;
      font-size: 19px;
    }

    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 30px;
    }
  }
  @media only screen and (min-width: 1001px) and (max-width: 1250px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
    //align-items: center;
    margin: 5px;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 55%;
      min-height: 50%;
      min-width: 30%;

    }

    .card .info {
      font-size: 19px;
      gap: 10%;
    }

    .card header {
      align-items: center;
      font-size: 19px;
    }

    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 30px;
    }
  }
  @media only screen and (min-width: 1251px) and (max-width: 1410px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
    //align-items: center;
    margin: 5px;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 55%;
      min-height: 50%;
      min-width: 25%;

    }

    .card .info {
      font-size: 19px;
      gap: 10%;
    }

    .card header {
      align-items: center;
      font-size: 19px;
    }

    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 30px;
    }
  }
  @media only screen and (min-width: 1411px) and (max-width: 1500px) {
    padding: 10px;
    padding-bottom: 50px;

    overflow-x: scroll;
    flex: 1 1 100vw;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
    //align-items: center;
    margin: 5px;
    border-bottom: 60px solid rgba(255, 255, 255, 0);


    @keyframes grow {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }
  @keyframes shrink {
    from {
      transform: scale(1);
    } to {
      transform: scale(1);
    }
  }

    .card {
      max-height: 55%;
      min-height: 50%;
      min-width: 20%;

    }

    .card .info {
      font-size: 21px;
      gap: 10%;
    }

    .card header {
      align-items: center;
      font-size: 19px;
    }

    .icon-edit{
      position: absolute;
      bottom: 10px;

      height: 30px;
    }
  }
`;
