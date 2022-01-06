import styled from "styled-components/macro";

export const AboutWrapper = styled.section`
  padding: 80px 216px 80px 104px;

  @media(max-width: 1439px) {
    padding: 40px 0 61px;
  }
  @media(max-width: 625px) {
    padding: 32px 0 128px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  grid-gap: 56px;
  width: 1120px;
  margin: 0 auto;

  @media(max-width: 1439px) {
    grid-gap: 32px;
    width: 920px;
  }
  @media(max-width: 1023px) {
    width: 688px;
  }
  @media(max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 288px;
    grid-gap: 24px;
  }
`;

export const AuthorImg = styled.img`
  width: 464px;
  height: 464px;
  border-radius: 1000px;

  @media(max-width: 1023px) {
    width: 232px;
    height: 232px;
  }
  @media(max-width: 625px) {
    width: 272px;
    height: 272px;
  }
`;

export const TitlesWrapper = styled.div`
  padding-top: 51px;

  @media(max-width: 1439px) {
    padding-top: 40px;
    width: 424px;
  }

  @media(max-width: 625px) {
    width: 288px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 46px;
  letter-spacing: 0px;

  @media(max-width: 1439px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const ParagraphWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  margin-top: 24px;

  @media(max-width: 1439px) {
    margin-top: 16px;
  }
`;

export const Paragraph = styled.li`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`;