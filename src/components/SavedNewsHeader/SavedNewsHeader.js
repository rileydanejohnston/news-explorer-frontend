import React from 'react'
import { BoldText, RegularText, SavedHeaderWrapper, Subtitle, Title } from './styledSavedNewsHeader'

export default function SavedNewsHeader({ articleCount }) {
  return (
    <SavedHeaderWrapper>
      <Title>Saved articles</Title>
      <Subtitle>Elise, you have {articleCount} saved articles</Subtitle>
      <RegularText>
        By keywords: 
        <BoldText> Nature, Yellowstone, and 2 other</BoldText>
      </RegularText>
    </SavedHeaderWrapper>
  )
}
