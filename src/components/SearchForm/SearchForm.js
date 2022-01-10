import { React, useState, useContext } from 'react'
import { IsMenuOpenContext } from '../../contexts/isMenuOpenContext';
import {
  SearchContent,
  SearchWrapper,
  Title,
  Subtitle,
  Form,
  Input,
  Submit,
} from './styledSearchForm'

export default function SearchForm({ handleSearchSubmit }) {

  const [searchQuery, setSearchQuery] = useState('');
  const isMenuOpen = useContext(IsMenuOpenContext);

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate search request
    if (!searchQuery) {
      console.log(`Error, enter a keyword`);
      return;
    }
    
    handleSearchSubmit(searchQuery);
  }

  return (
    <SearchWrapper isMenuOpen={isMenuOpen}>
      <SearchContent>
        <Title>What's going on in the world?</Title>
        <Subtitle>Find the latest news on any topic and save them in your personal account.</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Input 
            value={searchQuery}
            onChange={handleInput} 
            placeholder='Enter topic'
            required
          />
          <Submit>Search</Submit>
        </Form>
      </SearchContent>
    </SearchWrapper>
  )
}
