import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RedX from "/RedX.png";
import BlackX from "/BlackX.png";

const faqs = [
  {
    question: "What is TEDxAlgeria?",
    answer: "TEDxAlgeria is a project that organizes TEDx events across different institutions and cities in Algeria, featuring speakers, performers, and innovators who share valuable insights and ideas.",
  },
  {
    question: "How can I attend a TEDxAlgeria event?",
    answer: "To attend a TEDxAlgeria event, you can check the official TEDxAlgeria website or social media pages for upcoming events and registration details.",
  },
  {
    question: "Who can speak at a TEDxAlgeria event?",
    answer: "Anyone with a unique idea or story can apply to speak at a TEDxAlgeria event. The selection process typically involves submitting an application or pitch to the event organizers.",
  },
  {
    question: "Are TEDxAlgeria events free to attend?",
    answer: "Some TEDxAlgeria events may be free, while others might require a ticket purchase. It depends on the specific event, so check the event details for more information.",
  },
];

const FrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 px-4">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 10 }}
          className="absolute top-40 -left-80 w-1/3 h-full bg-no-repeat bg-left bg-contain md:block"
          style={{ backgroundImage: `url(${RedX})` }}
        ></motion.div>
        <motion.div
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: 80, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50, damping: 10 }}
          className="absolute top-20 -right-40 w-1/4 h-full bg-no-repeat bg-left bg-contain md:block"
          style={{ backgroundImage: `url(${BlackX})` }}
        ></motion.div>
      </div>
      <div className="container mx-auto px-4 text-center mt-10 relative z-10">
        <div className="justify-center text-center relative px-4" dir="rtl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-16 px-6 py-2 rounded-full bg-[#D9D9D9] shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#DE8F5A]">Get to know us</h2>
          </motion.div>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#DE8F5A] rounded-lg bg-[#D9D9D947] transition-all duration-300"
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-2xl font-bold text-black">{faq.question}</h3>
                <motion.span
                  className="text-[#EB0028] text-6xl font-extrabold"
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openIndex === index ? 'X' : '+'}
                </motion.span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-[#D9D9D947] text-black">
                      <p className="text-lg">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;