import styled from "styled-components";
import * as colors from "../../config/colors";

export const Search = styled.div`
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
    width: 15vw;
    box-shadow: 1px 3px rgba(0, 0, 0, 0.2);
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    display: flex;
    flex: 1 1 100vw;
    height: 55px;
    align-items: center;
    padding-right: 2.5vh;
    margin-left: 1vh;
    justify-content: flex-start;
    gap: 1vh;

    input {
      border: 1px solid;
      background: ${colors.primaryLightColor};
      border-radius: 5px;
      padding: 1vh;
      width: 100vw;
      box-shadow: 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 499px) {
    display: flex;
    flex: 1 1 100vw;
    height: 55px;
    align-items: center;
    padding-right: 2.5vh;
    margin-left: 1vh;
    justify-content: flex-start;
    gap: 1vh;

    input {
      border: 1px solid;
      background: ${colors.primaryLightColor};
      border-radius: 5px;
      padding: 1vh;
      width: 80vw;
      box-shadow: 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
  @media only screen and (min-width: 500px) and (max-width: 599px) {
    display: flex;
    flex: 1 1 100vw;
    height: 55px;
    align-items: center;
    padding-right: 2.5vh;
    margin-left: 1vh;
    justify-content: flex-start;
    gap: 1vh;

    input {
      border: 1px solid;
      background: ${colors.primaryLightColor};
      border-radius: 5px;
      padding: 1vh;
      width:55vw;
      box-shadow: 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 799px) {
    display: flex;
    flex: 1 1 100vw;
    height: 55px;
    align-items: center;
    padding-right: 2.5vh;
    margin-left: 1vh;
    justify-content: flex-start;
    gap: 1vh;

    input {
      border: 1px solid;
      background: ${colors.primaryLightColor};
      border-radius: 5px;
      padding: 1vh;
      width:55vw;
      box-shadow: 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
  @media only screen and (min-width: 800px) and (max-width: 999px) {
    display: flex;
    flex: 1 1 100vw;
    height: 55px;
    align-items: center;
    padding-right: 2.5vh;
    margin-left: 1vh;
    justify-content: flex-start;
    gap: 1vh;

    input {
      border: 1px solid;
      background: ${colors.primaryLightColor};
      border-radius: 5px;
      padding: 1vh;
      width:40vw;
      box-shadow: 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 275px);
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  .drop-info {
    // display: none;
  }

  .alunos {
    display: flex;
    width: 70%;
    height: 100%;
    gap: 15px;
    flex-direction: column;
    overflow-y: scroll;
    padding: 0px 10px 0px 10px;
    border-top: 3px solid rgba(255, 255, 255, 0.5);
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    background-clip: padding-box;
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
    box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
  }

  .icons {
    display: flex;
    gap: 5%;
  }

  section p {
    font-size: 3vh;
  }

  @keyframes turn-up {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes turn-down {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
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

  @media only screen and (min-width: 265px) and (max-width: 299px) {
    display: flex;
    flex: 20 1 100vw;
    height: calc(100vh - 220px);
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    .alunos {
      display: flex;
      width: 90%;
      height: 100%;
      gap: 15px;
      flex-direction: column;
      overflow-y: scroll;
      padding: 0px 10px 0px 10px;
      border-top: 3px solid rgba(255, 255, 255, 0.5);
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      background-clip: padding-box;
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
      box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
    }

    section p {
      display: flex;
      font-size: 1.5vh;
    }
    section .drop {
      float: left;
      margin-left: 20px;
      cursor: pointer;
      transform: rotate(0deg);
      animation: turn-down 1s forwards;
      min-width: 2vh;
      height: 2.5vh;
    }

    section .thrash {
      cursor: pointer;
      height: 2.5vh;
    }

    section .drop-2 {
      float: left;
      margin-left: 20px;
      cursor: pointer;
      transform: rotate(0deg);
      animation: turn-up 1s forwards;
      min-width: 2.5vh;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 499px) {
    display: flex;
    flex: 20 1 100vw;
    height: calc(100vh - 220px);
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    .alunos {
      display: flex;
      width: 90%;
      height: 100%;
      gap: 15px;
      flex-direction: column;
      overflow-y: scroll;
      padding: 0px 10px 0px 10px;
      border-top: 3px solid rgba(255, 255, 255, 0.5);
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      background-clip: padding-box;
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
      height: 15%;
      min-height: 15%;
      align-items: center;
      gap: 10%;
      box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
    }

    .icons {
      display: flex;
      gap: 5%;
    }
    section .circle {
      size: 10;
    }

    section p {
      display: flex;
      font-size: 2.5vh;
      max-width: 30vw;
    }
    section .drop {
      float: left;
      margin-left: 20px;
      cursor: pointer;
      transform: rotate(0deg);
      animation: turn-down 1s forwards;
      min-width: 2vh;
      height: 3vh;
    }

    section .thrash {
      cursor: pointer;
      height: 3vh;
    }

    section .drop-2 {
      float: left;
      margin-left: 20px;
      cursor: pointer;
      transform: rotate(0deg);
      animation: turn-up 1s forwards;
      min-width: 3vh;
    }
  }
  @media only screen and (min-width: 500px) and (max-width: 799px) {
    display: flex;
    flex: 20 1 100vw;
    height: calc(100vh - 220px);
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    .alunos {
      display: flex;
      width: 90%;
      height: 100%;
      gap: 15px;
      flex-direction: column;
      overflow-y: scroll;
      padding: 0px 10px 0px 10px;
      border-top: 3px solid rgba(255, 255, 255, 0.5);
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      background-clip: padding-box;
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
      box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
    }

    .icons {
      display: flex;
      gap: 5%;
    }

    section p {
      display: flex;
      font-size: 2.5vh;
    }
    section .drop {
      float: left;
      margin-left: 20px;
      cursor: pointer;
      transform: rotate(0deg);
      animation: turn-down 1s forwards;
      min-width: 2vh;
      height: 3.5vh;
    }

    section .thrash {
      cursor: pointer;
      height: 3.5vh;
    }

    section .drop-2 {
      float: left;
      margin-left: 20px;
      cursor: pointer;
      transform: rotate(0deg);
      animation: turn-up 1s forwards;
      min-width: 3.5vh;
    }
  }
  @media only screen and (min-width: 800px) and (max-width: 999px) {
    display: flex;
    flex: 20 1 100vw;
    height: calc(100vh - 220px);
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    .alunos {
      display: flex;
      width: 90%;
      height: 100%;
      gap: 15px;
      flex-direction: column;
      overflow-y: scroll;
      padding: 0px 10px 0px 10px;
      border-top: 3px solid rgba(255, 255, 255, 0.5);
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      background-clip: padding-box;
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
      box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
    }

    .icons {
      display: flex;
      gap: 5%;
    }

    section p {
      display: flex;
      font-size: 3vh;
    }
    section .drop {
      float: left;
      margin-left: 20px;
      cursor: pointer;
      transform: rotate(0deg);
      animation: turn-down 1s forwards;
      min-width: 2vh;
      height: 4vh;
    }

    section .thrash {
      cursor: pointer;
      height: 4vh;
    }

    section .drop-2 {
      float: left;
      margin-left: 20px;
      cursor: pointer;
      transform: rotate(0deg);
      animation: turn-up 1s forwards;
      min-width: 4vh;
    }
  }
`;
