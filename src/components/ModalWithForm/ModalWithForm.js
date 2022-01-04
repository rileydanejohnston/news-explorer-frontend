import React from 'react'
import Modal from '../Modal/Modal'
import { Form, FormLink, ErrorMessage, LinkWrapper, Submit, Title } from './styledModalWithForm'

export default function ModalWithForm({ formTitle, children, buttonText, linkText }) {

  const handleModalSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Modal>
      <Form onSubmit={handleModalSubmit}>
        <Title>Sign up</Title>
        <ErrorMessage>There was an error</ErrorMessage>
        <Submit>Sign up</Submit>
        <LinkWrapper>
          or <FormLink>Sign in</FormLink>
        </LinkWrapper>
      </Form>
    </Modal>
  )
}
