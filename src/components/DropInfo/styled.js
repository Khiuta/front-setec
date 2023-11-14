import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Info = styled.div`
  @keyframes show-drop {
    from {
      height: 0%;
      opacity: .5;
      color: rgba(255, 255, 255, 0);
    } to {
      height: 100%;
      opacity: 1;
      color: rgba(0, 0, 0, 1);
    }
  }

  background: ${colors.primaryLightColor};
  width: 100%;
  border: 2px solid black;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  animation: show-drop .5s forwards;

  @media only screen and (min-width: 400px) and (max-width: 499px) {
    flex-direction: column;
    overflow: auto;
    min-height: 85%;
    max-height: 100%;
    align-items: flex-start;

    .lado-1,
    .lado-2 {
      min-width: 100%;
      font-size: 20px;
    }
  }

  .lado-1 {
    position: inherit;
    // border: 3px blue solid;
    width: 50%;
  }

  .lado-2 {
    position: inherit;
    // border: 3px blue solid;
    width: 50%;
  }
`;
