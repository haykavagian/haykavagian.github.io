import './Kids.css';
import {useState} from 'react';
import photoData from './PhotoData'
import Navbar2 from '../Navbar/Navbar2'


function Kids () {
    window.scrollTo(0, 0);
    
    const [state, setState] = useState({
        clicked: false,
        srcLarge: null,
        index: null,
        data: photoData
    })

    const handleClick = (item) => {
        setState({
            item: item,
            clicked: !clicked,
            srcLarge: item.srcLarge,
            index: item.id,
            data: photoData
        })
    }
    
    const nextImage = () => {
        
        setState(prevState => ({...prevState,index: index + 1,srcLarge:photoData[state.index+1].srcLarge,  data: photoData}))
        console.log(state.index,"next")
        if(state.index === state.data.length - 1){
            setState(prevState => ({...prevState,index: 0}))
        }         
        
    }
    const previousImage = () => {
        
        setState(prevState => ({...prevState,index: index - 1,srcLarge:photoData[state.index-1].srcLarge,  data: photoData}))
        console.log(state.index,"prev")
        if(state.index === 0){
            setState(prevState => ({...prevState,index:state.data.length - 1}))
        }         
        
    }

    const closeImage = () => {
        setState(prevState => ({...prevState,clicked: false}))
    }
    const {clicked, srcLarge, index, item} = state
    console.log(state.index)
    if(clicked){
        return(
            
        <div className="fullscreen-image">
            <img 
                id={item.id} 
                onClick={() => handleClick(item)}                   
                src={srcLarge} 
                alt="img"
            />
            <button className="next" onClick={() => nextImage()}></button>
            <button className="previous" onClick={() => previousImage()}></button>
            <button className="close" onClick={() => closeImage()}>close</button>
        </div>
        )
    }else{
        return (
            <>
            <Navbar2 />
        <div className="Kids-container">
            <div className="title"><h1>KIDS GALLERY</h1> </div>
            <div className="Kids-photos">
                    {photoData.map(item => {
                        return(
                            <div key={item.id} className={`normal gallery-item gallery-item-${item.id}`}                             >
                                <img id={item.id} onClick={() => handleClick(item)}                            
                                    src={item.srcSmall} 
                                    alt="img"
                                 />
                            </div>
                        )
                    })}
    
                </div>
        </div>
        </>
    )
    }
    
}



export default Kids;