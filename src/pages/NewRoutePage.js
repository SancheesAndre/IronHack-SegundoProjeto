import axios from 'axios'
import { useState } from 'react'
import Navbar from "../components/Navbar/Navbar"

const NewRoutePage = () => {
    /* const [imgUrl, setImgUrl] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const body = {
            imgUrl: imgUrl,
            title: title,
            category: category,
            city: city,
            country: country,
            description: description
        }
        axios.post('https://ironrest.herokuapp.com/abobrinha123', body)
            .then(alert('O novo Destino foi adicionado!'))
            .catch(error => console.log(error)) */

    const [ state, setState ] = useState({
        imgUrl: '',
        title: '',
        category: '',
        city: '',
        country: '',
        description: ''})

    function handleChange(e) {
        setState({...state, [e.target.name] : e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('https://ironrest.herokuapp.com/abobrinha123', state)
        .then(alert('O novo Destino foi adicionado!'))
        .catch(error => console.log(error))
    }



        return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="NewRouteCard">
                    <div>
                        <label>Url da Imagem: </label>
                        <input
                            type="text"
                            name='imgUrl'
                            value={state.imgUrl}
                            // value={imgUrl}
                            // onChange={e => setImgUrl(e.target.value)}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Titulo do Destino: </label>
                        <input
                            type="text"
                            name= 'title'
                            value={state.title}
                            // value={title}
                            // onChange={e => setTitle(e.target.value)}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Categoria do Destino</label>
                        <input
                            type="text"
                            name='category'
                            value={state.category}
                            // value={category}
                            // onChange={e => setCategory(e.target.value)}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Cidade do Destino </label>
                        <input
                            type="text"
                            name='city'
                            value={state.city}
                            // value={city}
                            // onChange={e => setCity(e.target.value)}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>País do Destino</label>
                        <input
                            type="text"
                            name='country'
                            value={state.country}
                            // value={country}
                            // onChange={e => setCountry(e.target.value)}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Descrição do Destino</label>
                        <input
                            type="text"
                            name='description'
                            value={state.description}
                            // value={description}
                            // onChange={e => setDescription(e.target.value)}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='SubmitButton'>
                    <button type='submit'>
                        Cadastrar
                    </button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default NewRoutePage