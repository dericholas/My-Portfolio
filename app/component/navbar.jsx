'use client'
import Link from "next/link"
const NavBar = () => {

    return (
        <div className="navbar">
            <img className="navbar__home"/>
            <ul className="navbar__menu">
                <li> <Link href="/about" className="navbar__menu__link">ABOUT</Link> </li>
                <li> <Link href="/projects" className="navbar__menu__link">PORTFOLIO</Link> </li>
                <li> <Link href="/contact" className="navbar__menu__link">CONTACT</Link> </li>
            </ul>
        </div>
    )
}
export default NavBar