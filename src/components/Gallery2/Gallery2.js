import './Gallery2.css'
import img1 from '../../img/img (1).jpg'
import img2 from '../../img/img (2).jpg'
import img3 from '../../img/img (3).jpg'
import img4 from '../../img/img (4).jpg'
import img5 from '../../img/img (5).jpg'

function Gallery2 () {
    return (
        <div className="Gallery2">
            <ul>
                <li>
                    <span>Malibu</span>
                    <img src={img1} /></li>
                
                <li>
                    <span>San Diego</span>
                    <img src={img2} /></li>
                
                <li>
                    <span>Pasadena</span>
                    <img src={img3} /></li>
                
                <li>
                    <span>Kapan</span>
                    <img src={img4} />
                </li>
                
                <li>
                    <span>Los Angeles</span>
                    <img src={img5} />
                </li>
                </ul>
        </div>
    )
}

export default Gallery2;