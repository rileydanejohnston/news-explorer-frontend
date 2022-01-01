import styled from "styled-components/macro";

export const CardWrapper = styled.ul`
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

