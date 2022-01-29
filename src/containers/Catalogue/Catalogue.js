import {React, Component} from 'react';

import Cards from '../../components/Cards/Cards'

import classes from './Catalogue.module.css';

class Catalogue extends Component {
    render () {
        return (
            <div className={classes.Catalogue}>
                <h1>Order Now</h1>
                <h3>What would you like to eat?</h3>
                <div className={classes.CatalogueItems}>
                    <Cards />
                </div>
            </div>
            
        )
    }
}

export default Catalogue;