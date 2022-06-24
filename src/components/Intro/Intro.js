import './Intro.css'
import { Link } from 'react-router-dom'

function Intro() {
    return(
        <div className='Intro'>
            <h2>
                Veja mais destinos
            </h2>
            <p> Que tal programar aquela viagem de férias que você sempre sonhou em fazer conhecendo os lugares mais incríveis do seu destino?!
            Conheça os melhores roteiros para praias, cachoeiras e lugares históricos!</p>
            <button className='btn-destinos'><Link to={'/routes'}>Destinos</Link></button>
        </div>
    )
}

export default Intro