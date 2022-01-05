import React from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import { InputError, Label, Input, InputGroup, InputsWrapper } from '../RegisterModal/styledRegisterModal'

export default function LoginModal({ isLoginModalOpen, closeAllModals }) {
  return (
    <ModalWithForm 
      isModalOpen={isLoginModalOpen}
      closeAllModals={closeAllModals}
    >
      <InputsWrapper>
        <InputGroup>
          <Label for='email'>Email</Label>
          <Input 
            placeholder='Enter email'
            type='email'
            id='email'
            name='email'
          />
          <InputError></InputError>
        </InputGroup>
        <InputGroup>
          <Label for='password'>Password</Label>
          <Input 
            placeholder='Enter password'
            type='password'
            id='password'
            name='password'
          />
          <InputError></InputError>
        </InputGroup>
      </InputsWrapper>
    </ModalWithForm>
  )
}
