import { React, useState, useEffect } from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import { InputError, Label, Input, InputGroup, InputGroupUsername, InputsWrapper } from './styledLoginRegisterModal'

export default function LoginRegisterModal({ isLoginRegisterModalOpen, isRegisterModalOpen, closeAllModals, formLinkClick, handleLogin, handleRegister }) {

  const formText = {
    titleAndSubmit: isRegisterModalOpen ? 'Sign up' : 'Sign in',
    linkText: isRegisterModalOpen ? 'Sign in' : 'Sign up'
  };

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [isLoginSubmitActive, setIsLoginSubmitActive] = useState(false);
  const [isRegisterSubmitActive, setIsRegisterSubmitActive] = useState(false);

  // test validity state every change to determine if submit is active
  useEffect(() => {
    setIsLoginSubmitActive( (emailValid && passwordValid) ? true : false );
    setIsRegisterSubmitActive( (emailValid && passwordValid && usernameValid) ? true : false );
  }, [emailValid, passwordValid, usernameValid]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(e.target.validity.valid);

    if (!e.target.validity.valid) {
      setEmailError(e.target.validationMessage);
    }
    else {
      setEmailError('');
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.validity.valid);

    if (!e.target.validity.valid) {
      setPasswordError(e.target.validationMessage);
    }
    else {
      setPasswordError('');
    }
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameValid(e.target.validity.valid);

    if (!e.target.validity.valid) {
      setUsernameError(e.target.validationMessage);
    }
    else {
      setUsernameError('');
    }
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
      isSubmitActive={isRegisterModalOpen ? isRegisterSubmitActive : isLoginSubmitActive}
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
            required
            minLength={2}
            maxLength={30}
          />
          <InputError>{emailError}</InputError>
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
            required={true}
            minLength={8}
            maxLength={30}
          />
          <InputError>{passwordError}</InputError>
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
            required={isRegisterModalOpen ? true : false}
            minLength={2}
            maxLength={30}
          />
          <InputError>{usernameError}</InputError>
        </InputGroupUsername>
      </InputsWrapper>
    </ModalWithForm>
  )
}
