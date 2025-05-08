import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Events  from './pages/Events';
import AboutUs from "./pages/AboutUs";
import Discover from "./pages/Discover";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="events" element={<Events />} />
          <Route path="aboutus" element={<AboutUs />} /> 
          <Route path="discover" element={<Discover />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> 
  );
}

export default App;
