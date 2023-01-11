import PropTypes from 'prop-types';
import modalOverlayStyles from './modal-overlay.module.css';

function ModalOverlay(props) {
  return (
    <div className={modalOverlayStyles.overlay} onClick={props.closeHandler}></div>
  )
}

ModalOverlay.propTypes = {
  closeHandler: PropTypes.func.isRequired,
}

export default ModalOverlay; 