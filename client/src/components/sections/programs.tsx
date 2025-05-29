import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      icon: "fas fa-baby",
      title: "Toddler Care",
      ageRange: "18 months - 3 years",
      description: "Gentle introduction to learning through sensory play, music, and social interaction in a safe, nurturing environment.",
      features: ["Sensory play activities", "Basic motor skills development", "Social interaction", "Music and movement"],
      color: "coral"
    },
    {
      icon: "fas fa-child",
      title: "Preschool",
      ageRange: "3 - 4 years",
      description: "Structured learning activities that build foundation skills in literacy, numeracy, and creative expression.",
      features: ["Early literacy and numeracy", "Creative arts and crafts", "Science exploration", "Social skills development"],
      color: "turquoise"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Pre-Kindergarten",
      ageRange: "4 - 5 years",
      description: "Comprehensive school readiness program preparing children for kindergarten with advanced learning activities.",
      features: ["Kindergarten preparation", "Advanced reading and math", "Critical thinking skills", "Independence building"],
      color: "sky"
    }
  ];

  const features = [
    {
      icon: "fas fa-brain",
      title: "STEAM Learning",
      description: "Science, Technology, Engineering, Arts, and Math integration",
      color: "coral"
    },
    {
      icon: "fas fa-leaf",
      title: "Nature Based",
      description: "Outdoor exploration and environmental awareness",
      color: "turquoise"
    },
    {
      icon: "fas fa-palette",
      title: "Creative Arts",
      description: "Music, art, drama, and creative expression",
      color: "sky"
    },
    {
      icon: "fas fa-heart",
      title: "Social-Emotional",
      description: "Building empathy, kindness, and emotional intelligence",
      color: "purple-pink"
    }
  ];

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
    <section id="programs" className="py-20 bg-gradient-to-br from-turquoise/10 to-sky/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-fredoka text-foreground mb-4">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Age-appropriate programs designed to nurture every aspect of your child's development.</p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-3xl p-8 shadow-lg card-hover border-t-4 border-${program.color}`}
              whileHover={{ y: -8 }}
            >
              <div className={`w-16 h-16 bg-${program.color}/20 rounded-full flex items-center justify-center mb-6`}>
                <i className={`${program.icon} text-${program.color} text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">{program.title}</h3>
              <p className="text-muted-foreground mb-4">{program.ageRange}</p>
              <p className="text-muted-foreground mb-6">{program.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className={`fas fa-check text-${program.color} mr-2`}></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Program Features */}
        <motion.div 
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8 text-center">What Makes Our Programs Special</h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 bg-${feature.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${feature.icon} text-${feature.color} text-xl`}></i>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
