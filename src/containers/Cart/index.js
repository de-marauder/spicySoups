import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import Payment from '../../components/Payment/Payment';
import Button from '../../components/UI/Button/Button';
import {
    Title,
    TitleIcon,
    OrdersWrapper,
    RemoveFromCart,
    Orders,
    OrderList,
    OrderDiv,
    Order,
    OrderImg,
    OrderDesc,
    OrderTitle,
    Naira,
    OrderPrice,
    OrderSummary,
    ButtonDiv
} from './StyledCart'

import Img from '../../assets/images/cart-icon-28356-Windows.ico'
import shoppingBagIcon from '../../assets/images/shopping-bag.png'
import classes from './Cart.module.css';


const home = '/spicy_soups'

const Cart = (props) => {

    let totalPrice = 0;
    const orders = props.cart.map((meal, id) => {

        // console.log(meal)
        let price = meal.price.slice(2)
        console.log(meal.price)
        totalPrice += Number(price)
        return (
            // <div>{price}</div>
            <Order key={id} >
                <RemoveFromCart onClick={(_) => props.removeFromCart(_, meal)} >-</RemoveFromCart>
                <OrderImg src={meal.Img} alt={meal.meal} />
                <OrderDesc>
                    <OrderTitle>{meal.meal}</OrderTitle>
                    <OrderPrice>Price: <Naira>N</Naira>{price}</OrderPrice>
                </OrderDesc>
            </Order>
        )
    })
    // console.log(orders, totalPrice)

    let [paymentDiv, setPaymentDiv] = useState(false)

    const initPaymentModal = () => {
        setPaymentDiv(
            paymentDiv = !paymentDiv
        )
    }

    // console.log(paymentDiv)

    return (
        <div>
            <Title>Cart
                <TitleIcon src={Img} alt='cart icon' />
            </Title>
            {/* <i className={classes.BackIcon + "far fa-arrow-alt-circle-left"}></i> */}
            <Link className={classes.BackLink} to={home + '/#catalogue'}>
                {/* <p style={{ width: '50px', height: '50px' }} className={classes.BackIcon}>jibber jabber</p> */}
                <FontAwesomeIcon style={{width: '50px', height: '50px'}} className={classes.BackIcon} icon={faArrowAltCircleLeft} ></FontAwesomeIcon>
                back to catalogue
            </Link>
            <OrdersWrapper>
                {/* className="fas fa-shopping-cart" */}
                {/* <FontAwesomeIcon icon={faArrowAltCircleLeft} ></FontAwesomeIcon> */}
                <TitleIcon style={{ width: '55px', height: '50px', position: 'relative', right: '45%' }} src={shoppingBagIcon} alt='cart icon' />
                <Orders>
                    <OrderList>
                        <OrderDiv>
                            {(orders.length > 0) ?
                                orders :
                                <div>
                                    <h1>Your cart is empty!</h1>
                                    <Link to={home + '/'}>Make an order</Link>
                                </div>}
                        </OrderDiv>
                    </OrderList>
                    <OrderSummary>
                        Total = <Naira> N </Naira> {totalPrice}
                    </OrderSummary>
                </Orders>
                <ButtonDiv>

                    <Button
                        disabled={(props.cart.length <= 0) ? true : false}
                        doStuff={props.emptyCart}
                        class={'Submit Order Cancel'} >
                        EMPTY CART
                    </Button>
                    <Button
                        disabled={(props.cart.length <= 0 && totalPrice <= 0) ? true : false}
                        doStuff={initPaymentModal}
                        class={'Submit Order'} >
                        ORDER
                    </Button>
                </ButtonDiv>
                {/* <Link to='/cart/payment' > */}
                {/* </Link> */}

            </OrdersWrapper>
            {/* <div style={paymentDivStyle}> */}
            {paymentDiv ? <Payment active={paymentDiv} doStuff={initPaymentModal} /> : null}
            {/* </div> */}

            {/* <Routes>
                <Route path='/cart/payment' exact element={<Payment />} />
            </Routes> */}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.reducer.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (_, meal) => { dispatch({ type: 'REMOVE_ITEM_FROM_CART', data: meal }) },
        emptyCart: (_) => { dispatch({ type: 'EMPTY_CART' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);