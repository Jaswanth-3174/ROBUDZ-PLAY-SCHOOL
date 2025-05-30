import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Our Programs" },
    { href: "#facilities", label: "Facilities" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-youtube", href: "#" }
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
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Footer Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-coral to-turquoise rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-rainbow text-white text-xl"></i>
              </div>
              <span className="text-2xl font-fredoka">Rainbow Kids Playschool</span>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Nurturing young minds through play-based learning, creativity, and endless adventures. Where every child's potential shines bright!
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-all duration-300"
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--coral))" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-coral transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-poppins font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-coral mr-3"></i>
                <span className="text-gray-300">62 Sriram Nagar, Amman Nagar Soorath Amman Temple Backside, Nemilicheri, Tamil Nadu 602024</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-coral mr-3"></i>
                <span className="text-gray-300">(+91) 12345-67890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-coral mr-3"></i>
                <span className="text-gray-300">hello@rainbowkids.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-coral mr-3"></i>
                <span className="text-gray-300">Mon-Fri: 7AM-6PM</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2025 Rainbow Kids Playschool. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-coral transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-coral transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-coral transition-colors duration-300">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
