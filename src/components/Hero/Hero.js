import './Hero.css';
import noronha from '../../images/noronha.jpeg';
import cristo from '../../images/cristo.jpeg';
import estadio from '../../images/stadium.jpeg';

function Hero() {

  const imgObj = [
    {name:'NORONHA', img:noronha},
    {name:'CRISTO REDENTOR', img:cristo},
    {name:'NEO QUÍMICA ARENA', img:estadio}
  ]
  
  function randomImage(arr) {
    return Math.floor(Math.random() * arr.length)    
  }
  let index = randomImage(imgObj)
  return(
    <div className='hero'>
      <img className='heroImage' src={imgObj[index].img} alt={imgObj[index].name} />

      <div className="hero-text">
        <h1>A fim de viajar?</h1>
        <p className='placeName'>{imgObj[index].name}</p>
      </div>
    </div>
  )
  
}

export default Hero