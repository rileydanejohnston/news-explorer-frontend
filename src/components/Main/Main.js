import React from 'react'
import About from '../About/About';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import { ImageWrapper } from './styledMain';

export default function Main({ loggedIn }) {
  return (
    <>
      <ImageWrapper>
        <Header loggedIn={loggedIn} />
        <SearchForm />
      </ImageWrapper>
      <About />
    </>
  )
}
