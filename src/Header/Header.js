import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../Header/Header.module.css';
import StunningIcon from '../images/stunning-logo.png';
import HamBurgerIcon from '../images/Hamburger_icon.png.png';



const Header = () => {
    return (

        <div className={classes.TopBar}>
            <div>
                <img className={classes.logo} src={StunningIcon} alt="logo" />
            </div>
            <nav>
                <NavLink exact className={classes.NavLink} activeClassName={classes.MenuLink} to="/">Home</NavLink>
                <NavLink exact className={classes.NavLink} to="/">About</NavLink>
                <NavLink exact className={classes.NavLink} to="/">Blog</NavLink>
                <NavLink exact className={classes.NavLink} to="/">Jobs</NavLink>

            </nav>
            <div className={classes.MenuWrapper}>
                <img className={classes.HamBurgerIcon} src={HamBurgerIcon} alt="HamBurgerIcon" />
            </div>
            <button className={classes.AccountBtn}>Your Account</button>

        </div>

    )
}

export default Header;