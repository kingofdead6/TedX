import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import TedXLogo from "/TedXLogo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Discover", href: "/discover" },
  { name: "Events", href: "/events" },
  { name: "About Us", href: "/aboutus" },
];

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-black px-4 py-4"
        >
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <img src={TedXLogo} alt="Logo" className="h-auto w-48 sm:w-60" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10 text-lg font-semibold -ml-30">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group transition duration-300"
                >
                  {link.name}
                  <span className="block h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <a
                href="/contact"
                className="bg-red-600 text-white text-lg px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 px-4 pb-4 flex flex-col gap-2 border-t pt-4"
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-lg font-medium hover:text-red-600 transition-colors duration-200 "
                  >
                    {link.name}
                    <hr className="border-t border-gray-300 mt-2 hover:text-red-600" />
                  </motion.a>
                ))}

                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 bg-red-600 text-white text-center text-lg px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
