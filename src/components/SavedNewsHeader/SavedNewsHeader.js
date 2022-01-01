import React from 'react'
import { BoldText, RegularText, SavedHeaderWrapper, Subtitle, Title } from './styledSavedNewsHeader'

export default function SavedNewsHeader() {
  return (
    <SavedHeaderWrapper>
      <Title>Saved articles</Title>
      <Subtitle>Elise, you have 5 saved articles</Subtitle>
      <RegularText>
        By keywords: 
        <BoldText> Nature, Yellowstone, and 2 other</BoldText>
      </RegularText>
    </SavedHeaderWrapper>
  )
}
