import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image1 from "/images/website1.png"
import image2 from "/images/robotics workshop.jpg";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {src : image1,
      alt : "App Development",
      title : "Our Service"
    },
    {
      src: image2,
      alt: "Stackenzo Robotics Workshop",
      title: "Robotics Workshop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
            Our Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our world of innovation, collaboration, and technological excellence
          </p>
        </motion.div>

        {/* Main Featured Image */}
        <div className="relative mb-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {images[currentIndex].title}
              </h3>
              <div className="flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-yellow-400 scale-125'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/25'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Auto-scroll Progress Bar */}
        <div className="mt-6 w-full max-w-md mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              key={currentIndex} // Reset animation on index change
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
