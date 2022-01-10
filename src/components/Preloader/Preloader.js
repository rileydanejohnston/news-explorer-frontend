import React from 'react'
import { PreloaderWrapper, PreloaderContent, PreloaderIcon, Text } from './styledPreloader'

export default function Preloader() {
  return (
    <PreloaderWrapper>
      <PreloaderContent>
        <PreloaderIcon />
        <Text>Searching for news...</Text>
      </PreloaderContent>
    </PreloaderWrapper>
  )
}
