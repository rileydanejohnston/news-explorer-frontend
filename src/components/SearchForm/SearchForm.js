import React from 'react'
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
  return (
    <SearchWrapper>
      <SearchContent>
        <Title>What's going on in the world?</Title>
        <Subtitle>Find the latest news on any topic and save them in your personal account.</Subtitle>
        <Form>
          <Input placeholder='Enter topic' />
          <Submit>Search</Submit>
        </Form>
      </SearchContent>
    </SearchWrapper>
  )
}
