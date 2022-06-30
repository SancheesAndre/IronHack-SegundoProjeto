import './Hero.css';
import noronha from '../../images/noronha.jpeg';
import cristo from '../../images/cristo.jpeg';
import estadio from '../../images/stadium.jpeg';

function Hero() {

  return(
    <div className='hero'>
      <img className='heroImage' src={noronha} alt='Noronha' />

      <div className="hero-text">
        <h1>A fim de viajar?</h1>
        <p className='placeName'>NORONHA</p>
      </div>
    </div>
  )
  
}

export default Hero