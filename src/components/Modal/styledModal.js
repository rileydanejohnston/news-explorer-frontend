import styled from "styled-components/macro";
import closeIcon from '../../images/close-white.svg';

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => props.isModalOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isModalOpen ? 1 : 0};
  transition: opacity .5s, visibility .5s;
  position: fixed;
  top: 0;
  left: 0;

  @media ( max-width: 625px ) {
    background: rgba(196, 196, 196, 0.01);
    box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.2) inset;
  }
`;

export const ModalContent = styled.div`
  background: #FFF;
  padding: 34px 36px 28px;
  box-shadow: 0px 0px 25px 0px #00000026;
  border-radius: 16px;
  width: 430px;
  position: relative;

  @media( max-width: 625px ) {
    padding: 16px 16px 0 16px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 56px;
    left: 0;
  }
`;

export const CloseIcon = styled.div`
  width: 40px;
  height: 40px;
  background: center / contain no-repeat url(${closeIcon});
  position: absolute;
  top: -46px;
  right: -46px;

  @media( max-width: 625px ) {
    top: -40px;
    right: 16px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;