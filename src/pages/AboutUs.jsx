import NavBar from '../components/shared/NavBar'
import WhoWeAre from '../components/AboutUs/WhoWeAre'
import OurMission from '../components/AboutUs/OurMission'
import OurValues from '../components/AboutUs/OurValues'
import FrequentQuestions from '../components/AboutUs/FrequentQuestions'

const AboutUs = () => {
  return (
    <div className=" bg-white overflow-hidden">
    <NavBar />
    <WhoWeAre />
    <OurMission />
    <OurValues />
    <FrequentQuestions />
    </div>
  )
}

export default AboutUs ;