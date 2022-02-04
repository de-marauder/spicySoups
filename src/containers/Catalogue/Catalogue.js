import { React } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Cards from '../../components/Cards/Cards'
import Button from '../../components/UI/Button/Button';

import classes from './Catalogue.module.css';

const Catalogue = (props) => {

    return (
        <div id='catalogue' className={classes.Catalogue} >
            <h1>Order Now</h1>
            <h3>What would you like to eat?</h3>
            <div className={classes.CatalogueItems}>
                <Cards cart={props.cart} addMeal={props.addItemToCart} removeMeal={props.removeItemFromCart} />
            </div>
            <Link to='/cart' >
                <Button class='CheckOut' disabled={(props.cart.length === 0) ? true : false} >CHECK OUT</Button>
            </Link>
        </div >

    )
}


const mapStateToProps = state => {
    // console.log(state.cart)
    return {
        cart: state.reducer.cart,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (_, product) => dispatch({ type: 'ADD_ITEM_TO_CART', data: product }),
        removeItemFromCart: (_, product) => dispatch({ type: 'REMOVE_ITEM_FROM_CART', data: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);