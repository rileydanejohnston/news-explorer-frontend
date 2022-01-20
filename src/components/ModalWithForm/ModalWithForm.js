import { React } from 'react'
import Modal from '../Modal/Modal';
import { Form, FormLink, SubmitError, LinkWrapper, Submit, Title, DisabledSubmit } from './styledModalWithForm'

export default function ModalWithForm({ children, formText,isModalOpen, closeAllModals, formLinkClick, handleFormSubmit, isSubmitActive, authError }) {

  const handleModalSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeAllModals={closeAllModals}
    >
        <Form onSubmit={handleModalSubmit} noValidate>
          <Title>{formText.titleAndSubmit}</Title>
          { children }
          <SubmitError>{authError}</SubmitError>
          {
            isSubmitActive ?
            <Submit>{formText.titleAndSubmit}</Submit> :
            <DisabledSubmit disabled>{formText.titleAndSubmit}</DisabledSubmit>
          }
          <LinkWrapper>
            or <FormLink onClick={formLinkClick}>{formText.linkText}</FormLink>
          </LinkWrapper>
        </Form>
    </Modal>
  )
}
