import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Events  from './pages/Events';
import AboutUs from "./pages/AboutUs";
import Discover from "./pages/Discover";

function App() {
  
  return (
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="events" element={<Events />} />
          <Route path="aboutus" element={<AboutUs />} /> 
          <Route path="discover" element={<Discover />} />
        </Routes>
      </Router> 
  );
}

export default App;
