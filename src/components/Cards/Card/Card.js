

import classes from './Card.module.css'

const card = ({ product, addMeal, removeMeal, cart }) => {

    const openMealModal = () => {

    }
    let disable = true;
    if (cart.indexOf(product) === -1) {
        disable = true
    } else {
        disable = false
    }
    console.log(disable)
    return (
        <div onClick={openMealModal} className={classes.Card}>
            {/* {props.children} */}
            <div className={classes.ImageWrapper}>
                <button disabled={disable} onClick={(_) => { removeMeal(_, product) }} className={classes.ToCart + ' ' + classes.RemoveFromCart}>-</button>
                <button onClick={(_) => { addMeal(_, product) }} className={classes.ToCart + ' ' + classes.AddToCart}>+</button>
                <img src={product.Img} alt='' />
            </div>

            <div className={classes.Text}>
                <h4>{product.meal}</h4>
                <p>{product.price}</p>
            </div>
        </div>
    )
}

export default card;