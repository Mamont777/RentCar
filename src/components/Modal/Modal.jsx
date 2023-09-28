import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { handleClose } from '../../shared/utils';
import Button from '../Button';

const modalContainer = document.getElementById('modal');

const Modal = ({ children, onClose, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  const handleModalClose = useCallback(
    e => {
      document.body.style.overflow = 'visible';
      handleClose(e, onClose);
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleModalClose);

    return () => document.body.removeEventListener('keydown', handleModalClose);
  }, [handleModalClose]);

  return createPortal(
    <div className="backdrop" onClick={handleModalClose}>
      <div className="modal max-w-full dark:bg-slate-700">
        <Button
          onClick={onClose}
          className="close"
          type="button"
          aria-label="close icon"
          iconURL="#icon-close"
        />
        {children}
      </div>
    </div>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

export default Modal;
