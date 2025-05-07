import CountdownPage from '../components/Home/CountdownPage'
import EventsSection from '../components/Home/EventsSection'
import Hero from '../components/Home/Hero'
import Numbers from '../components/Home/Numbers'
import Testimonials from '../components/Home/Testimonials'
import NavBar from '../components/shared/NavBar'

const Home = () => {
  return (
    <div className=" bg-white overflow-hidden">
      <NavBar />
      <Hero />
      <Numbers />
      <CountdownPage />
      <EventsSection />
      <Testimonials />
      
    </div>
  )
}

export default Home
