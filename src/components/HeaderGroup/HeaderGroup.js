import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { ImageWrapper } from './styledHeaderGroup';
import Header from "../Header/Header";
import SearchForm from '../SearchForm/SearchForm';


export default function HeaderGroup({ openLoginWindow, handleLogOut, handleSearchSubmit }) {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ?
        (
          <ImageWrapper>
            <Header
              openLoginWindow={openLoginWindow}
              handleLogOut={handleLogOut}
            />
            <SearchForm handleSearchSubmit={handleSearchSubmit}/>
          </ImageWrapper>
        )
      : 
        (
          <Header
            openLoginWindow={openLoginWindow}
            handleLogOut={handleLogOut}
          />
        )
      }
    </>
  )
}
