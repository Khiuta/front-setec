import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Spin = styled.div`
  display: flex;
  flex: 1 1 100%;
  height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;

  .loader {
  border: 12px solid #f3f3f3; /* Light grey */
  border-top: 10px solid ${primaryColor};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
