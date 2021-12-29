import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import logoutImg from '../../images/logout-symbol-black.svg';

export const Nav = styled.nav`
  height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  grid-gap: 34px;
  height: 100%;

  @media( max-width: 1023px) {
    grid-gap: 16px;
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
`;

export const NavItemNews = styled(NavItem)`
  padding: 0 32px;
  box-shadow: ${(props) => (props.path === '/saved-news' ? '0px -3px 0px 0px #1A1B22 inset' : 'none')};

  @media( max-width: 1023px) {
    padding: 0 30px;
  }
`;

export const NavItemBtn = styled(NavItem)`
  padding: 0;
  box-shadow: none;
`;

export const NavText = styled(NavLink)`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #1A1B22;

  @media( max-width: 1023px) {
    font-size: 16px;
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