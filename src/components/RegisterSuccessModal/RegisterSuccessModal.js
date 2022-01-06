import React from 'react'
import Modal from '../Modal/Modal';
import { RegisterSuccessTitle, SignInLink } from './styledRegisterSuccessModal'

// recycled ModalWrapper and Title from Modal

export default function RegisterSuccessModal({ isSuccessRegisterModalOpen, closeAllModals }) {
  return (
    <Modal
      isModalOpen={isSuccessRegisterModalOpen}
      closeAllModals={closeAllModals}
    >
      <RegisterSuccessTitle>Registration successfully completed!</RegisterSuccessTitle>
      <SignInLink>Sign in</SignInLink>
    </Modal>
  )
}
