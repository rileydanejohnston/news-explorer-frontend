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

  @media( max-width: 1023px) {
    height: 64px;
    padding: 0 40px;
  }

  @media( max-width: 767px) {
    align-items: stretch;
    flex-direction: column;
    height: 176px;
    padding: 20px 16px 22px;
    grid-gap: 38px;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  grid-gap: 42px;

  @media( max-width: 1023px) {
    grid-gap: 26px;
  }
`;

export const SourceItem = styled(FooterItem)`
  @media( max-width: 767px) {
    order: 2;
    align-self: center;
  }
`;

export const LinksItem = styled(FooterItem)`
  @media( max-width: 767px) {
    justify-content: space-between;
    height: 74px;
  }
`;

export const ApiSource = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  color: #B6BCBF;

  @media( max-width: 375px) {
    font-size: 15.75px;
  }
`;

export const FooterNav = styled.nav`
  display: flex;

  @media( max-width: 767px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const HomeLink = styled(Link)`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  width: 112px;

  @media( max-width: 1023px) {
    width: 88px;
  }
  @media( max-width: 767px) {
    width: auto;
    text-align: left;
  }
`;

export const PracticumLink = styled.a`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  width: 192px;

  @media( max-width: 1023px) {
    width: 176px;
  }
  @media( max-width: 767px) {
    width: auto;
    text-align: left;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 27px;

  @media( max-width: 767px) {
    align-items: start;
  }
`;

export const FooterIcon = styled.a`
  display: inline-block;
  width: 20px;
  height: 20px;

  @media( max-width: 1023px) {
    width: 22px;
    height: 22px;
  }

  @media( max-width: 625px) {
    width: 20px;
    height: 20px;
  }
`;

export const LinkedinIcon = styled(FooterIcon)`
  background: center / contain no-repeat url(${linkedinIcon});
`;

export const GithubIcon = styled(FooterIcon)`
  background: center / contain no-repeat url(${githubIcon});
`;