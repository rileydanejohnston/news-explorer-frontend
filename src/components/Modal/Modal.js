import { React, useEffect } from 'react'
import { CloseIcon, ModalContent, ModalWrapper } from './styledModal'

export default function Modal({ children, isModalOpen, closeAllModals }) {

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

  return (
    <ModalWrapper className='modal' isModalOpen={isModalOpen}>
      <ModalContent>
        <CloseIcon onClick={closeAllModals} />
        { children }
      </ModalContent>
    </ModalWrapper>
  )
}
