import { React, Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { render } from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';

import Button from '../../components/UI/Button/Button';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Sidebar from '../../components/Sidebar/Sidebar';
// import Catalogue from '../Catalogue/Catalogue';
import Home from '../../components/Home/Home';
// import Landing from '../Landing/Landing';
import Footer from '../../components/Footer/Footer';
import Cart from '../Cart';
import NotFound from '../../components/Error/NotFound';
import CartCounter from '../Cart/CartCounter';

import classes from './Site.module.css'

class Site extends Component {

    state = {
        backdrop: false,
        sideBarToggler: false,
    }

    sideBarToggler = () => {
        this.setState({ backdrop: !this.state.backdrop, sideBarToggler: !this.state.sideBarToggler })
    }

    // routes = () => {
    //     return (
    //         <>
    //             {/* < Routes> */}
    //             <Route path={'/'} exact element={<Landing />} />
    //             {/* //  </ Routes > */}
    //             {/* // < Routes> */}
    //             <Route path={'/catalogue'} exact element={<Catalogue />} />
    //             {/* // {/* </ Routes> */}
    //             {/* // < Routes> */}
    //             <Route path={'/cart'} exact element={<Cart />} />
    //             {/* // </ Routes> */}
    //             {/* // < Routes> */}
    //             <Route path={'/contact-us'} exact element={<Footer />} />
    //             {/* // </ Routes> */}
    //             {/* // <Routes> */}
    //             <Route path={'/'} element={<NotFound />} />
    //             {/* // </Routes> 4       */}
    //         </>

    //     )
    // }


    hashLinkScroll = () => {
        const { hash } = window.location;
        if (hash !== '') {
            // Push onto callback queue so it runs after the DOM is updated,
            // this is required when navigating from a different page so that
            // the element is rendered on the page before trying to getElementById.
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
            }, 0);
        }
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
        if (this.state.sideBarToggler === true) {
            sidebarStyle = {
                position: 'fixed',
                right: '0'
            }
        }
        console.log(this.props.counter)
        return (
            <div className={classes.Site}>
                <Backdrop doStuff={() => { this.sideBarToggler() }} style={backdropStyle} />
                <Button
                    class={'Menu'}
                    doStuff={() => { this.sideBarToggler() }}
                    style={{ position: 'fixed', top: '20px', right: '0' }} >
                    {(this.props.counter !== 0 && this.state.sideBarToggler === false) ?
                        <CartCounter counter={this.props.counter} style={{ left: 0 }} /> : null}
                    <h3 className={classes.h3} >{!this.state.backdrop ? 'Menu' : 'X'} </h3>
                </Button>
                <Sidebar
                    doStuff={() => { this.sideBarToggler() }}
                    cartCounter={(this.state.sideBarToggler === true) ? this.props.counter : 0}
                    style={sidebarStyle} />

                {/* <Router
                    history={browserHistory}
                    routes={routes()}
                    onUpdate={this.hashLinkScroll}
                /> */}
                < Routes>
                    <Route path={'/'} exact element={<Home />} />

                    <Route path={'/cart'} element={<Cart />} />

                    <Route path={'/*'} element={<NotFound />} />
                </Routes>
                {/* <Landing /> */}
                {/* <Catalogue /> */}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.reducer.counter)
    return {
        counter: state.reducer.counter
    }
}

export default connect(mapStateToProps)(Site);