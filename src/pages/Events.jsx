import ExploreEvents from '../components/Events/ExploreEvents'
import NavBar from '../components/shared/NavBar'
import UpcomingEvents from '../components/Events/UpcomingEvents'
import PastEvents from '../components/Events/PastEvents'

const Events = () => {
  return (
    <div className=" bg-white overflow-hidden">
    <NavBar />
    <ExploreEvents />
    <UpcomingEvents />
    <PastEvents />
    </div>
  )
}

export default Events