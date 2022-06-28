import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import './RouteDetailsPage.css'
import Navbar from "../components/Navbar/Navbar"
import RegisterArea from "../components/RegisterArea/RegisterArea"
import Footer from "../components/Footer/Footer"
import { ImPencil } from "react-icons/im";

const RouteDetailsPage = () => {
    const [route, setRoute] = useState([])
    const { routeId } = useParams()

    useEffect(() => {
        axios.get(`https://ironrest.herokuapp.com/IronTourDB/${routeId}`)
            .then(response => setRoute(response.data))
            .catch(error => console.log(error))
    },
        [routeId])


    return (
        <div>
            <Navbar />
            <div className='updateDiv'>
                <Link to={`/update-route/${routeId}`} className='UpdateLink'><ImPencil size={25} /></Link>
            </div>
            <div className="ImageCardBox">
                <img className='CardImage' src={route.imgUrl} alt="route" />
            </div>
            <div className="InfoCardBox">
                <div className="content">
                    <h1>{route.title}</h1>
                    <h2>{route.city} - {route.country}</h2>
                    <h3>{route.category}</h3>
                    <p>{route.description}</p>
                </div>
            </div>
            <RegisterArea />
            <Footer />

        </div>
    )
}

export default RouteDetailsPage