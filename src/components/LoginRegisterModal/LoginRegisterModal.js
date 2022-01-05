import React from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import { InputError, Label, Input, InputGroup, InputGroupUsername, InputsWrapper } from './styledLoginRegisterModal'

export default function LoginRegisterModal({ isLoginRegisterModalOpen, isRegisterModalOpen, closeAllModals, formLinkClick }) {
  return (
    <ModalWithForm 
      isModalOpen={isLoginRegisterModalOpen}
      closeAllModals={closeAllModals}
      formLinkClick={formLinkClick}
    >
      <InputsWrapper>
        <InputGroup>
          <Label htmlFor='email'>Email</Label>
          <Input 
            placeholder='Enter email'
            type='email'
            id='email'
            name='email'
          />
          <InputError></InputError>
        </InputGroup>
        <InputGroup>
          <Label htmlFor='password'>Password</Label>
          <Input 
            placeholder='Enter password'
            type='password'
            id='password'
            name='password'
          />
          <InputError></InputError>
        </InputGroup>
        <InputGroupUsername isRegisterModalOpen={isRegisterModalOpen}>
          <Label htmlFor='username'>Username</Label>
          <Input 
            placeholder='Enter username'
            type='text'
            id='username'
            name='username'
          />
          <InputError></InputError>
        </InputGroupUsername>
      </InputsWrapper>
    </ModalWithForm>
  )
}
