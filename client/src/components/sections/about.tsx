import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-fredoka text-foreground mb-4">About Rainbow Kids</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Dedicated to providing exceptional early childhood education in a nurturing, fun-filled environment.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To create a loving, safe environment where children develop confidence, curiosity, and a lifelong love of learning through play-based education.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-seedling text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">To be the leading playschool that nurtures each child's unique potential, fostering creativity, independence, and social skills.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-sky rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">We blend structured learning with free play, ensuring children develop academically, socially, and emotionally in age-appropriate ways.</p>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-fredoka text-coral mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-fredoka text-turquoise mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Expert Teachers</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-fredoka text-sky mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Happy Graduates</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern classroom with children learning" 
              className="rounded-3xl shadow-xl w-full h-auto" 
            />
            
            {/* Overlapping second image */}
            <motion.div 
              className="absolute -bottom-8 -left-8 w-48 h-48 overflow-hidden rounded-2xl shadow-lg border-4 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                alt="Teacher reading to children" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div 
              className="absolute top-4 right-4 bg-sunny text-white p-3 rounded-full"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-smile text-lg"></i>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
