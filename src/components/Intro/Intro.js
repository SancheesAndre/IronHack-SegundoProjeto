import './Intro.css'
import { Link } from 'react-router-dom'

function Intro() {
    return(
        <div className='Intro'>
            <h2>
                Veja mais Destinos
            </h2>
            <p>Descubra os melhores roteiros para praias, cachoeiras e lugares históricos!</p>
            <button className='btn-destinos'><Link to={'/routes'}>Destinos</Link></button>
        </div>
    )
}

export default Intro