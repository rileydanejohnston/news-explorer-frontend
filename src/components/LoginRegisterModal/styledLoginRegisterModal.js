import styled from "styled-components/macro";
import { SubmitError } from "../ModalWithForm/styledModalWithForm";

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 13px;
`;

export const InputGroup = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const InputGroupUsername = styled(InputGroup)`
  visibility: ${props => props.isRegisterModalOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isRegisterModalOpen ? 1 : 0};
  max-height: ${props => props.isRegisterModalOpen ? '64px' : '0'};
  transition: opacity .5s, visibility .5s, max-height .5s;
`;

export const Label = styled.label`
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  color: #2F71E5;
`;

export const Input = styled.input`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;

  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  height: 34px;
`;

export const InputError = styled(SubmitError)`
  text-align: left;
  margin-top: 3px;
  height: 14px;
`;