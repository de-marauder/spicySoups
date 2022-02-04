import classes from './Cart.module.css'

const cartCounter = (props) => {
    return (
        <span
            // onMouseOver={props.onHover}
            // onMouseOut={props.onHoverOut}
            style={props.style}
            className={classes.Counter}>{props.counter}</span>
    )
}
export default cartCounter;