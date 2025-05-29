import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToEnroll = () => {
    const element = document.querySelector("#enroll");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-sunny/30 blob-shape"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-32 right-20 w-16 h-16 bg-purple-pink/30 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/20 blob-shape"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-10 w-12 h-12 bg-mint/40 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-fredoka text-white mb-6 text-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where Learning Meets <span className="text-sunny">Fun!</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to Rainbow Kids Playschool - nurturing young minds through play-based learning, creativity, and endless adventures!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                onClick={handleScrollToEnroll}
                className="bg-white text-coral px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-child mr-2"></i> Enroll Your Child
              </motion.button>
              <motion.button 
                onClick={handleScrollToAbout}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-coral transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play mr-2"></i> Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Children playing in colorful playground" 
              className="rounded-3xl shadow-2xl w-full h-auto"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating Achievement Cards */}
            <motion.div 
              className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
                  <i className="fas fa-star text-white text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Award Winning</p>
                  <p className="text-xs text-muted-foreground">Best Playschool 2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-turquoise rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-white text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">200+ Kids</p>
                  <p className="text-xs text-muted-foreground">Happy Students</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
