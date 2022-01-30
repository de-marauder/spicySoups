import classes from './Button.module.css'

const button = (props) => {
    return (
        <button type={props.type} onClick={props.doStuff} style={props.style} className={classes[props.class]}>
            {props.children}
        </button>
    )
}

export default button;