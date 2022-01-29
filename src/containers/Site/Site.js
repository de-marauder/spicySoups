import { React, Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Sidebar from '../../components/Sidebar/Sidebar';
import Catalogue from '../Catalogue/Catalogue';
import Landing from '../Landing/Landing';

import classes from './Site.module.css'

class Site extends Component {

    state = {
        backdrop: false,
        menuToggler: false,
    }

    menuToggler = () => {
        this.setState({ backdrop: !this.state.backdrop, menuToggler: !this.state.menuToggler })
    }

    render() {
        let backdropStyle;
        let sidebarStyle
        if (this.state.backdrop === false) {
            backdropStyle = {
                display: 'none'
            }
        } else {
            backdropStyle = {}
        }
        if (this.state.menuToggler===true) {
            sidebarStyle = {
                position: 'fixed',
                right: '0'
            }
        }
        return (
            <div className={classes.Site}>
                <Backdrop doStuff={() => { this.menuToggler() }} style={backdropStyle} />
                <Button doStuff={() => { this.menuToggler() }} style={{ position: 'fixed', top: '20px', right: '0' }}>
                    <h3 className={classes.h3} style={{ left: '0.5em' }}>{!this.state.backdrop ? 'Menu' : 'X'} </h3>
                </Button>
                <Sidebar style={sidebarStyle} />

                <Landing />
                <Catalogue />
            </div>
        )
    }
}

export default Site;