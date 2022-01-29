import classes from './Card.module.css'

const card = (props) => {
    return (
        <div className={classes.Card}>
            {/* {props.children} */}
            <div className={classes.ImageWrapper}>
                <img src={props.Img} alt='' />
            </div>
            
            <div className={classes.Text}>
                <h4>Food Name</h4>
                <p>Price</p>
            </div>
        </div>
    )
}

export default card;