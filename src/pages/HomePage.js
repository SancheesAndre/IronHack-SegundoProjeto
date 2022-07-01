import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Intro from "../components/Intro/Intro"
import MainContent from "../components/MainContent/MainContent"
import RegisterArea from "../components/RegisterArea/RegisterArea"
import Footer from "../components/Footer/Footer"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Intro />
            <MainContent />
            <RegisterArea />
            <Footer />
        </div>
    )
}

export default HomePage