import './Navbar.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useState, useEffect } from 'react'
import hamburger from '../../img/ham.png'
import close from '../../img/close.png'

function  Navbar()  {
    const [scroll, setScroll] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    
    const handleMenuClick = () => {
        setMenuClick(!menuClick)
    }

    const handleMenuItemClick = () => {
        setMenuClick(!menuClick)
    }
    const changeBackground = () => {
        if (window.scrollY > 30) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(
            <div className={scroll ? 'Nav-container active' : 'Nav-container'}>
                <nav>
                    <h2 className={menuClick ? "active-h2" : "hidden-h2"}><Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><span>HAYK</span>  AVAGYAN</Link></h2>
                    <ul className={menuClick ? "active-menu" : "hidden-menu"}>
                    <li ><Link
                            onClick={() => handleMenuItemClick()}
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >HOME</Link></li>
                        <li><Link
                            onClick={() => handleMenuItemClick()}
                            activeClass="active"
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >GALLERY</Link></li>
                        <li><Link
                            onClick={() => handleMenuItemClick()}
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >ABOUT</Link></li>
                        <li><Link
                            onClick={() => handleMenuItemClick()}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >CONTACT</Link></li> 
                    </ul>
                    
                </nav>
                <img onClick = {() => handleMenuClick()} className="hamburger" src={menuClick ? close : hamburger} alt=""/>
            </div>
    )
}


export default Navbar;

//
{/* <li><a href="home">HOME</a></li>
                        <li><a href="gallery">GALLERY</a></li>
                        <li><a href="about">ABOUT</a></li>
                        <li><a href="contactus">CONTACT US</a></li> */}