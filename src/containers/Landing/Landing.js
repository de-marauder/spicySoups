import { React, Component } from 'react';

import classes from './Landing.module.css';

import Img1 from '../../assets/images/Afang-soup-16.jpg';
import Img2 from '../../assets/images/egusi.jfif';
import Img3 from '../../assets/images/fufu and soup.jfif';

class Landing extends Component {

    render() {
        
        return (
            <>
                <div className={classes.Landing}>

                    <div className={classes.TitleWrapper}>
                        <h1 className={classes.Title}>Spicy <span>soups</span></h1>
                        <p>restaurant</p>
                    </div> 
                    <div className={classes.ImagesWrapper}>
                        <div className={classes.Images}>
                            <div className={classes.Img + ' ' + classes.Img1}>
                                <img src={Img1} alt='' />
                            </div>
                            <div className={classes.Img + ' ' + classes.Img2}>
                                <img src={Img2} alt='' />
                            </div>
                            <div className={classes.Img + ' ' + classes.Img3}>
                                <img src={Img3} alt='' />
                            </div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,64L120,106.7C240,149,480,235,720,261.3C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                </div>
            </>

        )
    }

}

export default Landing;