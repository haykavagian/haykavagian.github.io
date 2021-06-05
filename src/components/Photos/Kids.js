import './Kids.css';
import {useState} from 'react';
import photoData from './PhotoData'
import Navbar2 from '../Navbar/Navbar2'


function Kids () {
    
    window.scrollTo(0, 0);
    
    const [state, setState] = useState({
        clicked: false,
        // srcLarge: photoData[0],
        // index: null,
        // data: photoData,

    })
    const handleClick = (item) => {
        setState({
            clicked: !clicked,
            item: item,         
            srcLarge: item.srcLarge,
            index: item.id,
            data: photoData
        })
        
    }
    
    const nextImage = () => {
        if(index === 33){
            setState(prevState => ({
                ...prevState,
                index:0,
                srcLarge: photoData[index - 1].srcLarge,
            }))
        }else{
            setState(prevState => ({
            ...prevState,
            srcLarge: photoData[index + 1].srcLarge,
            index: index + 1
          }))}
          
    }

    // const nextImage = () => {  
    //     if(state.index === state.data.length - 1){
    //         setState(prevState => ({...prevState,index: 0}))
    //     }
    //     else if(
    //         state.index === 33
    //         ){
    //             setState(prevState => ({...prevState,index: 0}))
    //         }
    //         else{
    //         setState(prevState => ({
    //             ...prevState,
    //             index: index + 1,
    //             srcLarge:photoData[state.index].srcLarge,  
    //             data: photoData
    //         }))
    
    //         console.log(state.index,"next")
    //     }         
        
    // }
    const previousImage = () => { 
        if(state.index === 1){
            setState(prevState => ({
                ...prevState,
                index:33,
                srcLarge:photoData[state.index - 1].srcLarge,}))
        } else{
            setState(prevState => ({
            ...prevState,
            index: index - 1,
            srcLarge:photoData[state.index - 1].srcLarge,  
        }))}          
        


             
        
    }

    const closeImage = () => {
        setState(prevState => ({...prevState,clicked: false}))
    }

    const {clicked, srcLarge, index, item} = state


    if(clicked){
        console.log('render')
        return(
            
        <div className="fullscreen-image">
            <img 
                id={item.id} 
                onClick={() => handleClick(item)}                   
                src={srcLarge} 
                alt="img"
            />
            {/* {index} */}
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
                <div className="title"><h1>KIDS</h1> </div>
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