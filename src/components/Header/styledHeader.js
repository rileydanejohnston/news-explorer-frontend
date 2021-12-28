import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 104px 26px;
  box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset;
`;

export const Logo = styled(Link)`
  font-family: Roboto Slab;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
`;