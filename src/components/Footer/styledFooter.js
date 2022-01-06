import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import githubIcon from '../../images/github.svg';
import linkedinIcon from '../../images/linkedin.svg';

export const FooterWrapper = styled.footer`
  height: 80px;
  padding: 0 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterItem = styled.div`
  display: flex;
  grid-gap: 42px;
`;

export const ApiSource = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  color: #B6BCBF;
`;

export const FooterNav = styled.nav`
  display: flex;
`;

export const HomeLink = styled(Link)`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  width: 112px;
`;

export const PracticumLink = styled.a`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  width: 192px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 28px;
`;

export const FooterIcon = styled.a`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

export const LinkedinIcon = styled(FooterIcon)`
  background: center / contain no-repeat url(${linkedinIcon});
`;

export const GithubIcon = styled(FooterIcon)`
  background: center / contain no-repeat url(${githubIcon});
`;