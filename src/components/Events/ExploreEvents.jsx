import { motion } from "framer-motion";
import BlackX from "/BlackX.png";

const Events = () => {
  return (
    <section className="relative bg-white py-32 md:py-60 overflow-y-visible">
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 min-w-6xl z-1">
              <motion.div
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 15, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 10 }}
                className="absolute -bottom-80 right-15 w-1/3 h-full bg-no-repeat bg-left bg-contain md:block"
                style={{ backgroundImage: `url(${BlackX})` }}
              ></motion.div>
            
            </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center mt-10">
        <div className="justify-center bg-white text-center relative px-4" dir="rtl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-16 px-6 py-2 rounded-full bg-[#D9D9D9] shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#DE8F5A]">Explore Events</h2>
          </motion.div>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 10 }}
          className="text-7xl sm:text-8xl md:text-8xl font-extrabold text-black mb-6"
        >
          TED<span className="text-[#E63D3E]">x</span>Algeria Events
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
          className="text-xl sm:text-xl md:text-3xl font-medium text-black max-w-5xl mx-auto"
        >
          TEDxAlgeria is a hub for groundbreaking ideas, innovation, and thought-provoking discussions. Explore our past events that have left a mark and stay updated on upcoming editions that continue to push the boundaries of knowledge and creativity.
        </motion.p>
      </div>
    </section>
  );
};

export default Events;