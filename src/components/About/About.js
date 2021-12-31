import React from 'react'
import { 
  AboutContent,
  AboutWrapper,
  AuthorImg,
  Title,
  Subtitle,
  TitlesWrapper,
  Paragraph,
  ParagraphWrapper,
} from './styledAbout'
import authorImg from '../../images/riley-og.jpeg';

export default function About() {
  return (
    <AboutWrapper>
      <AboutContent>
        <AuthorImg 
          src={authorImg}
          alt='3 photos of Riley Johnston. The left-most photo is with hair down to his shoulders, the middle photo is with the left side shaved, the right-most photo is a buzz cut.'
        />
        <TitlesWrapper>
          <Title>About the author</Title>
          <ParagraphWrapper>
            <Paragraph>I’m a full stack web developer who likes to design and build efficient applications. My experience includes creating solo projects as well as working with a team to build an application for a customer. I especially like working with backend technologies like Express and MongoDB, as well as frontend technologies like React, CSS3 and HTML5.</Paragraph>
            <Paragraph>When I’m not working on tech stuff or watching Ted Lasso, I like to ride my bike in the country where I can see cows, horses, and occasionally get chased by dogs.</Paragraph>
          </ParagraphWrapper>
        </TitlesWrapper>
      </AboutContent>
    </AboutWrapper>
  )
}
