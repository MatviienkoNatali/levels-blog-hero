import logo from "../../images/logo-levels.svg";
import React, {useState} from "react";
import * as style from "./header.module.scss";
import {Link} from "gatsby";


function Header() {
    const [activeState, setActiveState] = useState(false)
    return (
        <header className={style.header}>
            <div className={`wrap-header  ${activeState ? 'open' : ''}`}>
                <div className={"container"}>
                    <Link to={"./"}>
                        <figure className="logo">
                            <img src={logo} alt="logo"/>
                        </figure>
                    </Link>

                    <div className="search"></div>
                    <ul className={"menu"}>
                        <li><Link to={"./"}>Levels Blog</Link></li>
                        <li><Link to={"./"}>request access</Link></li>
                    </ul>
                    <button className="btn-menu" onClick={() => setActiveState(prev => !prev)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;
