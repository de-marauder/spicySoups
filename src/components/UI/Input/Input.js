import React from 'react';

import classes from './Input.module.css'

const input = (props) => {
    return (
        (props.type === 'textarea') ?
            <textarea className={classes.Input + ' ' + classes.Col2}
                rows={5}
                name={props.name}
                type={props.type}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                onChange={props.update}></textarea> :
            <input className={classes.Input}
                name={props.name}
                type={props.type}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                onChange={props.update} />
    )
}

export default input;