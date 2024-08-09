'use client'
import Link from "next/link"
const NavBar = () => {

    return (
        <div className="navbar">
            <div className="navbar__left">
            <a href="/"className="navbar__left__logo">
                    Home
                </a>
            </div>
            <div className="navbar__center">
                <ul className="navbar__center__socials">
                    <li> <a href="https://github.com/dericholas" className="navbar__center__socials__icon" target="_blank">GH</a> </li>
                    <li> <a className="navbar__center__socials__icon" href="https://www.linkedin.com/in/nick-deris/" target="_blank">Linkdin</a> </li>
                </ul>
            </div>
            <div className="navbar__right">
                <ul className="navbar__right__menu">
                    <li> <a href="/about" className="navbar__right__menu__link">ABOUT</a> </li>
                    <li> <a href="/projects" className="navbar__right__menu__link">PORTFOLIO</a> </li>
                    <li> <a href="/contact" className="navbar__right__menu__link">CONTACT</a> </li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar