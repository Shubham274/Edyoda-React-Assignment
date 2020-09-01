import React from 'react';
import classes from '../FinalSection/FinalSection.module.css';
import TickGray from '../images/tick-gray.png';
import TickBlue from '../images/tick-blue.png';
import PinkUser from '../images/user-pink.png';
import OrangeUser from '../images/user-orange.png';
import BlueUser from '../images/user-blue.png';
import RedUser from '../images/user-red.png';


const FinalSection = () => {
    return (

        <div className={classes.FinalSection}>
            <div>
                <div className={classes.Designdata}>
                    <img src={TickGray} alt="Grey tick icon" />
                    <span className={classes.BoxPara}>Dmm design</span>
                    <img src={PinkUser} alt="Pink User" />
                    <span className={classes.GreySpan}>20 Dec</span>
                    <div className={[classes.Box, classes.PinkColor].join(' ')}></div>
                </div>
                <div className={[classes.Designdata, classes.WhiteBox].join(' ')}>
                    <img src={TickBlue} alt="Buue tick icon" />
                    <span className={classes.BoxPara}>Blurr animation</span>
                    <img src={OrangeUser} alt="Orange User" />
                    <span className={classes.GreySpan}>22 Dec</span>
                    <div className={[classes.Box, classes.OrangeColor].join(' ')}></div>
                </div>
                <div className={classes.Designdata}>
                    <img src={TickGray} alt="Grey tick icon" />
                    <span className={classes.BoxPara}>Illustration</span>
                    <img src={BlueUser} alt="Blue User" />
                    <span className={classes.GreySpan}>26 Dec</span>
                    <div className={[classes.Box, classes.BlueColor].join(' ')}></div>
                </div>
                <div className={classes.Designdata}>
                    <img src={TickGray} alt="Grey tick icon" />
                    <span className={classes.BoxPara}>Refunds</span>
                    <img src={RedUser} alt="Red User" />
                    <span className={classes.GreySpan}>28 Dec</span>
                    <div className={[classes.Box, classes.RedColor].join(' ')}></div>
                </div>
            </div>
        </div>

    )
}

export default FinalSection;