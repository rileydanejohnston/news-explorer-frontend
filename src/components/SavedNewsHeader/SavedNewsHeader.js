import { React, useContext } from 'react'
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { BoldText, RegularText, SavedHeaderWrapper, Subtitle, Title } from './styledSavedNewsHeader'

export default function SavedNewsHeader({ articleCount }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <SavedHeaderWrapper>
      <Title>Saved articles</Title>
      <Subtitle>{currentUser.username}, you have {articleCount} saved articles</Subtitle>
      <RegularText>
        By keywords: 
        <BoldText> Nature, Yellowstone, and 2 other</BoldText>
      </RegularText>
    </SavedHeaderWrapper>
  )
}
