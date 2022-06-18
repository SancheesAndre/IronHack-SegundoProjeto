import './Hero.css'
import noronha from '../../images/noronha.jpeg'

function Hero() {
    return(
        <div className='hero'>

            <div className="hero-text">
                <img className='heroImage' src={noronha} alt='Noronha'/>
                <h1>A fim de viajar?</h1>
                <p>NORONHA</p>                   
            </div>
        </div>
    )
}

export default Hero