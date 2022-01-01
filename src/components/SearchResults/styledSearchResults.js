import styled from "styled-components/macro";

export const SearchResultsWrapper = styled.section`
  background: #F5F6F7;
  padding: 80px 104px;
  display: flex;
  flex-direction: column;

  @media( max-width: 1023px) {
    padding: 40px;
  }
  @media( max-width: 625px) {
    padding: 32px 16px 24px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 46px;
  letter-spacing: 0px;

  margin-bottom: 64px;

  @media( max-width: 1023px) {
    margin-bottom: 32px;
    font-size: 30px;
    line-height: 34px;
  }
  @media( max-width: 625px) {
    margin-bottom: 58px;
  }
`;

export const ShowMoreButton = styled.button`
  width: 288px;
  height: 64px;
  background: #E8E8E8;
  border-radius: 80px;
  border: none;
  margin: 64px auto 0 auto;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;

  @media( max-width: 1023px) {
    width: 240px;
    height: 56px;
    background: #FFF;
    margin-top: 32px;
  }
  @media( max-width: 625px) {
    margin-top: 21px;
    width: 288px;
  }

  &:hover {
    cursor: pointer;
  }
`;