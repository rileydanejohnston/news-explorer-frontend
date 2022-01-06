import { React } from 'react'
import Modal from '../Modal/Modal';
import { Form, FormLink, SubmitError, LinkWrapper, Submit, Title } from './styledModalWithForm'

export default function ModalWithForm({ children, formText,isModalOpen, closeAllModals, formLinkClick, handleFormSubmit }) {

  const handleModalSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeAllModals={closeAllModals}
    >
        <Form onSubmit={handleModalSubmit}>
          <Title>{formText.titleAndSubmit}</Title>
          { children }
          <SubmitError></SubmitError>
          <Submit>{formText.titleAndSubmit}</Submit>
          <LinkWrapper>
            or <FormLink onClick={formLinkClick}>{formText.linkText}</FormLink>
          </LinkWrapper>
        </Form>
    </Modal>
  )
}
