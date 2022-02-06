import { useState } from 'react'
import styled from 'styled-components'

import { Order, OrderDesc, OrderImg, OrderTitle, OrderPrice, Naira, RemoveFromCart } from '../../../containers/Cart/StyledCart'
import Modal from '../../UI/Modal'
import Button from '../../UI/Button/Button'

import classes from './Card.module.css'

const Card = (props) => {

    let [mealModalActive, toggleMealModal] = useState(false)

    const openMealModal = () => {
        toggleMealModal(mealModalActive = true)
    }
    const closeMealModal = () => {
        toggleMealModal(mealModalActive = false)
    }
    let disable = true;
    if (props.cart.indexOf(props.product) === -1) {
        disable = true
    } else {
        disable = false
    }
    // console.log(disable)

    const Hr = styled.hr`
        width: 60%;
        border: 1px solid #8cb340;
        margin: 10px 0
    `

    return (
        <>
            <div className={classes.Card}>

                <div className={classes.ImageWrapper}>
                    <button
                        disabled={disable} onClick={(_) => { props.removeMeal(_, props.product) }}
                        className={classes.ToCart + ' ' + classes.RemoveFromCart}>-</button>
                    <button
                        onClick={(_) => { props.addMeal(_, props.product) }}
                        className={classes.ToCart + ' ' + classes.AddToCart}>+</button>
                    <img onClick={openMealModal} src={props.product.Img} alt='' />
                </div>

                <div className={classes.Text}>
                    <h4>{props.product.meal}</h4>
                    <p>{props.product.price}</p>
                </div>
            </div>
            <Modal style={{
                left: '0'
            }} doStuff={() => closeMealModal()} active={mealModalActive} >
                <RemoveFromCart onClick={closeMealModal} >X</RemoveFromCart>
                <Order
                    className={classes.Order}
                    style={{ height: '70%', width: '98%', boxShadow: 'none' }}
                     >
                    <OrderImg
                        className={classes.OrderImg}
                        src={props.product.Img} alt={props.product.meal} />
                    <hr style={{
                        margin: '5px 0',
                        tranform: 'rotate(90deg)',
                        border: '1px solid #8cb340'
                    }} />
                    <OrderDesc
                        className={classes.OrderDesc}
                        style={{
                            // width: '50%',
                            justifyContent: 'space-around'
                        }}>
                        <OrderTitle>{props.product.meal}</OrderTitle>
                        <Hr />
                        <p>{props.product.desc.slice(0, 100)}</p>
                        <Hr />
                        <OrderPrice>Price: <Naira>N</Naira>{props.product.price.slice(2)}</OrderPrice>
                        <Button class={'Submit Submit2'}
                            doStuff={(_) => { 
                                props.addMeal(_, props.product)
                                closeMealModal()
                                console.log('modal closed')
                            }}
                            className={classes.ToCart + ' ' + classes.AddToCart}>ADD TO CART</Button>
                    </OrderDesc>
                </Order>
            </Modal>
        </>
    )
}

export default Card;