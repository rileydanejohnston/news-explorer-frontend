import styled from "styled-components/macro";
import notFound from '../../images/not-found_v1.svg';

export const NotFoundWrapper = styled.section`
  padding: 86px 0 80px 0;
  background: #F5F6F7;
`;

export const NotFoundContent = styled.div`
  width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  background: center / contain no-repeat url(${notFound});
  width: 96px;
  height: 96px;
`;

export const Title = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;

  margin-top: 24px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #B6BCBF;

  margin-top: 16px;
`;