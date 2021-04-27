import './Hero.css'
import ScrollUpButton from "react-scroll-up-button";
import ScrollUp from '../ScrollUp'


function Hero ()  {
    return(
        <div id="home"className="Hero-container">
            <div className="Hero-bg">
                <ScrollUpButton className="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled">
                </ScrollUpButton>
            </div>
        </div>
    )
}


export default Hero;