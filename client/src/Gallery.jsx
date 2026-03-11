import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image1 from "/images/website1.png";
import image2 from "/images/robotics workshop.jpg";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: image1,
      alt: "App Development",
      title: "IT Services & Platform Development",
      category: "Software Solutions"
    },
    {
      src: image2,
      alt: "Stackenzo Robotics Workshop",
      title: "Robotics Pilot Workshop",
      category: "Education & Innovation"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-olive green-600 font-semibold tracking-widest text-sm uppercase">
            Company Gallery
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Our Work & Pilot Programs
          </h2>

          <div className="w-20 h-[2px] bg-olive green-600 mx-auto mt-6" />
        </motion.div>

        {/* Featured Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden border border-gray-200"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-72 md:h-[500px] object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
            <span className="text-olive green-400 text-sm uppercase tracking-wide mb-2">
              {images[currentIndex].category}
            </span>

            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {images[currentIndex].title}
            </h3>
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-24 h-24 rounded-lg overflow-hidden border transition-all duration-300 ${
                index === currentIndex
                  ? "border-olive green-600"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;