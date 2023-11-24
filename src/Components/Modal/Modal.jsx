import './Modal.scss'

const Modal = (props) => {
    return (
        <div onClick={() => { props.onClose() }} className='ModalContainer'>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal