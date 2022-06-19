import axios from 'axios'
import { useState } from 'react'
import Navbar from "../components/Navbar/Navbar"

const NewRoutePage = () => {
    const [imgUrl, setImgUrl] = useState('')
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
                            value={imgUrl}
                            onChange={e => setImgUrl(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Titulo do Destino: </label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Categoria do Destino</label>
                        <input
                            type="text"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Cidade do Destino </label>
                        <input
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>País do Destino</label>
                        <input
                            type="text"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Descrição do Destino</label>
                        <input
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
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