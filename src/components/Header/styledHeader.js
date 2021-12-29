import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 104px;
  box-shadow: 0px -1px 0px 0px #D1D2D6 inset;
`;

export const Logo = styled(Link)`
  font-family: 'Roboto Slab';
  color: #1A1B22;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
`;