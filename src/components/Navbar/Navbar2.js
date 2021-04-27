import './Navbar2.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useState, useEffect } from 'react'


function  Navbar()  {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 30) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(
            <div className={navbar ? 'Nav-container2 active2' : 'Nav-container2'}>
                <nav>
                    <h2><Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><span>HAYK</span>  AVAGYAN</Link></h2>
                    <ul>
                    <li><Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >HOME</Link></li>
                        <li><Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >EVENTS</Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >PORTRAITS</Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >MATERNITY</Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >PRODUCT</Link>
                        </li>
                        
                        
                        
                        
                        
                   
                    </ul>
                </nav>
            </div>
    )
}


export default Navbar;

//
{/* <li><a href="home">HOME</a></li>
                        <li><a href="gallery">GALLERY</a></li>
                        <li><a href="about">ABOUT</a></li>
                        <li><a href="contactus">CONTACT US</a></li> */}