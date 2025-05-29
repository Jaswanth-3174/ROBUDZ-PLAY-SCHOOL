import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#facilities", label: "Facilities" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-purple-500/95 to-pink-500/95 backdrop-blur-md shadow-xl' : 'bg-gradient-to-r from-blue-500/95 to-purple-600/95 backdrop-blur-md shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <i className="fas fa-rainbow text-white text-xl"></i>
              </div>
              <span className="ml-3 text-2xl font-fredoka text-white">Rainbow Kids</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-white/90 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => handleNavClick("#enroll")}
                  className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-coral focus:outline-none focus:text-coral transition-colors duration-300"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl md:hidden z-50 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="pt-16 px-6 space-y-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-foreground hover:text-coral"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left text-foreground hover:text-coral transition-colors duration-300 py-2"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#enroll")}
            className="block w-full bg-gradient-to-r from-coral to-turquoise text-white px-6 py-3 rounded-full text-center mt-4 hover:shadow-lg transition-all duration-300"
          >
            Enroll Now
          </button>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
