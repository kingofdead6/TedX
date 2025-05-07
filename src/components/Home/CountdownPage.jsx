import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const eventDate = new Date("2025-05-24T00:00:00");
    const now = new Date();
    const total = eventDate - now;

    const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
    const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
    const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
    const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center relative px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block mb-8 sm:mb-12 px-6 py-2 rounded-full bg-[#D9D9D9] shadow-sm "
      >
        <h2 className="text-lg sm:text-xl font-semibold text-[#DE8F5A]">Reserve your spot</h2>
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none mt-22">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(13deg,transparent_45%,#E63D3E_45%,#E63D3E_55%,transparent_55%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(167deg,transparent_45%,#E63D3E_45%,#E63D3E_55%,transparent_55%)]" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 bg-[#f2d4d983] rounded-2xl shadow-lg backdrop-blur-3xl border border-white/30 w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl">
        <p className="text-lg sm:text-xl md:text-3xl font-semibold text-[#DE8F5A] mb-4">
          Countdown to the First Edition
        </p>
        <h1 className="text-xl sm:text-2xl md:text-[50px] lg:text-[60px] font-semibold text-black mb-8 leading-tight">
          !The first edition of TEDxAlgeria is coming
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center">
          {[
            { label: "Seconds", value: timeLeft.seconds },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Hours", value: timeLeft.hours },
            { label: "Day", value: timeLeft.days },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#F4A261] text-black rounded-lg px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-8 lg:py-8 w-full"
              style={{
                borderImage: "linear-gradient(180deg, #DE8F5A 0%, #EFB871 100%) 1",
              }}
              initial={{ boxShadow: "0px 8px 64px 8px rgba(222, 143, 90, 0.6)" }}
              whileHover={{
                boxShadow: "0px 12px 80px 12px rgba(222, 143, 90, 0.75)",
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
                {item.value.toString().padStart(2, "0")}
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-3">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
