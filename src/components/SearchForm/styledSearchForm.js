import styled from "styled-components/macro";

export const SearchWrapper = styled.section`
  background: #6193EA;
  padding: 80px 0;
`;

export const SearchContent = styled.div`
  width: 608px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #FFF;
  font-family: 'Roboto Slab';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0px;
`;

export const Subtitle = styled.h1`
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 32px;
`;

export const Form = styled.form`
  display: flex;
  height: 64px;
  margin-top: 88px;
  position: relative;
`;

export const Input = styled.input`
  background: #FFF;
  border: 1px solid #D1D2D6;
  border-right: none;
  border-radius: 100px;
  padding: 17px 24px;
  position: relative;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  width: 100%;
`;

export const Submit = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 168px;
  background: #2F71E5;
  box-shadow: 0px 5px 15px 0px #0E1A3933;
  border-radius: 100px;
  border: none;
  padding: 20px 56px;
  color: #FFF;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;