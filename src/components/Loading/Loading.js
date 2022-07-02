import './Loading.css'
import loading from '../../images/loadingIcon.gif'

function Loading() {
    return(
        <div className='loaderContainer'>
            <img className='loader' src={loading} alt='Loading' />
            <p>Aguarde...</p>
        </div>
    )
}

export default Loading