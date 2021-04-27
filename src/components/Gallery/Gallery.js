import './Gallery.css'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import {Link} from 'react-router-dom'


function Gallery ()  {
    return(
        <div id="gallery" className="Gallery-container">
            <div className="Heading">
                <h1><span>Gallery</span><p>WHAT WE HAVE DONE SO FAR</p></h1>
            </div>

            <div className="Photo-gallery">
                <Link to="/kids" className="Photo-item-1">
                    <img  className="img"></img>
                    <div className="Overlay2"></div>
                        <div className="text">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2>KIDS</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                </Link>                
                <div className="Photo-item-1">
                    <img  className="img2"></img>
                    <div className="Overlay2"></div>
                        <div className="text">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2>EVENTS</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                </div>                
                <div className="Photo-item-1">
                    <img  className="img3"></img>
                    <div className="Overlay2"></div>
                        <div className="text">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2>PORTRAITS</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                </div>                
                <div className="Photo-item-1">
                    <img  className="img4"></img>
                    <div className="Overlay2"></div>
                        <div className="text">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2>MATERNITY</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                </div>                
                <div className="Photo-item-1">
                    <img className="img5"></img>
                    <div className="Overlay2"></div>
                        <div className="text">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2>PRODUCT</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                </div>                
                
            </div>
        </div>
    )
}


export default Gallery;


{/* <div className="Photo-item-2">
                    <div className="Gallery-info">
                        <h2>KIDS PHOTOGRAPHY</h2>
                        <p>View Gallery</p>
                    </div>
                </div>
                <div className="Photo-item-3">
                    <div className="Gallery-info">
                        <h2>KIDS PHOTOGRAPHY</h2>
                        <p>View Gallery</p>
                    </div>
                </div>
                <div className="Photo-item-4">
                    <div className="Gallery-info">
                        <h2>KIDS PHOTOGRAPHY</h2>
                        <p>View Gallery</p>
                    </div>
                </div>
                <div className="Photo-item-5">
                    <div className="Gallery-info">
                        <h2>KIDS PHOTOGRAPHY</h2>
                        <p>View Gallery</p>
                    </div>
                </div> */}