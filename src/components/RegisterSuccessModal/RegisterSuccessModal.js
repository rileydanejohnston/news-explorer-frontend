import React from 'react'
import { CloseIcon, ModalWrapper, Title } from '../ModalWithForm/styledModalWithForm'
import { RegisterModalContent, SignInLink } from './styledRegisterSuccessModal'

// recycled ModalWrapper and Title from ModalWithForm

export default function RegisterSuccessModal({ isSuccessRegisterModalOpen, closeAllModals }) {
  return (
    <ModalWrapper
      isModalOpen={isSuccessRegisterModalOpen}
      closeAllModals={closeAllModals}
    >
      <RegisterModalContent>
        <CloseIcon />
        <Title>Registration successfully completed!</Title>
        <SignInLink>Sign in</SignInLink>
      </RegisterModalContent>
    </ModalWrapper>
  )
}
