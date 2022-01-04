import styled from "styled-components/macro";
import closeIcon from '../../images/close-white.svg';

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  background: #FFF;
  padding: 34px 36px 28px;
  box-shadow: 0px 0px 25px 0px #00000026;
  border-radius: 16px;
  width: 430px;
  position: relative;
`;

export const CloseIcon = styled.div`
  width: 40px;
  height: 40px;
  background: center / contain no-repeat url(${closeIcon});
  position: absolute;
  top: -46px;
  right: -46px;
`;