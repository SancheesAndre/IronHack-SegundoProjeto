import { Link } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import AllRoutesPage from '../../pages/AllRoutesPage'
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
                        <Link to={<HomePage />}>Home</Link>
                    </li>                
                    <li>
                        <Link to={AllRoutesPage}>Destinos</Link>
                    </li>
                </ul>  

                <button className='btn-cadastrar'>Cadastre seu destino</button>

            </div>
            
        </nav>
    )
}

export default Navbar