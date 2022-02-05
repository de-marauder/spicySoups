import { NavLink as Link } from 'react-router-dom';

import img from '../../assets/images/Plate_with_spoon_knife_and_fork.jpg';
import CartCounter from '../../containers/Cart/CartCounter';
import Button from '../UI/Button/Button';
import classes from './Sidebar.module.css'

const home = '/spicy_soups'

const sidebar = (props) => {

    return (
        <aside style={props.style} className={classes.Sidebar}>
            <img className={classes.sidebarIcon} src={img} alt='' />
            <hr />
            <ul>
                <li onClick={props.doStuff}><Link to={home + '/'}>Home</Link></li>
                <li onClick={props.doStuff}><Link to={home + '/#catalogue'}>Catalogue</Link></li>
                <li onClick={props.doStuff}>
                    <Link to={home + '/cart'}>
                        Cart
                        {(props.cartCounter !== 0) ?
                            <CartCounter counter={props.cartCounter} />
                            : null}
                    </Link>
                </li>
                <li onClick={props.doStuff}><Link to={home + '/#about'}>About Us</Link></li>
                <li onClick={props.doStuff}><a href={'#contact'}>Contact Us</a></li>
            </ul>
            <hr />
            <Link to={home + '/cart'} >
                <Button doStuff={props.doStuff} disabled={(props.cartCounter === 0) ? true : false} class='CheckOut' style={{ fontSize: '20px', width: '100%' }} >CHECK OUT</Button>
            </Link>
        </aside>
    )
}

export default sidebar;