import { useNavigate, useLocation } from 'react-router-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';
import { FC, PropsWithChildren, useEffect } from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root') as HTMLElement;

interface IModalProps {
  title?: string,
  close?: () => void
}
const Modal: FC<PropsWithChildren<IModalProps>> = (props) => {
  const { title, close, children } = props;

  const navigate = useNavigate();

  useEffect(() => {
    function closeModalEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeHandler()
      }
    }

    document.addEventListener('keyup', closeModalEscape)

    return () => {
      document.removeEventListener('keyup', closeModalEscape)
    }


  }, [])

  const closeHandler = () => {
    if (close) {
      close()
    } else {
      navigate(-1);
    }

  }

  return ReactDOM.createPortal(
    (<>

      <div className={`${modalStyles.modal} p-10 pb-15`}>
        <div className={modalStyles.header}>
          <h3 className="text text_type_main-large">{title}</h3>
          <button className={modalStyles.close} onClick={closeHandler} data-test="close-button">
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay closeHandler={closeHandler} />
    </>
    ), root
  )
}

export default Modal;