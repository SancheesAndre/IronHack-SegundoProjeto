import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar'
import RegisterArea from "../components/RegisterArea/RegisterArea"
import Footer from "../components/Footer/Footer"
import { Link } from 'react-router-dom'
import './AllRoutesPage.css'
import { useParams } from 'react-router-dom'

const AllRoutesPage = () => {
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        axios.get('https://ironrest.herokuapp.com/IronTourDB')
            .then(response => {
                setRoutes(response.data)

            })
            .catch(error => console.log(error))
    },
        [])

    function deleteCardFunc(id) {
            axios.delete(`https://ironrest.herokuapp.com/IronTourDB/${id}`)
            .then(setRoutes(routes.filter(route => route._id !== id)))
            .catch(err => console.log(err))        
    }

    return (
        <div>
            <Navbar />
            {
                routes.map(route => {
                    return (
                        <div className='container'>
                            <div key={route._id} className='RouteCard'>
                                <Link to={route._id} className='imgDiv'>
                                    <img className="imageBox" src={route.imgUrl} alt="Route" />
                                </Link>
                                <Link to={route._id} className="routeInfo">
                                    <h1>{route.title}</h1>
                                    <h2>{route.city} - {route.country}</h2>
                                    <p className='VerMais'>ver mais...</p>
                                </Link>
                                <div className="OptionsBtn">
                                    <Link to={'/update-route'} className='UpdateLink'>Editar</Link>
                                    <button className='CardBtns' onClick={() => deleteCardFunc(route._id)}><b>X</b></button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

            <RegisterArea />
            <Footer />

        </div>
    )
}

export default AllRoutesPage
