import React from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import { InputError, Label, Input, InputGroup, InputsWrapper } from './styledRegisterModal'

export default function RegisterModal() {
  return (
    <ModalWithForm>
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
        <InputGroup>
          <Label for='username'>Username</Label>
          <Input 
            placeholder='Enter username'
            type='text'
            id='username'
            name='username'
          />
          <InputError></InputError>
        </InputGroup>
      </InputsWrapper>
    </ModalWithForm>
  )
}
