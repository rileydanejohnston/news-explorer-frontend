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
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  box-shadow: ${(props) => (props.path === '/' ? '0px -3px 0px 0px #1A1B22 inset' : 'none')};
`;

export const NavItemNews = styled(NavItem)`
  padding: 0 32px;
  box-shadow: ${(props) => (props.path === '/saved-news' ? '0px -3px 0px 0px #1A1B22 inset' : 'none')};
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
  padding: ${(props) => (props.loggedIn ? '12px 18px' : '12px' )};
  width: ${(props) => (props.loggedIn ? 'auto' : '176px' )};

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