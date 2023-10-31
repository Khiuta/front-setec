import styled from 'styled-components';
import { primaryLightColor } from '../../config/colors';

export const Title = styled.div`
  background: ${primaryLightColor};
  display: flex;
  flex: 1 1 100vw;
  height: 120px;
  padding-left: 35px;
  align-items: center;
  box-shadow: 3px 5px rgba(0, 0, 0, .2);

  h1 {
    font-style: italic;
    font-weight: 100;
  }
@media only screen and (min-width: 820px) and (max-width: 900px){

background: ${primaryLightColor};

display: flex;
flex: 1 1 100vw;
align-items: center;

height: 10vh;
padding-left: 35px;

box-shadow: 3px 5px rgba(0, 0, 0, .2);

h1 {
font-style: italic;
font-weight: 100;
font-size: 40px;
text-shadow: 3px 3px rgba(0, 0, 0, .2);
}
}
@media only screen and (min-width: 412px) and (max-width: 428px){

    background: ${primaryLightColor};

    display: flex;
    flex: 1 1 100vw;
    align-items: center;

    height: 80px;
    padding-left: 35px;

    box-shadow: 3px 5px rgba(0, 0, 0, .2);

    h1 {
    font-style: italic;
    font-weight: 100;

    text-shadow: 3px 3px rgba(0, 0, 0, .2);
  }
}

@media only screen and (min-width: 360px) and (max-width: 390px){

  background: ${primaryLightColor};

  display: flex;
  flex: 1 1 100vw;
  align-items: center;

  height: 60px;
  padding-left: 35px;

  box-shadow: 3px 5px rgba(0, 0, 0, .2);

  h1 {
  font-style: italic;
  font-weight: 100;

  text-shadow: 3px 3px rgba(0, 0, 0, .2);
  }
}
`;
