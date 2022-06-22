import axios from 'axios'
import { useState } from 'react'
import Navbar from "../components/Navbar/Navbar"
import { useNavigate } from 'react-router-dom'
import './NewRoutePage.css'
import Footer from './../components/Footer/Footer'

const NewRoutePage = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        imgUrl: '',
        title: '',
        category: '',
        city: '',
        country: '',
        description: ''
    })

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('https://ironrest.herokuapp.com/IronTourDB', state)
            .then(() => navigate('/routes'))
            .catch(error => console.log(error))
    }



    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="NewRouteCard">
                    <div className='Label'>
                        <label>Url da Imagem: </label>
                        <input
                            type="text"
                            name='imgUrl'
                            value={state.imgUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='Label'>
                        <label>Titulo do Destino: </label>
                        <input
                            type="text"
                            name='title'
                            value={state.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='Label'>
                        <label >Categoria do Destino</label>
                        <select
                            name="category"
                            id="category"
                            onChange={handleChange}
                        >
                            <option value=""></option>
                            <option value="Natureza">Natureza</option>
                            <option value="Urbano">Urbano</option>
                            <option value="Cultural">Cultural</option>
                        </select>
                    </div>
                    <div className='Label'>
                        <label>Cidade do Destino </label>
                        <input
                            type="text"
                            name='city'
                            value={state.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='Label'>
                        <label>País do Destino</label>
                        <input
                            type="text"
                            name='country'
                            value={state.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='Label'>
                        <label>Descrição do Destino</label>
                        <textarea
                            type="text"
                            name='description'
                            value={state.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='SubmitButton'>
                        <button className='SubmitButton's type='submit'>
                            Cadastrar
                        </button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default NewRoutePage