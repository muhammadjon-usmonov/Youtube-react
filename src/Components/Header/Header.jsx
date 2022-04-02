import React, { useState , useRef } from "react";
import './Header.scss';

import {NavLink} from "react-router-dom";

import burger from '..//../Assets/Images/svg/Hamburger.svg';
import headerLogo from '..//../Assets/Images/svg/Logo.svg';

import { Link } from "react-router-dom";


function Header (){
    const [click, setClick] = useState(false);
    const HamburgerClick = useRef()
    const BurgerOn = useRef()
    const BurgerStop = useRef()

    return(
        <>
            <header className="header">
               <div className="header__top">
                <img src={burger} ref={BurgerStop}  onClick={()=>{
                        HamburgerClick.current.style.marginLeft = "-200px"
                        BurgerOn.current.style.display = "block"
                        BurgerStop.current.style.display = "none"
                    }} alt="" />
                       <img src={burger} ref={BurgerOn} className="onBurger" onClick={()=>{
                        HamburgerClick.current.style.marginLeft = "0px"
                        BurgerOn.current.style.display = "none"
                        BurgerStop.current.style.display = "block"
                    }} alt="" />
                    <a className="header__logo__link"  href="#link">
                        <img  src={headerLogo} alt="" />
                    </a>
                </div>

                <div className="header__center" ref={HamburgerClick}>
                <ul className="header__list">
                        <li className="header__item">
                            <NavLink  className="header__link" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className="header__link" to="/channel">
                                Trending
                            </NavLink>
                        </li>
                    <li className="header__item">
                        <NavLink className="header__link" to="/subscription">
                                Subscriptions
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to={""}>
                                Library
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to={""}>
                        History
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to={""}>
                        Watch later
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to={""}>
                        Favourites
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to={""}>
                                Liked videos
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to={""}>
                        Music
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to={""}>
                        Games
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#link" onClick={()=>{setClick(!click)}}>
                                Show more
                        </a>
                    </li>
                    </ul>

                <div className={click && "header__bottom__show"}>
                        <p className="header__title">
                            Subscriptions
                        </p>

                        <ul className="header__bottom__list" >
                            <li className="header__bottom__item">
                            <Link className="header__bottom__link" to={"/channel"}>
                                    Gussie Singleton
                                </Link>
                            </li>
                            <li className="header__bottom__item">
                                <Link className="header__bottom__link" to={"/channel"}>
                                    Nora Francis
                                </Link>
                            </li>
                            <li className="header__bottom__item">
                                <Link className="header__bottom__link" to={"/channel"}>
                                    Belle Briggs
                                </Link>
                            </li>
                            <li className="header__bottom__item">
                                <Link className="header__bottom__link" to={"/channel"}>
                                    Eunice Cortez
                                </Link>
                            </li>
                            <li className="header__bottom__item">
                                <Link className="header__bottom__link" to={"/channel"}>
                                    Emma Hanson
                                </Link>
                            </li>
                            <li className="header__bottom__item">
                                <Link className="header__bottom__link" to={"/channel"}>
                                    Leah Berry
                                </Link>
                            </li>
                        </ul>
                </div>

                        <a className="header__setting"  href="#link">
                            Setting
                        </a>
               </div>
            </header>
        </>
    )
}

export default Header;