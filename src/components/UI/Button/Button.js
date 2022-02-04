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
        <button type={props.type}
            disabled={props.disabled}
            onClick={props.doStuff}
            style={props.style}
            className={classList.join(' ')}>
            {props.children}
        </button>
    )
}

export default Button;