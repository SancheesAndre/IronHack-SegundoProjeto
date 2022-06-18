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
                        <a>Home</a>
                    </li>                
                    <li>
                        <a>Destinos</a>
                    </li>
                </ul>  

                <button className='btn-cadastrar'>Cadastre seu destino</button>

            </div>
            
        </nav>
    )
}

export default Navbar