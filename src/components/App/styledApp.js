import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  position: relative;

  @media( max-width: 625px) {
    padding-top: ${(props => props.path === '/' ? '536px' : '56px')};
  }
`;