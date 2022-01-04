import styled from "styled-components/macro";
import { ModalContent } from "../ModalWithForm/styledModalWithForm";

// tweak MOdalContent

export const RegisterModalContent = styled(ModalContent)`
  padding: 43px 36px 51px;
`;

export const SignInLink = styled.span`
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: #2F71E5;
  margin-top: 14px;

  &:hover {
    cursor: pointer;
  }
`;