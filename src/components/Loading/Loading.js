import './Loading.css'
import loading from '../../images/loadingIcon.gif'

function Loading() {
    return(
        <div>
            <img src={loading} alt='Loading' />
            <p>Aguarde...</p>
        </div>
    )
}

export default Loading