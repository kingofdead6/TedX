import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Phone, Mail } from 'lucide-react';

// Dynamic content configuration
const contactConfig = {
  title: "Get in Touch",
  subtitle: "We look forward to connecting with you!",
  contactInfo: {
    phone: "+213 XX XXX XXXX",
    email: "contact@tedxalgeria.com"
  },
  socialMedia: {
    title: "Follow us on:",
    links: [
      { icon: <FaInstagram size={24} />, url: "#" },
      { icon: <FaFacebook size={24} />, url: "#" },
      { icon: <FaLinkedin size={24} />, url: "#" },
      { icon: <FaYoutube size={24} />, url: "#" }
    ]
  },
  formFields: {
    fullName: { label: "Full Name", required: false },
    email: { label: "Email Address", required: true },
    phoneNumber: { label: "Phone Number", required: true },
    message: { label: "Your Message", required: false }
  },
  submitButton: {
    text: "Send Message"
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add actual submission logic here if needed
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 mt-20 sm:mt-40">
      <div className="justify-center bg-white text-center relative px-4 mb-12 sm:mb-20" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8 sm:mb-16 px-4 sm:px-6 py-1 sm:py-2 rounded-full bg-[#D9D9D9] shadow-sm"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-[#DE8F5A]">Contact</h2>
        </motion.div>
      </div>
      
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row gap-8 sm:gap-20">
          {/* Left Column - Contact Info */}
          <motion.div 
            className="md:w-1/2 space-y-6 sm:space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-black mb-4 sm:mb-6">
                {contactConfig.title}
              </h1>
              <p className="text-black text-xl sm:text-3xl">
                {contactConfig.subtitle}
              </p>
            </div>
            <div className="border-1 border-black rounded-lg w-full md:w-[80%]" />

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 sm:p-3 rounded-full">
                  <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-black font-semibold text-base sm:text-lg">
                  {contactConfig.contactInfo.phone}
                </p>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 sm:p-3 rounded-full">
                  <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-black font-semibold text-base sm:text-lg">
                  {contactConfig.contactInfo.email}
                </p>
              </div>
            </div>

            <div className="border-1 border-black rounded-lg w-full md:w-[80%]" />

            <div className="">
              <p className="text-black text-xl sm:text-3xl font-medium -mt-3 sm:-mt-5 mb-3 sm:mb-4">
                {contactConfig.socialMedia.title}
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {contactConfig.socialMedia.links.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="text-red-600 hover:text-red-800"
                    whileHover={{ y: -2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-[#F3F3F3] p-4 sm:p-6 md:p-8 rounded-lg hover:shadow-xl shadow-red-600 transition duration-300 hover:scale-[1.01] sm:hover:scale-105"
            variants={itemVariants}
          >
            <div className="space-y-4 sm:space-y-6">
              {Object.entries(contactConfig.formFields).map(([fieldName, fieldConfig]) => (
                <div key={fieldName}>
                  <label htmlFor={fieldName} className="block text-black text-sm font-bold mb-1">
                    {fieldConfig.label}
                    {fieldConfig.required && <span className="text-red-500">*</span>}
                  </label>
                  {fieldName === 'message' ? (
                    <textarea
                      id={fieldName}
                      name={fieldName}
                      value={formData[fieldName]}
                      onChange={handleChange}
                      className="w-full p-2 sm:p-3 border border-gray-300 rounded bg-white placeholder-[#8D8D8D] font-bold focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                      rows="4"
                      placeholder={fieldConfig.label}
                      required={fieldConfig.required}
                    />
                  ) : (
                    <input
                      type={fieldName === 'email' ? 'email' : fieldName === 'phoneNumber' ? 'tel' : 'text'}
                      id={fieldName}
                      name={fieldName}
                      value={formData[fieldName]}
                      onChange={handleChange}
                      className="w-full p-2 sm:p-3 border border-gray-300 rounded bg-white placeholder-[#8D8D8D] font-bold focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                      placeholder={fieldConfig.label}
                      required={fieldConfig.required}
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                className="cursor-pointer w-full rounded-full bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 hover:bg-red-700 transition font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {contactConfig.submitButton.text}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}