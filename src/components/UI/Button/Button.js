import classes from './Button.module.css'

const Button = (props) => {
    let classList = []
    // console.log(props.class)
    props.class.split(' ').map((cls) => {
        // console.log(classes[cls])
        classList.push(classes[cls])
        return classList
    })
    // console.log(classList)
    return (
        <div className={classes.ButtonWrapper}>
            <button type={props.type}
                disabled={props.disabled}
                onClick={props.doStuff}
                style={props.style}
                className={classList.join(' ')}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;