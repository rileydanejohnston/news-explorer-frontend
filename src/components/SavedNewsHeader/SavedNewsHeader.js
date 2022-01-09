import { React, useContext, useState, useEffect } from 'react'
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { BoldText, RegularText, SavedHeaderWrapper, Subtitle, Title } from './styledSavedNewsHeader'

export default function SavedNewsHeader({ articleCount, displayArticles }) {

  const currentUser = useContext(CurrentUserContext);
  const [uniqueKeywords, setUniqueKeywords] = useState([]);
  const [keywordHeader, setKeywordHeader] = useState('');

  useEffect(() => {
    setUniqueKeywords(getUniqueKeywords());
  }, [displayArticles]);

  useEffect(() => {
    setKeywordHeader(getKeywordHeader());
  }, [uniqueKeywords])

  function getAllKeywords() {
    const keywords = displayArticles.map((article) => {
      return article.keyword;
    });

    return keywords;
  }

  function getUniqueKeywords() {
    const keywords = getAllKeywords();
    const uniqueKeys = [...new Set(keywords)];
    return uniqueKeys;
  }

  function getKeywordHeader() {
    const total = uniqueKeywords.length;
    let key1;
    let tempString;

    if (total >= 2) {
      key1 = uniqueKeywords[0];
      const key2 = uniqueKeywords[1];
      const remainder = total - 2;
      tempString = `${key1}, ${key2}, and ${remainder} others`;
    }
    else if (total === 1) {
      key1 = uniqueKeywords[0];
      tempString = `${key1}`;
    }

    return tempString;
  }

  return (
    <SavedHeaderWrapper>
      <Title>Saved articles</Title>
      <Subtitle>{currentUser.username}, you have {articleCount} saved articles</Subtitle>
      <RegularText>
        By keywords: 
        <BoldText> {keywordHeader}</BoldText>
      </RegularText>
    </SavedHeaderWrapper>
  )
}
