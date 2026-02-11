import AboutPreview from "../components/AboutPreview/AboutPrivew"
import AcademicsOverview from "../components/AcademicOverview/AcademicOverview"
import Hero from "../components/Hero/Hero"
import InfoCards from "../components/InfoCard/InfoCard"


const Home = () => {
  return (
    <div>
     <Hero />
     <InfoCards />
     <AboutPreview />
     <AcademicsOverview />
    </div>
  )
}

export default Home
