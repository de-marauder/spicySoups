import { connect } from 'react-redux'

import {
    Title,
    Orders,
    Order,
    OrderImg,
    OrderDesc,
    OrderTitle,
    OrderPrice,
    OrderSummary,
} from './StyledCart'

const Cart = (props) => {
    const orders = props.cart.map((el, id) => {
        return (
            <Order >
                <OrderImg src={props.cart.Img} />
                <OrderDesc>
                    <OrderTitle>{props.cart.meal}</OrderTitle>
                    <OrderPrice>{props.cart.price}</OrderPrice>
                </OrderDesc>
            </Order>
        )
    })
    return (
        <div>
            <Title>Cart</Title>
            <Orders>
                {orders}
            </Orders>
            <OrderSummary>
                Total = {}
            </OrderSummary>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.reducer.cart
    }
}

export default connect(mapStateToProps)(Cart);