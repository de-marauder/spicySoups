import Modal from "../UI/Modal"

const Payment = ({active, doStuff}) => {
    return (
        <Modal active={active} doStuff={doStuff}>
            <h1>Make Payment</h1>
        </Modal>
    )
}

export default Payment;