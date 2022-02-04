// import { useState } from 'react'

import Backdrop from '../Backdrop/Backdrop'
import { ModalStyle } from './ModalStyle'

const Modal = (props) => {

    // let [backdropActive, backdropToggler] = useState(props.active)

    return (
            props.active ? 
            <>
                <Backdrop doStuff={props.doStuff} style={{ zIndex: '25' }} />
                <ModalStyle>
                    {props.children}
                </ModalStyle>

            </> : null
    )
}

export default Modal