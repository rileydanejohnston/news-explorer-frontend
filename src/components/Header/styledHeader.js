import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import menuImgBlack from '../../images/menu-black.svg';
import closeImgBlack from '../../images/close-black.svg';
import closeWhite from '../../images/close-white.svg';
import menuWhite from '../../images/menu-white.svg';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 80px;
  padding: 0 104px;
  box-shadow: ${(props) => (props.path === '/' ? 
    '0px -1px 0px 0px rgba(255, 255, 255, 0.2) inset' 
  : '0px -1px 0px 0px #D1D2D6 inset')};
  transition: background .5s ease;
  position: relative;

  @media( max-width: 1023px) {
    height: 66px;
    padding: 0 40px;
  }

  @media( max-width: 625px) {
    height: 56px;
    padding: 0 16px 0 20px;
    flex-direction: column;
    justify-content: center;
    background: ${(props) => ((props.isMenuOpen && props.path === '/') && '#1A1B22')};
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media( max-width: 625px ) {
    opacity: ${(props => props.isLoginOpen ? 0 : 1 )}
  }
`;

export const MenuButton = styled.div`
  display: none;
  background: ${(props) => (props.path === '/' ? 
    `center / contain no-repeat url(${menuWhite})` 
  : `center / contain no-repeat url(${menuImgBlack})`)};
  width: 24px;
  height: 24px;
  margin-left: 0;

  @media( max-width: 625px ) {
    display: block;
  }

  &:hover {
    cursor: pointer;
   }
`;

export const CloseButton = styled(MenuButton)`
  background: ${(props) => (props.path === '/' ? 
    `center / contain no-repeat url(${closeWhite})` 
  : `center / contain no-repeat url(${closeImgBlack})`)};
`;

export const Logo = styled(Link)`
  font-family: 'Roboto Slab';
  color: #1A1B22;
  color: ${(props) => (props.path === '/' && '#FFF')};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;

  @media( max-width: 625px ) {
    font-size: 16px;
  }
`;