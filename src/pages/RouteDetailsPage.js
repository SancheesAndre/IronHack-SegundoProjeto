import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './RouteDetailsPage.css'
import Navbar from "../components/Navbar/Navbar"

const RouteDetailsPage = () => {
    const [route, setRoute] = useState([])
    const { routeId } = useParams()

    useEffect(() => {
        axios.get(`https://ironrest.herokuapp.com/abobrinha123/${routeId}`)
            .then(response => setRoute(response.data))
            .catch(error => console.log(error))
    },
        [routeId])


    return (
        <div>
            <Navbar />
            <div className="ImageCardBox">
                <img className='CardImage' src={route.imgUrl} alt="" />
            </div>
            <div className="InfoCardBox">
                <h1>{route.title}</h1>
                <h2>{route.city} - {route.country}</h2>
                <p>{route.description}</p>
            </div>
            
        </div>
    )
}

export default RouteDetailsPage