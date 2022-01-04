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

export const Form = styled.form``;

export const Title = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 28px;
  letter-spacing: 0em;
  margin-bottom: 22px;
`;

export const ErrorMessage = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: #FF0000;
  display: inline-block;
  width: 100%;
`;

export const Submit = styled.button`
  width: 100%;
  height: 64px;
  box-shadow: 0px 5px 15px 0px #0E1A3933;
  background: #2F71E5;
  border-radius: 100px;
  border: none;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  margin: 8px 0 16px 0;
  color: #FFF;

  &:hover {
    cursor: pointer;
  }
`;

export const LinkWrapper = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;

`;

export const FormLink = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #2F71E5;

  &:hover {
    cursor: pointer;
  }
`;
