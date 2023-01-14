import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root');
function Modal(props) {
  const { title, close } = props;

  useEffect(() => {
    function closeModalEscape(event) {
      if (event.key === 'Escape') {
        close();
      }
    }

    document.addEventListener('keyup', closeModalEscape)

    return () => {
      document.removeEventListener('keyup', closeModalEscape)
    }


  }, [])

  return ReactDOM.createPortal(
    (<>

      <div className={`${modalStyles.modal} p-10 pb-15`}>
        <div className={modalStyles.header}>
          <h3 className="text text_type_main-large">{title}</h3>
          <button className={modalStyles.close} onClick={close}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {props.children}
      </div>
      <ModalOverlay closeHandler={close} />
    </>
    ), root
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func.isRequired
}

export default Modal;