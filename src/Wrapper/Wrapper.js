import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Gallery from '../components/Gallery/Gallery'
import Space1 from '../components/Spaces/Space1'
import About from '../components/About/About'
import Gallery2 from '../components/Gallery2/Gallery2'
import Space2 from '../components/Spaces/Space2'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import {useEffect} from 'react'




function Wrapper(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
        <Navbar />
        <Hero />     
        <Gallery />
        <Space1 />
        <About />
        <Gallery2 />
        <Space2 />
        <Contact />
        <Footer />
        </>
    )
}

export default Wrapper