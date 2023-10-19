import styled from 'styled-components';
import { primaryLightColor } from '../../config/colors';

export const Search = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  input {
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    background: ${primaryLightColor};
    width: 320px;
    min-width: 200px;
    padding: 5px 0px 5px 10px;
  }

  @media only screen and (max-width: 400px) {
    justify-content: center;
    padding: 5px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 100px);
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  overflow-y: scroll;
  background: rgba(0, 0, 0, .1);
  border-bottom: 50px solid rgba(255, 255,  255, 0);

  ::-webkit-scrollbar {
      width: 10px;
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
    max-height: 60%;
    min-height: 40%;
    background: #fff;
    border-radius: 10px;
    border: 1px solid black;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
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
  }

  .card .info {
    display: flex;
    flex: 3 1 100%;
    flex-direction: column;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-wrap: break-word;
    gap: 15px;
    padding: 0px 10px 0px 10px;
  }

  @media only screen and (min-width: 500px) and (max-width: 834px) {
    padding: 10px;
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
      font-size: 30px;
      gap: 20%;
    }

    .card header {
      align-items: center;
      font-size: 32px;
    }
  }

  @media only screen and (min-width: 400px) and (max-width: 499px) {
    padding: 10px;
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
      font-size: 20px;
      gap: 20%;
    }

    .card header {
      align-items: center;
      font-size: 28px;
    }

  }

  @media only screen and (min-width: 320px) and (max-width: 399px) {
    padding: 10px;
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
      font-size: 20px;
      gap: 20%;
    }

    .card header {
      align-items: center;
      font-size: 22px;
    }
  }
`;
