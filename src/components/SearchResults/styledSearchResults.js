import styled from "styled-components/macro";

export const SearchResultsWrapper = styled.section`
  background: #F5F6F7;
  padding: 80px 0;
  display: flex;
  flex-direction: column;

  @media( max-width: 1023px) {
    padding: 40 0px;
  }
  @media( max-width: 625px) {
    padding: 32px 0 24px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 46px;
  letter-spacing: 0px;
  margin-left: 104px;

  @media( max-width: 1023px) {
    font-size: 30px;
    line-height: 34px;
    margin-left: 40px;
  }
  @media( max-width: 625px) {
    margin-bottom: 34px;
    margin-left: 16px;
  }
`;

export const ShowMoreButton = styled.button`
  width: 288px;
  height: 64px;
  background: #FFF;
  border-radius: 80px;
  border: none;
  margin: 0 auto;
  transition: background .3s ease;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;

  @media( max-width: 1023px) {
    width: 240px;
    height: 56px;
  }
  @media( max-width: 625px) {
    margin-top: 8px;
    width: 288px;
  }

  &:hover {
    cursor: pointer;
    background: #E8E8E8;
  }
`;