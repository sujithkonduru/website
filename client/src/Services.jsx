import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Code, TrendingUp, Rocket, Target, Zap, Globe,
  ChevronRight, Star, Sparkles, ArrowRight,
  Cpu, Smartphone, Database, Cloud, Shield, BarChart3,
  Users, Award, Clock, CheckCircle, ExternalLink,
  Layers, Gauge, Palette, Briefcase, Lightbulb
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Services() {
  const [activeService, setActiveService] = useState(0);

 const services = [
    {
      id: "rnd",
      title: "R&D",
      subtitle: "Innovation & Research",
      description: "Cutting-edge research and development in AI/ML, IoT, robotics, and emerging technologies to drive future-ready solutions.",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      lightBg: "bg-purple-50",
      features: [
        "Artificial Intelligence & Machine Learning",
        "Internet of Things (IoT)",
        "Robotics & Automation",
        "Blockchain & Web3",
        "Data Science & Analytics",
        "Computer Vision",
        "Natural Language Processing"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "ROS", "Solidity", "Spark"],
      link: "/R_AND_D",
      stats: { patents: "15+", publications: "50+", innovations: "25+" },
      color: "purple"
    },
    {
      id: "it-services",
      title: "IT Services",
      subtitle: "Custom Software Solutions",
      description: "End-to-end web development, mobile apps, enterprise solutions, and system integrations tailored to your business needs.",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      lightBg: "bg-blue-50",
      features: [
        "Web Application Development",
        "Mobile App Development",
        "API Development & Integration",
        "Database Design & Management",
        "Cloud Solutions & DevOps",
        "Enterprise Software Solutions",
        "UI/UX Design & Prototyping"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
      link: "/WebServices",
      stats: { projects: "150+", clients: "50+", satisfaction: "98%" },
      color: "blue"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      subtitle: "Strategic Online Presence",
      description: "Comprehensive digital marketing strategies including SEO, social media management, content creation, and analytics-driven campaigns.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      lightBg: "bg-green-50",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing & Creation",
        "PPC Advertising & Analytics",
        "Brand Strategy & Positioning",
        "Email Marketing Automation",
        "Influencer Marketing"
      ],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Meta Ads", "Mailchimp"],
      link: "/DigitalMarketing",
      stats: { reach: "2M+", campaigns: "200+", growth: "300%" },
      color: "green"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition",
      desc: "Award-winning solutions recognized by leading tech publications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      desc: "Senior developers, designers, and strategists with 10+ years experience"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      desc: "On-time project completion with agile methodology"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      desc: "Rigorous testing and quality control processes"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Performance",
      desc: "Optimized solutions with cutting-edge technology"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Measurable Results",
      desc: "Data-driven approach with clear KPIs and metrics"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards",
      desc: "International best practices and industry standards"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Latest Technology",
      desc: "Future-ready applications with modern tech stack"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Dedicated Support",
      desc: "24/7 technical support and maintenance services"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-40 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">Premium Services</span>
              </motion.div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Business With Us
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                Comprehensive technology solutions and innovative strategies designed to accelerate your growth and digital transformation journey.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/Contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-xl font-semibold overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
                
                <Link to="/About">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all flex items-center gap-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    Learn More
                  </motion.button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center gap-6"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gradient-to-br from-gray-600 to-gray-700"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">Trusted by 500+ businesses</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "10+", label: "Years Experience of Team Members", icon: Users, color: "yellow" },
{ value: "50+", label: "Happy Clients", icon: Briefcase, color: "blue" },
{ value: "98%", label: "Client Retention", icon: Star, color: "green" },
{ value: "24/7", label: "Always Available", icon: Clock, color: "purple" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all"
                >
                  <stat.icon className={`w-8 h-8 text-${stat.color}-400 mb-3`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                Our Services
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs, delivered with excellence
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveService(index)}
                className="group relative"
              >
                <Link to={service.link}>
                  <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-lg rounded-3xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden h-full`}>
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                    <div className="relative p-8">
                      {/* Icon with Animation */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6`}
                      >
                        <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                          {service.icon}
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-yellow-400 font-semibold mb-4">{service.subtitle}</p>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className={`w-4 h-4 text-${service.color}-400 flex-shrink-0`} />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <p className="text-xs text-gray-500 mb-2">TECHNOLOGIES</p>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className={`text-xs px-2 py-1 rounded-full bg-${service.color}-500/10 text-${service.color}-400 border border-${service.color}-500/20`}
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 3 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                              +{service.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Stats Preview */}
                      <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-black/20 rounded-xl">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between group/btn">
                        <span className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                          Explore Service
                        </span>
                        <motion.div
                          animate={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 text-yellow-400" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-yellow-400 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                The Stackenzo Advantage
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine technical excellence with business acumen to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all">
                  <div className="text-yellow-400 mb-4 p-3 bg-yellow-400/10 rounded-xl inline-block">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "10+", label: "Years of Excellence", icon: Award },
              { value: "500+", label: "Happy Clients", icon: Users },
              { value: "98%", label: "Client Retention", icon: Star },
              { value: "24/7", label: "Support Available", icon: Clock }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                Our Process
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic approach to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business goals and requirements", icon: Target },
              { step: "02", title: "Strategy", desc: "Developing a comprehensive action plan", icon: Lightbulb },
              { step: "03", title: "Execution", desc: "Implementing solutions with agile methodology", icon: Rocket },
              { step: "04", title: "Optimization", desc: "Continuous improvement and support", icon: Gauge }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {i < 3 && (
                  <div className="absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent hidden md:block" />
                )}
                <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 text-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-yellow-400">{item.step}</span>
                  </div>
                  <item.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      {/* <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                Our Work Speaks for Itself
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our portfolio of successful projects and see how we've helped businesses achieve their goals
            </p>
            <Link to="/Portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>View Our Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section - Enhanced */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20" />
            
            {/* Animated Pattern */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />

            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 p-12 md:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                    Ready to Transform Your Business?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your goals. Get a free consultation today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/Contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-xl font-semibold overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get Free Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300"
                        initial={{ x: "100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>
                  
                  <Link to="/portfolio">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all flex items-center justify-center gap-2"
                    >
                      <Layers className="w-5 h-5" />
                      View Our Work
                    </motion.button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  {[
                    { icon: Shield, text: "ISO Certified" },
                    { icon: Award, text: "Award Winning" },
                    { icon: Users, text: "Expert Team" }
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400">
                      <badge.icon className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Services;