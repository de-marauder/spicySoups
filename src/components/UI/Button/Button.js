import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button type={props.type}
            disabled={props.disabled}
            onClick={props.doStuff}
            style={props.style}
            className={classes[props.class]}>
            {props.children}
        </button>
    )
}

export default Button;