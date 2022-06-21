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
    const { routeId } = useParams()

    useEffect(() => {
        axios.get('https://ironrest.herokuapp.com/IronTourDB')
            .then(response => {
                setRoutes(response.data)

            })
            .catch(error => console.log(error))
    },
        [])

    const DeleteCardFunc = (id) => {
        useEffect(() => {
            axios.delete(`https://ironrest.herokuapp.com/IronTourDB/${routeId}`)
        }, []);
    }
    
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
                                <div className="routeInfo">
                                    <h1>{route.title}</h1>
                                    <h2>{route.city} - {route.country}</h2>
                                </div>
                                <div className="OptionsBtn">
                                    <Link to={'/update-route'} className='UpdateLink'>✏️</Link>
                                    <button className='CardBtns' onClick={() => DeleteCardFunc(route._id)}>X</button>
                                </div>
                            </Link>

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
