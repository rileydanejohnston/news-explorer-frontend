import React from 'react'
import { CloseIcon, ModalContent, ModalWrapper, Form, FormLink, SubmitError, LinkWrapper, Submit, Title } from './styledModalWithForm'

export default function ModalWithForm({ formTitle, children, buttonText, linkText }) {

  const handleModalSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseIcon />
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
