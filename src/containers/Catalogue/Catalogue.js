import { React, Component } from 'react';

import Cards from '../../components/Cards/Cards'

import classes from './Catalogue.module.css';

class Catalogue extends Component {
    render() {
        return (
            <div id='catalogue' className={classes.Catalogue}>
                <h1>Order Now</h1>
                <h3>What would you like to eat?</h3>
                <div className={classes.CatalogueItems}>
                    <Cards />
                </div>

                {/* <svg className={classes.Curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,288L120,261.3C240,235,480,181,720,176C960,171,1200,213,1320,234.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
            </div>

        )
    }
}
// #f3f4f5
export default Catalogue;