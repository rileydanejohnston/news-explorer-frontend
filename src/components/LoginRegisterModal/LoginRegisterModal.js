import { React, useState, useEffect } from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import { InputError, Label, Input, InputGroup, InputGroupUsername, InputsWrapper } from './styledLoginRegisterModal'

export default function LoginRegisterModal({ isLoginRegisterModalOpen, isRegisterModalOpen, closeAllModals, formLinkClick, handleLogin, handleRegister }) {

  const formText = {
    titleAndSubmit: isRegisterModalOpen ? 'Sign up' : 'Sign in',
    linkText: isRegisterModalOpen ? 'Sign in' : 'Sign up'
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleLoginSubmit = () => {
    handleLogin(email, password);
  }

  const handleRegisterSubmit = () => {
    handleRegister(email, password, username);
  }

  const correctSubmitFunction = isRegisterModalOpen ? handleRegisterSubmit : handleLoginSubmit;

  return (
    <ModalWithForm 
      isModalOpen={isLoginRegisterModalOpen}
      closeAllModals={closeAllModals}
      formLinkClick={formLinkClick}
      formText={formText}
      handleFormSubmit={correctSubmitFunction}
    >
      <InputsWrapper>
        <InputGroup>
          <Label htmlFor='email'>Email</Label>
          <Input 
            placeholder='Enter email'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleEmailChange}
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
            value={password}
            onChange={handlePasswordChange}
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
            value={username}
            onChange={handleUsernameChange}
          />
          <InputError></InputError>
        </InputGroupUsername>
      </InputsWrapper>
    </ModalWithForm>
  )
}
