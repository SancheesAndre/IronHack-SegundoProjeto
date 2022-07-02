import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import './RouteDetailsPage.css'
import Navbar from "../components/Navbar/Navbar"
import RegisterArea from "../components/RegisterArea/RegisterArea"
import Footer from "../components/Footer/Footer"
import { ImPencil } from "react-icons/im";
import Loading from '../components/Loading/Loading'


const RouteDetailsPage = () => {
    const [route, setRoute] = useState([])
    const { routeId } = useParams()
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://ironrest.herokuapp.com/IronTourDB/${routeId}`)
            .then(response => {
                setRoute(response.data)
                setRemoveLoading(true)
            })
            .catch(error => console.log(error))
    },
        [routeId])


    return (
        <div>
            <Navbar />
            { !removeLoading && <Loading />}
            <div className="ImageCardBox">
                <img className='CardImage' src={route.imgUrl} alt="route" />
            </div>
            <div className="InfoCardBox">
                <div className="content">
                    <div className='updateDiv'>
                        <Link to={`/update-route/${routeId}`} className='UpdateLink'><ImPencil size={25} /></Link>
                    </div>
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