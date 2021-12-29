import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import logoutImg from '../../images/logout-symbol-black.svg';

export const Nav = styled.nav`
  display: flex;
  
  @media( max-width: 625px ) {
    width: 100%;
    align-items: center;
    position: absolute;
    bottom: -174px;
    left: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  grid-gap: 34px;

  @media( max-width: 1023px) {
    grid-gap: 16px;
  }

  @media( max-width: 625px) {
    grid-gap: 0;
    width: 100%;
    align-items: flex-start;
    height: ${(props) => (props.isMenuOpen ? '174px' : '0')};
    display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    background: #2F71E5;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  box-shadow: ${(props) => (props.path === '/' ? '0px -3px 0px 0px #1A1B22 inset' : 'none')};

  @media( max-width: 1023px) {
    padding: 0 9px;
  }
  @media( max-width: 625px) {
    box-shadow: none;
    padding: 0 0 0 16px;
    height: 56px;
  }
`;

export const NavItemNews = styled(NavItem)`
  padding: 0 32px;
  box-shadow: ${(props) => (props.path === '/saved-news' ? '0px -3px 0px 0px #1A1B22 inset' : 'none')};

  @media( max-width: 1023px) {
    padding: 0 30px;
  }
  @media( max-width: 625px) {
    box-shadow: none;
    padding: 0 0 0 16px;
  }
`;

export const NavItemBtn = styled(NavItem)`
  padding: 0;
  box-shadow: none;

  @media( max-width: 625px) {
    margin: 0 auto;
  }
`;

export const NavText = styled(NavLink)`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #1A1B22;
  white-space: nowrap;

  @media( max-width: 1023px) {
    font-size: 16px;
  }
  @media( max-width: 624px) {
    font-size: 18px;
    text-align: left;
  }
`;

export const NavButton = styled.button`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: 1px solid #1A1B22;
  border-radius: 100px;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.loggedIn ? 'space-between' : 'center' )};
  padding: ${(props) => (props.loggedIn ? '0 18px' : '0' )};
  width: ${(props) => (props.loggedIn ? '112px' : '176px' )};
  height: 48px;

  @media( max-width: 1023px) {
    height: 40px;
    font-size: 16px;
    padding: ${(props) => (props.loggedIn ? '0 15px' : '0' )};
    width: ${(props) => (props.loggedIn ? '100px' : '152px' )};
  }

  @media( max-width: 625px) {
  }

  &:hover {
    cursor: pointer;
   }
`;

export const LogoutSymbol = styled.div`
  background: center / contain no-repeat url(${logoutImg});
  width: 17.41px;
  height: 16px;
  margin-left: 18px;
`;