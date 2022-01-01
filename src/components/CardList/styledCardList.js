import styled from "styled-components/macro";

export const CardWrapper = styled.ul`
  background: #F5F6F7;
  width: 1232px;
  margin: 0 auto;
  padding: 64px 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, minmax(224px, 400px));

  @media( max-width: 1280px ) {
    width: 816px;
    grid-template-columns: repeat(2, minmax(224px, 400px));
  }

  @media( max-width: 1023px ) {
    grid-template-columns: repeat(3, minmax(224px, 400px));
    grid-gap: 8px;
    width: 688px;
    padding: 32px 0;
  }

  @media( max-width: 767px ) {
    grid-template-columns: repeat(2, minmax(224px, 400px));
    width: 456px;
  }

  @media( max-width: 625px ) {
    margin: 0 auto;
    padding: 24px 0 12px 0;
    width: 288px;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
  }
`;

