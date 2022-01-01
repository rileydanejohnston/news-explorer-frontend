import styled from "styled-components/macro";

export const DevelopmentWrapper = styled.section`
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

export const CardList = styled.ul`
  width: 1232px;
  margin: 0 auto;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, minmax(224px, 400px));

  @media( max-width: 1280px ) {
    width: 816px;
    grid-template-columns: repeat(2, minmax(224px, 400px));
  }

  @media( max-width: 1023px ) {
    grid-template-columns: repeat(3, minmax(224px, 400px));
    width: 688px;
    grid-gap: 8px;
  }

  @media( max-width: 767px ) {
    grid-template-columns: repeat(2, minmax(224px, 400px));
    width: 456px;
  }

  @media( max-width: 625px ) {
    margin: 0 auto;
    width: 288px;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
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

  &:hover {
    cursor: pointer;
  }
`;

