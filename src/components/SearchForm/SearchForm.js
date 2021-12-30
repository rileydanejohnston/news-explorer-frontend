import { React, useState } from 'react'
import {
  SearchContent,
  SearchWrapper,
  Title,
  Subtitle,
  Form,
  Input,
  Submit,
} from './styledSearchForm'

export default function SearchForm() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  }

  return (
    <SearchWrapper>
      <SearchContent>
        <Title>What's going on in the world?</Title>
        <Subtitle>Find the latest news on any topic and save them in your personal account.</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Input 
            value={searchQuery}
            onChange={handleInput} 
            placeholder='Enter topic'
          />
          <Submit>Search</Submit>
        </Form>
      </SearchContent>
    </SearchWrapper>
  )
}
