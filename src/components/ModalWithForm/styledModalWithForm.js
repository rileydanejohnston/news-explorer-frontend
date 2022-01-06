import styled from "styled-components/macro";

export const Form = styled.form``;

export const Title = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 28px;
  letter-spacing: 0em;
  margin-bottom: 22px;
`;

export const SubmitError = styled.span`
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
  margin-top: 18px;
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
