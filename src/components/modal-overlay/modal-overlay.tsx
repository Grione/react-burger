import modalOverlayStyles from './modal-overlay.module.css';

function ModalOverlay({ closeHandler }: { closeHandler: () => void }) {
  return (
    <div className={modalOverlayStyles.overlay} onClick={closeHandler} data-test="modal-overlay"></div>
  )
}

export default ModalOverlay; 