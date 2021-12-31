import styled from "styled-components/macro";

export const AboutWrapper = styled.section`
  background: #FFF;
  padding: 80px 216px 80px 104px;
`;

export const AboutContent = styled.div`
  border: 1px solid blue;
  height: 100%;

  display: flex;
  justify-content: space-between;
  grid-gap: 56px;
  width: 1120px;
  margin: 0 auto;
`;

export const AuthorImg = styled.img`
  width: 464px;
  height: 464px;
  border-radius: 1000px;
`;

export const TitlesWrapper = styled.div`
  padding-top: 51px;
`;

export const Title = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 46px;
  letter-spacing: 0px;


`;

export const ParagraphWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  margin-top: 24px;
`;

export const Paragraph = styled.li`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`;