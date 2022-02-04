import { NavLink as Link } from 'react-router-dom';

import img from '../../assets/images/Plate_with_spoon_knife_and_fork.jpg';
import CartCounter from '../../containers/Cart/CartCounter';
import Button from '../UI/Button/Button';
import classes from './Sidebar.module.css'

const sidebar = (props) => {

    return (
        <aside style={props.style} className={classes.Sidebar}>
            <img className={classes.sidebarIcon} src={img} alt='' />
            <hr />
            <ul>
                <li onClick={props.doStuff}><Link to='/'>Home</Link></li>
                <li onClick={props.doStuff}><Link to='/#catalogue'>Catalogue</Link></li>
                <li onClick={props.doStuff}>
                    <Link to='/cart'>
                        Cart
                        {(props.cartCounter !== 0) ?
                            <CartCounter counter={props.cartCounter} />
                            : null}
                    </Link>
                </li>
                <li onClick={props.doStuff}><Link to='/#about'>About Us</Link></li>
                <li onClick={props.doStuff}><Link to='/contact'>Contact Us</Link></li>
            </ul>
            <hr />
            <Link to='/cart' >
                <Button disabled={(props.cartCounter === 0) ? true : false} class='CheckOut' style={{ fontSize: '20px', width: '100%' }} >CHECK OUT</Button>
            </Link>
        </aside>
    )
}

export default sidebar;