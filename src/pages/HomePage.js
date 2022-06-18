import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Intro from "../components/Intro/Intro"
import MainContent from "../components/MainContent/MainContent"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Intro />
            <MainContent />
        </div>       
    )
}

export default HomePage