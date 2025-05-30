import { motion } from "framer-motion";
import { useState } from 'react';
import Image1 from '../../assets/rocket.png'
import Image2 from '../../assets/annual.png';
import Image3 from '../../assets/award.png';
import Image4 from '../../assets/tables.png';
import Image5 from '../../assets/krish.png';
import Image6 from '../../assets/ind.png';
import Image7 from '../../assets/screen.png';
import Image8 from '../../assets/superman.png';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: Image1,
      alt: "Children playing with educational toys",
      title: "Blast Off Fun"
    },
    {
      src: Image2,
      alt: "Children doing arts and crafts",
      title: "Wild Stage Magic"
    },
    {
      src: Image3,
      alt: "Children playing on outdoor playground equipment",
      title: "Joyful Book Moment"
    },
    {
      src: Image4,
      alt: "Children in music and movement class",
      title: "Colorful Play Haven"
    },
    {
      src: Image5,
      alt: "Story time with teacher and children",
      title: "Festive Krishna Vibes"
    },
    {
      src: Image6,
      alt: "Children having healthy snacks",
      title: "Proud Flag Bearer"
    },
    {
      src: Image7,
      alt: "Children exploring science activities",
      title: "Engaging Class Screen"
    },
    {
      src: Image8,
      alt: "Preschool graduation ceremony",
      title: "Superhero Grad Cheer"
    }
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1
    }
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-fredoka text-foreground mb-4">Our Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Take a peek into the joyful moments and learning adventures at Rainbow Kids Playschool.</p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-2xl shadow-lg card-hover cursor-pointer"
              onClick={() => handleImageClick(image.src)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* <motion.button 
            className="bg-gradient-to-r from-coral to-turquoise text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-images mr-2"></i> View More Photos
          </motion.button> */}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            >
              <i className="fas fa-times"></i>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
