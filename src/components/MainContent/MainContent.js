import './MainContent.css'
import natureza from '../../images/natureza.jpg'
import cultural from '../../images/cultural.jpeg'
import urbano from '../../images/urbano.jpeg'

function MainContent() {
    return(
        <div className='main'>

            <div className='leftCard'>
                <img className='imgMainContent' src={natureza} alt='natureza'/>
                <div className='mainText'>
                    <h2>
                        Natureza
                    </h2>
                    <p>Veja os locais mais incríveis para se conectar com a natureza!</p>
                </div>
            </div>

            <div className='rightCard'>
                <div className='mainText'>
                    <h2>
                        Cultural
                    </h2>
                    <p>Vivencie momentos inesquecíveis em locais que ficaram marcados na história.</p>
                </div>
                <img className='imgMainContent' src={cultural} alt='cultural'/>
            </div>


            <div className='leftCard'>
                <img className='imgMainContent' src={urbano} alt='urbano'/>
                <div className='mainText'>
                    <h2>
                        Urbano
                    </h2>
                    <p>Conheça os principais destinos para turismo urbano.</p>
                </div>
            </div>

        </div>
    )
}

export default MainContent