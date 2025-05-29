import { motion } from "framer-motion";

export default function Facilities() {
  const facilities = [
    {
      icon: "fas fa-home",
      title: "Modern Classrooms",
      description: "Bright, spacious learning environments",
      color: "coral"
    },
    {
      icon: "fas fa-playground",
      title: "Outdoor Playground",
      description: "Safe, age-appropriate play equipment",
      color: "turquoise"
    },
    {
      icon: "fas fa-book",
      title: "Library Corner",
      description: "Cozy reading nook with children's books",
      color: "sky"
    },
    {
      icon: "fas fa-utensils",
      title: "Cafeteria",
      description: "Nutritious meals and snacks",
      color: "mint"
    }
  ];

  const amenities = [
    { icon: "fas fa-video", title: "CCTV Security", color: "coral" },
    { icon: "fas fa-first-aid", title: "Medical Room", color: "turquoise" },
    { icon: "fas fa-snowflake", title: "Air Conditioned", color: "sky" },
    { icon: "fas fa-car", title: "Safe Transport", color: "mint" },
    { icon: "fas fa-wifi", title: "High-Speed WiFi", color: "purple-pink" },
    { icon: "fas fa-parking", title: "Parking Space", color: "sunny" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-fredoka text-foreground mb-4">Our Facilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">State-of-the-art facilities designed with your child's safety, comfort, and learning in mind.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Facilities Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br from-${facility.color}/10 to-${facility.color}/20 rounded-2xl p-6 text-center card-hover`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 bg-${facility.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${facility.icon} text-white`}></i>
                </div>
                <h3 className="font-poppins font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Facility Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern preschool classroom interior" 
              className="rounded-3xl shadow-xl w-full h-auto" 
            />
            
            {/* Safety Badge */}
            <motion.div 
              className="absolute top-4 left-4 bg-white rounded-full p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-shield-alt text-white text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">100% Safe</p>
                  <p className="text-xs text-muted-foreground">CCTV Monitored</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Amenities */}
        <motion.div 
          className="bg-gradient-to-br from-purple-pink/5 to-sunny/5 rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8 text-center">Additional Amenities</h3>
          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-12 h-12 bg-${amenity.color}/20 rounded-full flex items-center justify-center mb-3`}>
                  <i className={`${amenity.icon} text-${amenity.color}`}></i>
                </div>
                <p className="text-sm font-medium text-foreground">{amenity.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
