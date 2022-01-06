import React from 'react'
import Modal from '../Modal/Modal';
import { RegisterSuccessTitle, SignInLink } from './styledRegisterSuccessModal'

// recycled ModalWrapper and Title from Modal

export default function RegisterSuccessModal({ isSuccessRegisterModalOpen, closeAllModals, handleLinkClick }) {
  return (
    <Modal
      isModalOpen={isSuccessRegisterModalOpen}
      closeAllModals={closeAllModals}
    >
      <RegisterSuccessTitle>Registration successfully completed!</RegisterSuccessTitle>
      <SignInLink onClick={handleLinkClick}>Sign in</SignInLink>
    </Modal>
  )
}
