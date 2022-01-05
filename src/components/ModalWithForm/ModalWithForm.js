import { React, useEffect } from 'react'
import { CloseIcon, ModalContent, ModalWrapper, Form, FormLink, SubmitError, LinkWrapper, Submit, Title } from './styledModalWithForm'

export default function ModalWithForm({ children, formText,isModalOpen, closeAllModals, formLinkClick, handleFormSubmit }) {

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
    handleFormSubmit();
  }

  return (
    <ModalWrapper className='modal' isModalOpen={isModalOpen}>
      <ModalContent>
        <CloseIcon onClick={closeAllModals} />
        <Form onSubmit={handleModalSubmit}>
          <Title>{formText.titleAndSubmit}</Title>
          { children }
          <SubmitError></SubmitError>
          <Submit>{formText.titleAndSubmit}</Submit>
          <LinkWrapper>
            or <FormLink onClick={formLinkClick}>{formText.linkText}</FormLink>
          </LinkWrapper>
        </Form>
      </ModalContent>
    </ModalWrapper>
  )
}
