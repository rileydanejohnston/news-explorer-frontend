import styled from "styled-components/macro";

export const SearchWrapper = styled.section`
  padding: 80px 0;

  @media( max-width: 1023px ) {
    padding: 38px 0 48px 0;
  }

  @media( max-width: 625px ) {
    padding: 30px 0 32px 0;
    background: ${(props => props.isMenuOpen && 'rgba(0, 0, 0, 0.5)')};
  }
`;

export const SearchContent = styled.div`
  width: 608px;
  min-width: 288px;
  margin: 0 auto;

  @media( max-width: 1023px ) {
    width: 448px;
  }

  @media( max-width: 625px ) {
    width: 288px;
  }
`;

export const Title = styled.h1`
  color: #FFF;
  font-family: 'Roboto Slab';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0px;

  @media( max-width: 1023px ) {
    font-size: 36px;
    line-height: 40px;
  }
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

  @media( max-width: 1023px ) {
    margin-top: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  height: 64px;
  margin-top: 88px;
  position: relative;

  @media( max-width: 1023px ) {
    margin-top: 48px;
    height: 56px;
  }

  @media( max-width: 625px ) {
    margin-top: 122px;
    flex-direction: column;
    justify-content: space-between;
    height: 128px;
  }
`;

export const Input = styled.input`
  background: #FFF;
  border: 1px solid #D1D2D6;
  border-right: none;
  border-radius: 100px;
  padding: 21px 192px 21px 24px;
  position: relative;
  

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  width: 100%;

  @media( max-width: 1023px ) {
    padding: 17px 184px 17px 24px;
  }

  @media( max-width: 625px ) {
    padding: 16px;
    width: auto;
  }
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

  @media( max-width: 1023px ) {
    width: 160px;
    padding: 16px 52px;
  }

  @media( max-width: 625px ) {
    padding: 16px 116px;
    position: static;
    width: 100%;
  }
`;