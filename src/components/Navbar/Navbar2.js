import './Navbar2.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import hamburger from '../../img/ham.png'


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
                    <h2><Link to='/'><span className="hayk">HAYK</span> <span className="avagyan">AVAGYAN</span> </Link></h2>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/'>EVENTS</Link></li>
                        <li><Link to='/'>PORTRAITS</Link></li>
                        <li><Link to='/'>MATERNITY</Link></li>
                        <li><Link to='/'>DETAILS</Link></li>                    
                    </ul>
                    <img className="hamburger" src={hamburger} alt=""/>
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