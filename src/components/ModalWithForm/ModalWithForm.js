import { React, useEffect } from 'react'
import { CloseIcon, ModalContent, ModalWrapper, Form, FormLink, SubmitError, LinkWrapper, Submit, Title } from './styledModalWithForm'

export default function ModalWithForm({ formTitle, children, buttonText, linkText, isModalOpen, closeAllModals }) {

  // close via escape
  useEffect(() => {
    const closeEsc = (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    }
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
  }, [])

  // close via overlay click
  useEffect(() => {
    const closeOverlayClick = (e) => {
      if (e.target.classList.contains('modal')) {
        closeAllModals();
      }
    }
    document.addEventListener('click', closeOverlayClick);
    return () => document.removeEventListener('click', closeOverlayClick);
  }, [])

  const handleModalSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <ModalWrapper className='modal' isModalOpen={isModalOpen}>
      <ModalContent>
        <CloseIcon onClick={closeAllModals} />
        <Form onSubmit={handleModalSubmit}>
          <Title>Sign up</Title>
          { children }
          <SubmitError></SubmitError>
          <Submit>Sign up</Submit>
          <LinkWrapper>
            or <FormLink>Sign in</FormLink>
          </LinkWrapper>
        </Form>
      </ModalContent>
    </ModalWrapper>
  )
}
