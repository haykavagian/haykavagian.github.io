import './About.css';
import img1 from '../../img/hayk.jpg'


function About() {
    return(
        <div id="about" className="Container">
            <div className="Box1">
                <img src={img1} alt=""/>
            </div>
            <div className="Box2">
                <h2>What about us</h2>
                <p>Hell of mixtape kogi yr, neutra beard green juice activated charcoal pork belly microdosing man braid poke dreamcatcher sartorial celiac. Hammock hella mixtape godard locavore fanny pack. 

                    Forage live-edge normcore, keytar synth neutra squid vaporware tousled cred pug taxidermy. Yuccie shoreditch narwhal truffaut yr stumptown squid ugh everyday carry migas. Man braid meh unicorn snackwave man bun. Normcore bushwick, migas swag skateboard coloring book you probably haven’t heard of them.
</p>
            </div>
          
        </div>
    )
}


export default About;