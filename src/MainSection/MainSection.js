import React from 'react';

import classes from '../MainSection/MainSection.module.css';
import LandingStunningIcon from '../images/landing-section-image.png';
import ArrowUp from '../images/arrow-up.png';
import ArrowDown from '../images/arrow-down.png';


const MainSection = () => {
    return (

        <div className={classes.MainSection}>
           <div className={classes.ContentSection}>
            <h1 className={classes.LandingTitle}>
                Stunning <br/>
                Workplace
                <div className={classes.Dot}></div>
            </h1>
            <p className={classes.LandingPara}> 
                With Stunning, remote teams can organize projects, managing shifting priorities, and get work done.
                
            </p>
            <div className={classes.ButtonWrapper}>
            <button className={classes.NewAccountBtn}>New Account</button>
            <img  className={classes.ArrowUp} src={ArrowUp} alt="ArrowUp" />
            <img src={ArrowDown} alt="ArrowDown" />
            </div>
           </div>
           <div className={classes.LandingSectionWrapper}>           
           <img className={classes.LandingImage} src={LandingStunningIcon} alt="Landing image" />
           </div>
        </div>

    )
}

export default MainSection;