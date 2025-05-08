import { motion } from "framer-motion";
import EventImage from "/EventImage.jpg";
import BlackX from "/BlackX.png";
import RedX from "/RedX.png";

const EventsSection = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative bg-white py-20 overflow-y-visible">
      <div className="absolute inset-0 min-w-6xl z-1 hidden md:block">
        <motion.div
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: 55, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 10 }}
          className="absolute -bottom-140 -left-55 w-1/2 h-full bg-no-repeat bg-left bg-contain"
          style={{ backgroundImage: `url(${BlackX})` }}
        ></motion.div>
        <motion.div
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: -10, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 10 }}
          className="absolute -top-20 right-5 w-lg h-full bg-no-repeat bg-right bg-contain"
          style={{ backgroundImage: `url(${RedX})` }}
        ></motion.div>
      </div>

      {/* Top "Join the Experience" Link */}
      <div className="justify-center bg-white text-center relative px-4" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-16 px-6 py-2 rounded-full bg-[#D9D9D9] shadow-sm"
        >
          <h2 className="text-xl font-semibold text-[#DE8F5A]">Join the Experience</h2>
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full md:w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text and Button */}
        <motion.div className="flex-1 text-left" variants={childVariants}>
          <h2 className="text-xl font-bold text-[#F4A261] mb-8 tracking-wide">
            Attend Our Events
          </h2>
          <p className="text-2xl md:text-4xl font-medium text-gray-900 leading-tight">
            Join us at our next TEDxAlgeria event!
          </p>
          <p className="text-2xl md:text-4xl font-medium text-gray-900 mb-4 leading-tight">
            Stay inspired, connect with changemakers, and discover the power of transformative ideas
          </p>

          <motion.a
            href="/events"
            variants={childVariants}
            initial={{
              boxShadow: "0 12px 30px rgba(244, 162, 97, 0.5)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 24px 40px rgba(244, 162, 97, 0.5)",
              backgroundColor: "#F4A261",
              color: "white",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-white text-black border-2 border-[#F4A261] font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 cursor-pointer"
            aria-label="View our events"
          >
            Our Events
          </motion.a>
        </motion.div>

        {/* Image Part */}
        <motion.div
          className="relative flex-1 max-w-sm mt-12 md:mt-0" 
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src={EventImage}
            alt="TEDxAlgeria event with attendees"
            className="rounded-lg h-full shadow-xl"
            whileHover={{ rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
          {/* Yellow Square */}
          <motion.div
            className="absolute -top-10 -left-10 w-30 h-30 bg-[#F4E4A2] z-10 -translate-x-6 -translate-y-6 "
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* Orange Square */}
          <motion.div
            className="absolute -bottom-30 -right-25 w-50 h-50 bg-[#F4A261] z-10 translate-x-6 translate-y-6 "
            initial={{ rotate: 10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
         {/* Red light */}
          <motion.div
            className="absolute -bottom-10 right-58 w-60 h-60 bg-[#E63D3E] opacity-20 -z-10 translate-x-6 translate-y-6 rounded-full"
            style={{ filter: "blur(15px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Yellow light */}
          <motion.div
            className="absolute -top-20 -right-10 w-60 h-60 bg-[#EFB871] opacity-20 -z-10 translate-x-6 translate-y-6 rounded-full"
            style={{ filter: "blur(15px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventsSection;
