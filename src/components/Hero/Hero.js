import './Hero.css';
import noronha from '../../images/noronha.jpeg';
import cristo from '../../images/cristo.jpeg';
import stadium from '../../images/stadium.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={noronha} className="d-block w-100" alt="noronha"/>
                </div>
                <div className="carousel-item">
                    <img src={cristo} className="d-block w-100" alt="cristo"/>
                </div>
                <div className="carousel-item">
                    <img src={stadium} className="d-block w-100" alt="stadium"/>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
      </div>









        /* <div className='hero'>
            <img className='heroImage' src={noronha} alt='Noronha' />

            <div className="hero-text">

                <h1>A fim de viajar?</h1>
                <p className='placeName'>NORONHA</p>
            </div>

        </div> */
    )
}

export default Hero