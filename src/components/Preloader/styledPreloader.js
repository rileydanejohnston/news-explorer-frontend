import styled from "styled-components/macro";
import { keyframes } from 'styled-components';

export const PreloaderWrapper = styled.div`
  margin: 0;
  height: 282px;
  background: #F5F6F7;
  display: flex;
  align-items: center;
`;

export const PreloaderContent = styled.div`
  width: 280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

export const PreloaderIcon = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #444;
  border-bottom-color: #888;

  border-radius: 50%;

  animation: ${spin} .75s infinite linear;
`;

export const Text = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #B6BCBF;
  
  margin-top: 24px;
`;

