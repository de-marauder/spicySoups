
import img from '../../assets/images/Plate_with_spoon_knife_and_fork.jpg';
import classes from './Sidebar.module.css'

const sidebar = (props) => {
    return (
        <div style={props.style} className={classes.Sidebar}>
            <img className={classes.sidebarIcon} src={img} alt='' />
            <hr />
            <ul>
                <li><a onClick={props.doStuff} href='#catalogue'>Catalogue</a></li>
                <li><a onClick={props.doStuff} href='#'>Cart</a></li>
                <li><a onClick={props.doStuff} href='#'>About Us</a></li>
                <li><a onClick={props.doStuff} href='#contact-us'>Contact Us</a></li>
            </ul>
            <hr />
        </div>
    )
}

export default sidebar;