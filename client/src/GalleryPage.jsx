import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Star, Quote } from "lucide-react";

function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Automatically load all images from the images folder
  useEffect(() => {
    const loadImages = async () => {
      try {
        // This is a list of common image extensions
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
        
        // You'll need to have a server endpoint or a build-time script to get the list of images
        // For now, we'll use a more dynamic approach by attempting to load images with sequential names
        // Option 1: If you have a backend API that lists files
        // const response = await fetch('/api/images');
        // const imageFiles = await response.json();
        
        // Option 2: For static sites, you might need to use a build-time script
        // or use a service like Cloudinary
        
        // For this example, we'll create a more flexible approach
        // You can modify this based on your hosting solution
        
        // For Vercel/Netlify static hosting, you might need to use:
        const imageModules = import.meta.glob('/public/images/*.{jpg,jpeg,png,gif,webp}');
        
        const imageList = [];
        for (const path in imageModules) {
          const module = await imageModules[path]();
          const filename = path.split('/').pop();
          const nameWithoutExt = filename.split('.')[0];
          
          imageList.push({
            src: `/images/${filename}`,
            alt: filename.replace(/[-_]/g, ' ').split('.')[0],
            title: nameWithoutExt.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
          });
        }
        
        // Sort images by name
        imageList.sort((a, b) => a.title.localeCompare(b.title));
        
        setImages(imageList);
      } catch (error) {
        console.error("Error loading images:", error);
        // Fallback to a default message
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);



  if (loading) {
    return (
      <div className="bg-white text-gray-800 min-h-screen">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading gallery...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900 relative overflow-hidden min-h-screen">
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
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
              Our Gallery
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore our world of innovation, collaboration, and technological excellence
            </p>
            {images.length > 0 && (
              <p className="text-yellow-400 text-sm mt-2">
                {images.length} {images.length === 1 ? 'image' : 'images'} found
              </p>
            )}
          </motion.div>

          {/* Gallery Grid */}
          {images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Images Fallback */}
          {images.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Images Found</h3>
              <p className="text-gray-400">Add images to the /images folder to display them here</p>
            </div>
          )}
        </div>
      </section>

      {/* Ratings and Feedback Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
              What Our Students Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our community of learners and innovators
            </p>
          </motion.div>

          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">4.9/5</div>
              <p className="text-gray-600">Based on 500+ reviews</p>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Robotics Student",
                rating: 5,
                feedback: "The robotics workshop was incredible! I learned so much about programming and building robots. The instructors were amazing and very patient.",
                avatar: "PS"
              },
              {
                name: "Rahul Kumar",
                role: "Web Development Student",
                rating: 5,
                feedback: "Stackenzo's web development course transformed my career. The hands-on projects and real-world applications were exactly what I needed.",
                avatar: "RK"
              },
              {
                name: "Ananya Patel",
                role: "Digital Marketing Student",
                rating: 5,
                feedback: "The digital marketing strategies I learned here helped me start my own business. Highly recommend to anyone serious about marketing!",
                avatar: "AP"
              },
              {
                name: "Vikram Singh",
                role: "R&D Participant",
                rating: 5,
                feedback: "Being part of the R&D program opened my eyes to innovation. The collaborative environment and cutting-edge projects were inspiring.",
                avatar: "VS"
              },
              {
                name: "Sneha Reddy",
                role: "Workshop Attendee",
                rating: 5,
                feedback: "The workshops are well-structured and engaging. I particularly enjoyed the interactive sessions and practical demonstrations.",
                avatar: "SR"
              },
              {
                name: "Arjun Mehta",
                role: "Career Program Graduate",
                rating: 5,
                feedback: "The career guidance and skill development programs at Stackenzo are top-notch. They helped me land my dream job in tech.",
                avatar: "AM"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-yellow-400 opacity-20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6">"{testimonial.feedback}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default GalleryPage;