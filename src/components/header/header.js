import logo from "../../images/logo-levels.svg";
import React from "react";
import * as style from "./header.module.scss";
import {Link} from "gatsby";


function Header() {
    return (
        <header className={style.header}>
            <div className="container">
                <Link to={"./"}>
                    <figure className="logo">
                        <img src={logo} alt="logo"/>
                    </figure>
                </Link>
                <div className="search"></div>
                <ul className="menu">
                    <li><Link to={"./"}>Levels Blog</Link></li>
                    <li><Link to={"./"}>request access</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;
