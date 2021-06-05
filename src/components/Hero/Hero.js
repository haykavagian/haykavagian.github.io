import './Hero.css'
import ScrollUpButton from "react-scroll-up-button";
import ScrollUp from '../ScrollUp';
import { useState } from 'react';
import up from '../../img/plus.svg'
import img from '../../img/up-3.png'

function Hero ()  {
    const [scrolled, setScrolled] = useState(false)

    const handleUpButton = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const upButton =() => {
        if(window.scrollY > 50){
        setScrolled(true)
    }else {
        setScrolled(false)
    }
}

    window.addEventListener('scroll', upButton)

    return(
        <div id="home"className="Hero-container">
            <div className="Hero-bg">
                
                <div className={scrolled ? "up-button" : "hidden-button"}><div  onClick={() => handleUpButton()}><img className="up-arrow" src={img} alt=""/></div></div>
                {/* <ScrollUpButton style={{'color': "red"}} className="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled">
                </ScrollUpButton> */}
            </div>
        </div>
    )
}


export default Hero;