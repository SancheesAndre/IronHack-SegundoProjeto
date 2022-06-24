import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    return(
        <nav>
            
            <Link to={'/'} className='logo'>
                IronTour Advisor
            </Link>

            <div className='menu'>
            
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>                
                    <li>
                        <Link to={'/routes'}>Destinos</Link>
                    </li>
                </ul>  

                <Link to={'/new-route'}><button className='btn-cadastrar'>Cadastre seu destino</button></Link>

            </div>
            
        </nav>
    )
}

export default Navbar