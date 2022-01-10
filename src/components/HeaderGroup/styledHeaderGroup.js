import styled from "styled-components/macro";
import backgroundImg from '../../images/bg-app-img.png';

export const HeaderGroupWrapper = styled.div`
  @media( max-width: 625px) {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${(props => props.isMenuOpen && 'rgba(0, 0, 0, 0.5)')};
  }
`;

export const ImageWrapper = styled.div`
  background: center / cover no-repeat url(${backgroundImg});
  z-index: -1;
`;