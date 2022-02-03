import classes from './Cart.module.css'

const cartCounter = (props) => <span style={props.style} className={classes.Counter}>{props.counter}</span>

export default cartCounter;