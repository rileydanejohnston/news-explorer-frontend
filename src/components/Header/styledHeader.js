import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import menuImgBlack from '../../images/menu-black.svg';
import closeImgBlack from '../../images/close-black.svg';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 80px;
  padding: 0 104px;
  box-shadow: 0px -1px 0px 0px #D1D2D6 inset;
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
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MenuButton = styled.div`
  display: none;
  background: center / contain no-repeat url(${menuImgBlack});
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
  background: center / contain no-repeat url(${closeImgBlack});
`;

export const Logo = styled(Link)`
  font-family: 'Roboto Slab';
  color: #1A1B22;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;

  @media( max-width: 625px ) {
    font-size: 16px;
  }
`;