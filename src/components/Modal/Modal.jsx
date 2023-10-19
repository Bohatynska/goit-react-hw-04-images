import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalCard, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export default function Modal({ img, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalCard>
        <img src={img} alt="" />
      </ModalCard>
    </Backdrop>,
    modalRoot
  );
}
