import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import './AllRoutesPage.css'

const AllRoutesPage = () => {
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        axios.get('https://ironrest.herokuapp.com/abobrinha123')
            .then(response => {
                setRoutes(response.data)
                
            })
            .catch(error => console.log(error))
    }, 
    [])

    return (
        <div>
            <Navbar />
            {
                routes.map(route => {
                    return (
                        <Link to={route._id} key={route._id}>
                            <div className='RouteCard'>
                                <img className="imageBox" src={route.imgUrl} alt="Route" />
                            </div>
                            <div className="routeInfo">
                                <h1>{route.title}</h1>
                                <h2>{route.city} - {route.country}</h2>
                            </div>
                        </Link>
                    )
                })  
            }
        </div>
    )
}

export default AllRoutesPage