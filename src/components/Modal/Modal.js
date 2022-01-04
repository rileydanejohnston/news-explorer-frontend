import React from 'react'
import { CloseIcon, ModalContent, ModalWrapper } from './styledModal'

export default function Modal({ children }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseIcon />
        { children }
      </ModalContent>
    </ModalWrapper>
  )
}
