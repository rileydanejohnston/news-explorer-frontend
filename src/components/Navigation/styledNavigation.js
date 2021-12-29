import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import logoutImg from '../../images/logout-symbol-black.svg';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  grid-gap: 34px;
  height: 100%;
`;

export const NavItem = styled(NavLink)`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #1A1B22;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  &:hover {
    box-shadow: 0px -3px 0px 0px #1A1B22 inset;
  }
`;

export const NavButton = styled.button`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  border: 1px solid #1A1B22;
  background: #FFF;
  border-radius: 100px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-items: space-between;

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