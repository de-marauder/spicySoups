import {Modal} from './ModalStyle'

const modal = (props) => {
    return (
        <Modal>
            {props.children}
        </Modal>
    )
}

export default modal