import { React, useContext } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { HeaderGroupWrapper, ImageWrapper } from './styledHeaderGroup';
import Header from "../Header/Header";
import SearchForm from '../SearchForm/SearchForm';
import { IsMenuOpenContext } from '../../contexts/isMenuOpenContext';


export default function HeaderGroup({ openLoginWindow, handleLogOut, handleSearchSubmit, setIsMenuOpen }) {

  const location = useLocation();
  const isMenuOpen = useContext(IsMenuOpenContext);

  return (
    <HeaderGroupWrapper isMenuOpen={isMenuOpen}>
      {location.pathname === '/' ?
        (
          <ImageWrapper>
            <Header
              openLoginWindow={openLoginWindow}
              handleLogOut={handleLogOut}
              setIsMenuOpen={setIsMenuOpen}
            />
            <SearchForm
              handleSearchSubmit={handleSearchSubmit}
              isMenuOpen={isMenuOpen}
            />
          </ImageWrapper>
        )
      : 
        (
          <Header
            openLoginWindow={openLoginWindow}
            handleLogOut={handleLogOut}
            setIsMenuOpen={setIsMenuOpen}
          />
        )
      }
    </HeaderGroupWrapper>
  )
}
