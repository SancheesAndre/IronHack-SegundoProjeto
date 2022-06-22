import './Footer.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";


function Footer() {



    return (
        <div className='footer'>
            <div className='Github'>
                <a href="https://github.com/SancheesAndre" target='blank'><FaGithub size={30} /> </a>
                <a href="https://www.linkedin.com/in/asanxdev/" target='blank'><FaLinkedin size={30} /> </a>
                Andre Sanches

            </div>
            <div className='Github'>
                <a href="https://github.com/emanuel-azevedo" target='blank'><FaGithub size={30} /></a>
                <a href="https://www.linkedin.com/in/emanuelazevedo/" target='blank'><FaLinkedin size={30} /></a>
                Emanuel Azevedo
            </div>
        </div>
    )
}

export default Footer