import React from 'react'
import { ImageWrapper } from './styledHomeImageBackground'

export default function HomeImageBackground({ children }) {
  return (
    <ImageWrapper>
      { children }
    </ImageWrapper>
  )
}
