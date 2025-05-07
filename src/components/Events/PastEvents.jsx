import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import BlackX from "/BlackX.png";

const pastEvent = {
  id: 1,
  title: "TEDxUniversity of Algiers 2024",
  description: "From powerful talks to unforgettable moments, TEDxAlgeria’s past events have sparked change, and inspired thousands. Take a look back at the highlights, speakers, and moments that shaped our journey.",
  date: "April 6, 2024",
  location: "Marriott Hotel Bab Ezzouar, Algiers",
  image: "/TedX2024.jpg",
  quote: "Inspiring Youth for a Brighter Future"
};

const PastEvents = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative X for desktop */}
      <div className="absolute inset-0 z-1 hidden md:block">
        <motion.div
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: 25, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 10 }}
          className="absolute top-50 left-75 w-1/3 h-full bg-no-repeat bg-left bg-contain"
          style={{ backgroundImage: `url(${BlackX})` }}
        />
      </div>

      {/* Section Header */}
      <div className="justify-center text-center relative px-4 py-20" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-10 px-6 py-2 rounded-full bg-[#D9D9D9] shadow-sm"
        >
          <h2 className="text-xl font-semibold text-[#DE8F5A]">Past Events</h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col-reverse md:flex-row">
        {/* Image Block */}
        <div className="w-full md:w-1/2 p-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50, damping: 10 }}
            className="mb-10"
          >
            <Link to={`/events/${pastEvent.id}`} className="block relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-500 w-full md:w-xl md:ml-20">
              <img
                src={pastEvent.image}
                alt={pastEvent.title}
                className="w-full h-60 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70 group-hover:opacity-900 transition-opacity duration-500 flex flex-col justify-end">
                <div className="relative z-10 text-white p-4">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white max-w-md ml-4 mb-2">
                    "{pastEvent.quote}"
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Description Block */}
        <div className="w-full md:w-1/2 pt-3 md:-ml-10 mb-8 flex flex-col justify-between">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
            className="flex flex-col space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-black">{pastEvent.title}</h2>
            <p className="text-base md:text-xl font-medium text-black max-w-lg mb-4">
              {pastEvent.description}
            </p>
            <div className="flex flex-col space-y-2">
              <p className="text-md font-bold flex items-center gap-1 mb-4">
                <FaCalendar className="w-5 h-5 text-[#EB0028] mr-2" /> {pastEvent.date}
              </p>
              <p className="text-md font-bold flex items-center gap-1">
                <FaMapMarkerAlt className="w-5 h-5 text-[#EB0028] mr-2" /> {pastEvent.location}
              </p>
            </div>
            <div className="hidden md:flex justify-end">
            <Link to={`/events/${pastEvent.id}`}>
                <motion.button
                  initial={{
                    boxShadow: "0 12px 30px rgba(244, 162, 97, 0.5)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 24px 40px rgba(244, 162, 97, 0.6)",
                    backgroundColor: "#F4A261",
                    color: "white",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-1 rounded-full bg-white text-black border-2 border-[#F4A261] font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 cursor-pointer"
                  aria-label="View our events"
                >
                  More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
