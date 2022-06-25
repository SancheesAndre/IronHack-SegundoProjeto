import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"



const UpdateRoutePage = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        imgUrl: '',
        title: '',
        category: '',
        city: '',
        country: '',
        description: ''
    })
    const { routeId } = useParams()

    useEffect(() => {
        axios.get(`https://ironrest.herokuapp.com/IronTourDB/${routeId}`)
            .then(response => {
                delete response.data._id
                setState({ ...response.data })
            })
            .catch(error => console.log(error))
    },
        [routeId])

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.put(`https://ironrest.herokuapp.com/IronTourDB/${routeId}`, state)
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
                            value={state.category}
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
                        <button className='SubmitButton' s type='submit'>
                            Utualizar
                        </button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default UpdateRoutePage