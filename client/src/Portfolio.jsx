import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink, Github, Eye, Star, Calendar,
  Code, Smartphone, Globe, Database, Shield,
  ChevronRight, Sparkles, Target, Award, Users,
  TrendingUp, Zap, Heart, MessageSquare
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory management and payment integration.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: ["Real-time inventory", "Secure payments", "Admin dashboard", "Mobile responsive"],
      metrics: { users: "50K+", revenue: "$2M+", satisfaction: "98%" },
      link: "#",
      github: "#",
      status: "Live",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Comprehensive healthcare management platform for clinics and hospitals with patient records, appointment scheduling, and telemedicine features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "PostgreSQL", "Docker", "Kubernetes"],
      features: ["Patient management", "Telemedicine", "Analytics dashboard", "HIPAA compliant"],
      metrics: { clinics: "200+", patients: "100K+", uptime: "99.9%" },
      link: "#",
      github: "#",
      status: "Live",
      gradient: "from-[#1E301E] to-[#2E7D32]"
    },
    // {
    //   id: 3,
    //   title: "FinTech Mobile App",
    //   category: "Mobile Development",
    //   description: "Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.",
    //   image: "/api/placeholder/600/400",
    //   technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    //   features: ["Biometric auth", "Real-time transactions", "Investment tracking", "Push notifications"],
    //   metrics: { downloads: "100K+", rating: "4.8", transactions: "$50M+" },
    //   link: "#",
    //   github: "#",
    //   status: "Live",
    //   gradient: "from-purple-600 to-pink-600"
    // },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      category: "Data Science",
      description: "Advanced analytics platform using machine learning for predictive insights, automated reporting, and business intelligence.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      features: ["Predictive analytics", "Auto ML", "Custom dashboards", "API integration"],
      metrics: { accuracy: "95%", queries: "1M+", clients: "50+" },
      link: "#",
      github: "#",
      status: "Live",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "IoT Smart Home System",
      category: "IoT & Robotics",
      description: "Connected smart home ecosystem with voice control, energy monitoring, and automated security features.",
      image: "/api/placeholder/600/400",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "React", "Node.js"],
      features: ["Voice control", "Energy monitoring", "Security automation", "Mobile app"],
      metrics: { devices: "10K+", savings: "30%", satisfaction: "96%" },
      link: "#",
      github: "#",
      status: "Live",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      id: 6,
      title: "Educational Learning Platform",
      category: "EdTech",
      description: "Interactive learning management system with video streaming, assessments, and progress tracking for educational institutions.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Django", "PostgreSQL", "AWS", "WebRTC"],
      features: ["Video streaming", "Assessment tools", "Progress tracking", "Multi-tenant"],
      metrics: { students: "25K+", courses: "500+", institutions: "100+" },
      link: "#",
      github: "#",
      status: "Live",
      gradient: "from-teal-600 to-cyan-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Stackenzo transformed our business with their innovative solutions. The team's expertise and dedication are unmatched.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "CTO, HealthFirst",
      content: "The healthcare management system exceeded our expectations. Reliable, secure, and user-friendly.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, EduLearn",
      content: "Their educational platform revolutionized how we deliver learning content. Outstanding results!",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    }
  ];

  const stats = [
    { icon: Code, value: "150+", label: "Projects Completed", color: "blue" },
    { icon: Users, value: "500+", label: "Happy Clients", color: "green" },
    { icon: Award, value: "25+", label: "Awards Won", color: "purple" },
    { icon: TrendingUp, value: "300%", label: "Client Growth", color: "orange" }
  ];

  return (
    <div className="bg-white text-[#1A1A1A] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-[#E8F5E9] via-white to-[#E8F5E9]">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E301E]/10 via-transparent to-[#2E7D32]/10" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 48, 30, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E301E]/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-sm"
            >
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              <span className="text-sm sm:text-base text-[#1E301E] font-semibold">Our Portfolio</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]/50" />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-2">
              <span className="text-[#1A1A1A]">
                Showcasing
              </span>
              <br />
              <span className="text-[#1E301E]">
                Excellence
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A] max-w-3xl mx-auto leading-relaxed px-4 mb-8 sm:mb-12">
              Discover our portfolio of successful projects and innovative solutions that have transformed businesses across industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-[#D4AF37] transition-all shadow-sm"
                >
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-[#1E301E] mx-auto mb-1 sm:mb-2`} />
                  <div className="text-lg sm:text-2xl font-bold text-[#1A1A1A]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#1A1A1A]">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 sm:mt-12"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex flex-col items-center gap-2 text-[#1A1A1A] hover:text-[#1E301E] transition-colors"
              >
                <span className="text-xs sm:text-sm">View Projects</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-90 text-[#D4AF37]" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20 py-8 sm:py-12 px-3 sm:px-6 bg-[#E8F5E9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1E301E]">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A] max-w-2xl mx-auto">
              Explore our successful projects that showcase innovation, quality, and results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-[#D4AF37] transition-all overflow-hidden shadow-sm hover:shadow"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 sm:h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1E301E] text-xs rounded-full border border-[#D4AF37] shadow-sm">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 bg-white/90 backdrop-blur-sm text-[#1E301E] text-xs rounded-full border border-[#D4AF37]`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-sm sm:text-base text-[#1A1A1A] mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1E301E] mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[#E8F5E9] text-[#1E301E] text-xs rounded-full border border-[#D4AF37]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1E301E] mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          <span className="text-xs text-[#1A1A1A]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-[#E8F5E9] rounded-xl border border-gray-200">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-[#1A1A1A]">{value}</div>
                        <div className="text-xs text-[#1A1A1A] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1E301E]">
              Client Testimonials
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A] max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-[#D4AF37] transition-all shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#1A1A1A] mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1E301E] to-[#2E7D32] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A1A1A]">{testimonial.name}</div>
                    <div className="text-xs text-[#1A1A1A]">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 bg-[#E8F5E9]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 md:p-10 text-center shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1E301E]">
                Ready to Start Your Project?
              </h2>
              <p className="text-sm sm:text-base text-[#1A1A1A] mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/Contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1E301E] text-white rounded-xl font-semibold hover:bg-[#2E7D32] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Start Your Project</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/Services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-200 text-[#1A1A1A] rounded-xl font-semibold hover:border-[#1E301E] hover:text-[#1E301E] transition-all flex items-center justify-center gap-2 bg-white"
                  >
                    <span>Explore Services</span>
                    <Target className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Portfolio;