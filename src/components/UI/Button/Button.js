import classes from './Button.module.css'

const menu = (props) => {
    return (
        <div onClick={props.doStuff} style={props.style} className={classes.Button}>
            {props.children}
        </div>
    )
}

export default menu;