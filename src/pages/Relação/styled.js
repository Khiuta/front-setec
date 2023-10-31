import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Search = styled.div`
  // padding: 25px;
  display: flex;
  flex: 1 1 100vw;
  height: 55px;
  align-items: center;
  padding-right: 25px;
  justify-content: flex-end;
  gap: 10px;

  input {
    border: 1px solid;
    background: ${colors.primaryLightColor};
    border-radius: 5px;
    padding: 6px;
    width: 300px;
    box-shadow: 1px 3px rgba(0, 0, 0, .2);
  }

  @media only screen and (max-width: 500px) {
    justify-content: center;
    padding-right: 0px;
  }
`;

export const Content = styled.main`
  // border: 5px solid red;
  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 275px);
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  // margin: 80px;
  gap: 20px;

  .drop-info {
    // display: none;
  }

  .alunos {
    display: flex;
    width: 50%;
    height: 100%;
    gap: 15px;
    flex-direction: column;
    overflow-y: scroll;
    padding: 0px 10px 0px 10px;
    border-top: 3px solid rgba(255, 255, 255, .5);
    border-bottom: 3px solid rgba(255, 255, 255, .5);
    background-clip: padding-box;
  }

  @media only screen and (max-width: 1024px) {
    .alunos {
      width: 55%;
    }
  }

  @media only screen and (max-width: 900px) {
    .alunos {
      width: 90%;
      height: 70%;
    }
  }

  @media only screen and (max-width: 768px) {
    .alunos {
      width: 90%;
      height: 70%;
    }
  }

  @media only screen and (max-width: 670px) {
    .alunos {
      width: 90%;
    }
  }

  @media only screen and (max-width: 560px) {
    .alunos {
      width: 100%;
    }
  }


  section {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 5px;
    background: ${colors.primaryLightColor};
    border: 1px solid;
    border-radius: 10px;
    width: 100%;
    height: 10%;
    min-height: 8%;
    align-items: center;
    gap: 10%;
    box-shadow: 3px 5px rgba(0, 0, 0, .2);
  }

  .icons {
    display: flex;
    gap: 5%;
  }

  @media only screen and (max-width: 1334px) {
    section {
      gap: 7%;
    }
  }

  @media only screen and (max-width: 1249px) {
    section {
      gap: 2%;
    }
  }

  @media only screen and (max-width: 1125px) {
    section p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  section p {
    font-size: 20px;
  }

  section .circle {
    float: left;
  }

  @keyframes turn-up {
    from {transform: rotate(0deg)}
    to {transform: rotate(180deg)}
  }

  @keyframes turn-down {
    from {transform: rotate(180deg)}
    to {transform: rotate(0deg)}
  }

  section .drop {
    float: left;
    margin-left: 20px;
    cursor: pointer;
    transform: rotate(0deg);
    animation: turn-down 1s forwards;
    min-width: 24px;
  }

  section .thrash {
    cursor: pointer;
  }

  section .drop-2 {
    float: left;
    margin-left: 20px;
    cursor: pointer;
    transform: rotate(0deg);
    animation: turn-up 1s forwards;
    min-width: 24px;
  }
`;
