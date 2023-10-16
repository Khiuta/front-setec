import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const List = styled.div`
  background: ${primaryColor};
  position: absolute;
  width: 200px;
  min-width: 200px;
  height: 90vh;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  z-index: 1000;

  ul {
    // position: absolute;
    list-style: none;
    color: #fff;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin-top: 50%;
  }

  li {
    padding: 10px 15px;
    cursor: pointer;
    display: block;
  }

  li a {
    color: #fff;
    text-decoration: none;
  }

  .dontShow p ul {
    display: none;
  }

  .show p ul {
    display: block;
  }

  li ul {
    margin-top: 0px;
  }

  li ul li {
    flex-direction: column;
    font-size: 20px;
    margin: 10px;
  }
`;
