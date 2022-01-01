import React from 'react'
import About from '../About/About';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import { ImageWrapper } from './styledMain';

export default function Main({ loggedIn }) {
  return (
    <>
      <ImageWrapper>
        <Header loggedIn={loggedIn} />
        <SearchForm />
      </ImageWrapper>
      <Preloader />
      <SearchResults loggedIn={loggedIn} />
      <About />
    </>
  )
}
