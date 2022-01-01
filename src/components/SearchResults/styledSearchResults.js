import styled from "styled-components/macro";

export const SearchResultsWrapper = styled.section`
  background: #F5F6F7;
  padding: 80px 104px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 46px;
  letter-spacing: 0px;

  margin-bottom: 64px;
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

  &:hover {
    cursor: pointer;
  }
`;