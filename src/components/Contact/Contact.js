import './Contact.css';
import {SiGooglemaps} from 'react-icons/si'
import {FaPhoneVolume} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'


function Contact() {
    return (
        <div className="Contact-container" id="contact">
            <div className="Title">
                <h1>CONTACT</h1>
            </div>
            <div className="Details">
                <div className="Detail-title">We'd love to help you</div>
                <div className="Detail-body">
                <div className="Input">
                    <input placeholder="Your Name" type="Your Name"/>
                    <input placeholder="Email" type="Email"/>
                    <input placeholder="Message" type="Message" className="Message"/>
                    <button>Send</button>
                </div>
                <div className="Info">
                    <div className="Address"><span>302 Elmwood Str, Burbank, CA 91502</span></div>
                    <div className="Phone"><span>(747)-206-75-74</span></div>
                    <div className="Email"><span>hayk@haykavagyan.com</span> </div>
                    <div className="Social-network"><i><FiFacebook size='1.5em' /></i><i><FaInstagram size='1.5em' /></i> </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}



export default Contact;