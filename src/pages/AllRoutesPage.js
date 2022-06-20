import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar'
import RegisterArea from "../components/RegisterArea/RegisterArea"
import Footer from "../components/Footer/Footer"
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
                        <div className='container'>
                            <Link to={route._id} key={route._id} className='RouteCard'>
                                <div className='imgDiv'>
                                    <img className="imageBox" src={route.imgUrl} alt="Route" />
                                </div>
                                <div>
                                    <div className="routeInfo">
                                        <h1>{route.title}</h1>
                                        <h2>{route.city} - {route.country}</h2>
                                    </div>
                                </div>
                            </Link>                            
                        </div>
                    )
                })  
            }

            <RegisterArea/>
            <Footer />

        </div>
    )
}

export default AllRoutesPage
