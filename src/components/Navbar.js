import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import NavbarItems from "./NavbarItems"
import './Navbar.css'
import Button from './Button';

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
    <>    
        <nav className="navbar">
            <div class="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    JONAS<FaIcons.FaAtlassian />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {NavbarItems.map((item, index) => {
                        return (
                        <li className={item.cName} key={index}>
                            <Link to={item.path} className={item.cName} onClick={closeMobileMenu}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        )
                    })}
                </ul>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </nav>
    </>    
    )
}

export default Navbar
