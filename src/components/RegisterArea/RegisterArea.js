import './RegisterArea.css'
import { Link } from 'react-router-dom'

function RegisterArea() {
    return (
        <div className='RegisterArea'>
            <h2>Cadastre seu destino</h2>
            <p>Conhece algum ponto turístico? Compartilhe com a gente!</p>
            <button className='btn-destinos'><Link to={'/new-route'}>Cadastrar</Link></button>
        </div>
    )
}

export default RegisterArea