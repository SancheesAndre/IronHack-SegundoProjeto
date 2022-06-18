import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    return(
        <nav>
            <div className='logo'>
                IronTour Advisor
            </div>

            <div className='menu'>
            
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>                
                    <li>
                        <Link to={'/routes'}>Destinos</Link>
                    </li>
                </ul>  

                <button className='btn-cadastrar'><Link to={'/new-route'} >Cadastre seu destino</Link></button>

            </div>
            
        </nav>
    )
}

export default Navbar