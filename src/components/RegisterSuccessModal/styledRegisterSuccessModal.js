import styled from "styled-components/macro";
import { Title } from '../ModalWithForm/styledModalWithForm'

// tweak MOdalContent

export const RegisterSuccessTitle = styled(Title)`
  margin: 9px 0 14px;
  color: #000;
`;

export const SignInLink = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: #2F71E5;
  margin-bottom: 23px;

  &:hover {
    cursor: pointer;
  }
`;