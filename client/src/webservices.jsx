import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Code, Cloud, Shield, Database, Cpu, Globe,
  Smartphone, Lock, TrendingUp, Zap, Users, ChevronRight,
  CheckCircle, ArrowRight, Star, ChevronDown, X, ExternalLink,
  Sparkles, Rocket, Award, Clock, HeadphonesIcon, Layers,
  Palette, Gauge, Server, GitBranch, Box, Cpu as CpuIcon
} from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Toast from "./Toast";
import servicesData from "./data/servicesData.json";

function WebServices() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [activeService, setActiveService] = useState("all");
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);
  const navigate = useNavigate();

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteFormData)
      });
      const data = await response.json();
      if (data.success) {
        setToast({ show: true, message: "Quote request submitted! We'll contact you within 24 hours." });
        setTimeout(() => {
          setIsQuoteModalOpen(false);
          setQuoteFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
        }, 1500);
      } else {
        const errorMsg = data.errors ? data.errors.map(err => err.msg || err.message).join(', ') : data.message;
        setToast({ show: true, message: errorMsg || 'Failed to submit. Please try again.' });
      }
    } catch (error) {
      setToast({ show: true, message: 'Error submitting request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceCategories = {
    "core": {
      title: "Core IT Services",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-[#1E301E] to-[#2E7D32]",
      lightColor: "bg-white",
      services: servicesData.core.map((service, index) => ({
        icon: index === 0 ? <Code className="w-6 h-6 sm:w-8 sm:h-8" /> :
          index === 1 ? <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" /> :
            index === 2 ? <Database className="w-6 h-6 sm:w-8 sm:h-8" /> :
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: service.title,
        desc: service.detailedDesc.substring(0, 80) + "...",
        detailedDesc: service.detailedDesc,
        benefits: service.benefits,
        technologies: service.technologies,
        deliverables: service.deliverables,
        timeline: service.timeline,
        features: service.benefits.slice(0, 4)
      }))
    },
    "web": {
      title: "Web & Digital",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-[#1E301E] to-[#2E7D32]",
      lightColor: "bg-[#E8F5E9]",
      services: servicesData.web.map((service, index) => ({
        icon: index === 0 ? <Globe className="w-6 h-6 sm:w-8 sm:h-8" /> :
          index === 1 ? <Palette className="w-6 h-6 sm:w-8 sm:h-8" /> :
            <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: service.title,
        desc: service.detailedDesc.substring(0, 80) + "...",
        detailedDesc: service.detailedDesc,
        benefits: service.benefits,
        technologies: service.technologies,
        deliverables: service.deliverables,
        timeline: service.timeline,
        features: service.benefits.slice(0, 4)
      })),
    },
    "cloud": {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-[#1E301E] to-[#2E7D32]",
      lightColor: "bg-[#E8F5E9]",
      services: servicesData.cloud.map((service, index) => ({
        icon: index === 0 ? <Cloud className="w-6 h-6 sm:w-8 sm:h-8" /> :
          index === 1 ? <Server className="w-6 h-6 sm:w-8 sm:h-8" /> :
            index === 2 ? <Gauge className="w-6 h-6 sm:w-8 sm:h-8" /> :
              <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: service.title,
        desc: service.detailedDesc.substring(0, 80) + "...",
        detailedDesc: service.detailedDesc,
        benefits: service.benefits,
        technologies: service.technologies,
        deliverables: service.deliverables,
        timeline: service.timeline,
        features: service.benefits.slice(0, 4)
      }))
    },
    "data": {
      title: "Data & AI",
      icon: <CpuIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-[#1E301E] to-[#2E7D32]",
      lightColor: "bg-[#E8F5E9]",
      services: servicesData.data.map((service, index) => ({
        icon: index === 0 ? <CpuIcon className="w-6 h-6 sm:w-8 sm:h-8" /> :
          index === 1 ? <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" /> :
            <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: service.title,
        desc: service.detailedDesc.substring(0, 80) + "...",
        detailedDesc: service.detailedDesc,
        benefits: service.benefits,
        technologies: service.technologies,
        deliverables: service.deliverables,
        timeline: service.timeline,
        features: service.benefits.slice(0, 4)
      }))
    }
  };

  const benefits = [
    { icon: "🚀", title: "Accelerated Innovation", desc: "Leverage cutting-edge technologies to stay ahead of competition" },
    { icon: "💰", title: "Cost Optimization", desc: "Reduce operational costs through automation and efficient solutions" },
    { icon: "📈", title: "Scalable Solutions", desc: "Grow seamlessly with flexible and scalable infrastructure" },
    { icon: "🔒", title: "Enhanced Security", desc: "Enterprise-grade protection for your critical assets" },
    { icon: "⚡", title: "Faster Deployment", desc: "Accelerate time-to-market with agile methodologies" },
    { icon: "🎯", title: "Business Agility", desc: "Adapt quickly to market changes with flexible solutions" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      initials: "RK",
      role: "Business Owner",
      rating: 5,
      text: "Stackenzo transformed our business with their innovative IT solutions. The team understood our requirements perfectly and delivered beyond expectations."
    },
    {
      name: "Priya Sharma",
      initials: "PS",
      role: "Startup Founder",
      rating: 5,
      text: "Working with Stackenzo has been a game-changer for our startup. Their technical expertise and dedication to quality are truly remarkable."
    },
    {
      name: "Amit Patel",
      initials: "AP",
      role: "Product Manager",
      rating: 5,
      text: "The level of professionalism and technical skill at Stackenzo is outstanding. They helped us launch our product ahead of schedule."
    },
    {
      name: "Sneha Reddy",
      initials: "SR",
      role: "Tech Lead",
      rating: 4,
      text: "Great experience collaborating with the Stackenzo team. They brought valuable insights to our project and delivered high-quality work."
    },
    {
      name: "Vikram Singh",
      initials: "VS",
      role: "Entrepreneur",
      rating: 5,
      text: "Stackenzo's team went above and beyond to ensure our project's success. Their attention to detail and problem-solving skills are impressive."
    },
    {
      name: "Ananya Desai",
      initials: "AD",
      role: "Marketing Director",
      rating: 5,
      text: "The digital marketing strategies implemented by Stackenzo significantly improved our online presence. Highly recommended!"
    }
  ];

  const faqs = [
    {
      q: "What industries do you serve?",
      a: "We serve diverse industries including Finance, Healthcare, Retail, Manufacturing, Education, and Technology with tailored solutions for each sector."
    },
    {
      q: "How do you ensure project success?",
      a: "We follow agile methodologies, maintain transparent communication, conduct regular reviews, and use proven frameworks to ensure successful delivery."
    },
    {
      q: "Do you provide post-deployment support?",
      a: "Yes, we offer comprehensive support including 24/7 monitoring, maintenance, and dedicated support teams to ensure smooth operations."
    },
    {
      q: "What is your approach to security?",
      a: "Security is integrated into every phase of development, following ISO 27001, SOC 2, and GDPR standards for maximum protection."
    },
    {
      q: "Can you work with our existing stack?",
      a: "Absolutely! We seamlessly integrate with your existing systems or recommend optimal solutions based on your requirements."
    }
  ];

  const ServiceCard = ({ service, index, categoryColor }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={() => setSelectedServiceDetail(service)}
      className="group relative bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-[#1E301E] to-[#2E7D32] opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`} />
      <div className="relative">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#1E301E] to-[#2E7D32] bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
            <div className="text-[#1E301E]">{service.icon}</div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] group-hover:text-[#1E301E] transition-all line-clamp-2">
            {service.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#1A1A1A] mb-3 sm:mb-4 leading-relaxed line-clamp-2">{service.desc}</p>
        <ul className="space-y-1.5 sm:space-y-2">
          {service.features.slice(0, 3).map((feature, j) => (
            <li key={j} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#1A1A1A] group-hover:text-[#1E301E] transition-colors">
              <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37] flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedServiceDetail(service);
            }}
            className="text-xs sm:text-sm text-[#1A1A1A] hover:text-[#1E301E] flex items-center gap-1 group/btn"
          >
            Learn More
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const CategoryButton = ({ categoryKey, category }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setActiveService(categoryKey)}
      className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 whitespace-nowrap ${
        activeService === categoryKey
          ? `text-white bg-gradient-to-r from-[#1E301E] to-[#2E7D32] shadow-md`
          : "text-[#1A1A1A] bg-[#E8F5E9] hover:bg-[#D4AF37]/20 hover:text-[#1E301E] border border-gray-200"
      }`}
    >
      <span className={`${activeService === categoryKey ? 'text-white' : 'text-[#1E301E]'}`}>
        {category.icon}
      </span>
      <span className="hidden sm:inline">{category.title}</span>
      <span className="sm:hidden">{category.title.split(' ')[0]}</span>
    </motion.button>
  );

  return (
    <div className="bg-white text-[#1A1A1A] min-h-screen overflow-x-hidden">
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
      />
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-[#E8F5E9] via-white to-[#E8F5E9]">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E301E]/5 via-transparent to-[#2E7D32]/5" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 48, 30, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Elements */}
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
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
              <span className="text-xs sm:text-sm text-[#1E301E] font-semibold">Enterprise IT Solutions</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
              <span className="text-[#1A1A1A]">
                Intelligent Technology
              </span>
              <br />
              <span className="text-[#1E301E]">
                Solutions That Scale
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A] max-w-3xl mx-auto leading-relaxed">
              We deliver end-to-end IT solutions that transform businesses, drive innovation,
              and accelerate growth—from concept to deployment in the digital age.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8 px-2 mt-3">
              {[
                { icon: Rocket, value: "1000+", label: "Projects", color: "blue" },
                { icon: Users, value: "500+", label: "Clients", color: "green" },
                { icon: Zap, value: "120+", label: "Solutions", color: "purple" },
                { icon: Award, value: "98%", label: "Satisfaction", color: "green" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-2 sm:p-3 hover:border-[#D4AF37] transition-all shadow-sm"
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E301E] mx-auto mb-1" />
                  <div className="text-sm sm:text-base md:text-lg font-bold text-[#1A1A1A]">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-[#1A1A1A]">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-[#1E301E] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-[#2E7D32] transition-all shadow-md hover:shadow-lg"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-[#1E301E] text-[#1E301E] rounded-full text-xs sm:text-sm font-semibold hover:bg-[#1E301E] hover:text-white transition-all"
              >
                Get Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Navigation - Sticky */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-y border-gray-200 py-2 sm:py-3 px-2 sm:px-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar pb-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveService("all")}
              className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeService === "all"
                  ? "bg-[#1E301E] text-white shadow-md"
                  : "text-[#1A1A1A] bg-[#E8F5E9] hover:bg-[#D4AF37]/20 hover:text-[#1E301E] border border-gray-200"
              }`}
            >
              All Services
            </motion.button>

            {Object.entries(serviceCategories).map(([key, category]) => (
              <div key={key} className="flex-shrink-0">
                <CategoryButton categoryKey={key} category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-[#E8F5E9]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeService === "all" ? (
              <motion.div
                key="all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12 sm:space-y-16"
              >
                {Object.entries(serviceCategories).map(([key, category]) => (
                  <div key={key}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-2">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-[#1E301E] to-[#2E7D32] bg-opacity-10`}>
                        <span className="text-[#1E301E]">{category.icon}</span>
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1A1A]">{category.title}</h2>
                      <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37] to-transparent ml-2 sm:ml-4" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                      {category.services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} categoryColor={category.color} />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 px-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-[#1E301E] to-[#2E7D32] bg-opacity-10`}>
                      <span className="text-[#1E301E]">
                        {serviceCategories[activeService].icon}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1A1A]">{serviceCategories[activeService].title}</h2>
                      <p className="text-xs sm:text-sm text-[#1A1A1A]">{serviceCategories[activeService].services.length} specialized services</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveService("all")}
                    className="text-xs sm:text-sm text-[#1A1A1A] hover:text-[#1E301E] flex items-center gap-1"
                  >
                    View All Categories
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {serviceCategories[activeService].services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} categoryColor={serviceCategories[activeService].color} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-[#1E301E]">Our Development Approach</h2>
            <p className="text-xs sm:text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto">
              We follow industry best practices and proven methodologies to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "Understanding your business needs, goals, and technical requirements",
                icon: "🔍",
                color: "from-[#1E301E] to-[#2E7D32]"
              },
              {
                step: "02",
                title: "Design & Architecture",
                desc: "Creating scalable system architecture and user-centric designs",
                icon: "🎨",
                color: "from-[#1E301E] to-[#2E7D32]"
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "Agile development with continuous testing and quality assurance",
                icon: "⚡",
                color: "from-[#1E301E] to-[#2E7D32]"
              },
              {
                step: "04",
                title: "Deployment & Support",
                desc: "Seamless deployment with ongoing maintenance and 24/7 support",
                icon: "🚀",
                color: "from-[#1E301E] to-[#2E7D32]"
              }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#D4AF37] group transition-all shadow-sm hover:shadow"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#1E301E] to-[#2E7D32] opacity-0 group-hover:opacity-5 rounded-xl transition-opacity`} />
                <div className="relative">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{phase.icon}</div>
                  <div className={`text-xs font-bold mb-1 bg-gradient-to-r from-[#1E301E] to-[#2E7D32] bg-clip-text text-transparent`}>
                    {phase.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] mb-2">{phase.title}</h3>
                  <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Stackenzo */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-[#E8F5E9]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-[#1E301E]">Why Stackenzo?</h2>
            <p className="text-xs sm:text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#D4AF37] transition-all shadow-sm hover:shadow"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{benefit.icon}</div>
                <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-[#1A1A1A]">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-[#1E301E]">Client Success Stories</h2>
            <p className="text-xs sm:text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto">
              Hear what our clients say about their experience working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#D4AF37] transition-all shadow-sm hover:shadow"
              >
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1A1A1A] mb-3 sm:mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#1E301E] to-[#2E7D32] flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#1A1A1A]">{testimonial.name}</div>
                    <div className="text-[10px] sm:text-xs text-[#1A1A1A]">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-[#E8F5E9]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-[#1E301E]">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm md:text-base text-[#1A1A1A]">Got questions? We've got answers.</p>
          </motion.div>

          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-[#D4AF37] transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-3 sm:p-4 text-left flex justify-between items-center hover:bg-[#E8F5E9] transition-all gap-2"
                >
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1A1A1A] pr-2">{faq.q}</h3>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-gray-100">
                        <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed pt-2">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E301E] to-[#2E7D32]" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072')] bg-cover bg-center mix-blend-overlay opacity-20" />

            <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Start Your Digital Transformation Today</h2>
              <p className="text-xs sm:text-sm md:text-base text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Collaborate with our experts to create technology that performs and evolves.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-[#1E301E] rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transition-all"
                >
                  Contact Us Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-white text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-white hover:text-[#1E301E] transition-all"
                >
                  Get Free Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedServiceDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={() => setSelectedServiceDetail(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl sm:rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#1E301E] to-[#2E7D32] p-3 sm:p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg text-white">
                    {selectedServiceDetail.icon}
                  </div>
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white line-clamp-1">{selectedServiceDetail.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedServiceDetail(null)}
                  className="text-white hover:text-gray-200 p-1 hover:bg-white/20 rounded-lg transition-all"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                {/* Overview */}
                <div className="bg-[#E8F5E9] p-3 sm:p-4 rounded-lg border border-gray-200">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1E301E] mb-1 sm:mb-2">Service Overview</h3>
                  <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                    {selectedServiceDetail.detailedDesc || selectedServiceDetail.desc}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1E301E] mb-1 sm:mb-2">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {selectedServiceDetail.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1.5 sm:gap-2 bg-[#E8F5E9] p-2 rounded-lg border border-gray-200">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#1A1A1A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                {selectedServiceDetail.benefits && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1E301E] mb-1 sm:mb-2">Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {selectedServiceDetail.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-1.5 sm:gap-2 text-[#1A1A1A]">
                          <span className="text-[#D4AF37] text-xs sm:text-sm">✓</span>
                          <span className="text-xs sm:text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {selectedServiceDetail.technologies && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1E301E] mb-1 sm:mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {selectedServiceDetail.technologies.map((tech, i) => (
                        <span key={i} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#E8F5E9] text-[#1A1A1A] text-xs rounded-full border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline */}
                {selectedServiceDetail.timeline && (
                  <div className="bg-[#E8F5E9] p-2 sm:p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-[#1A1A1A]">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                      <span className="font-semibold text-[#1E301E]">Timeline:</span>
                      <span>{selectedServiceDetail.timeline}</span>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-2 sm:pt-3 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setQuoteFormData({ ...quoteFormData, service: selectedServiceDetail.title });
                      setSelectedServiceDetail(null);
                      setIsQuoteModalOpen(true);
                    }}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-[#1E301E] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#2E7D32] transition-all flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <span>Get Quote for {selectedServiceDetail.title}</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={() => setIsQuoteModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl sm:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#1E301E] to-[#2E7D32] p-3 sm:p-4 flex justify-between items-center">
                <h2 className="text-sm sm:text-base font-bold text-white">Get a Quote</h2>
                <button
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="text-white hover:text-gray-200 p-1 hover:bg-white/20 rounded-lg transition-all"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleQuoteSubmit} className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={quoteFormData.name}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                    className="w-full p-2 sm:p-2.5 rounded-lg bg-white border border-gray-200 text-[#1A1A1A] text-xs sm:text-sm focus:border-[#D4AF37] outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={quoteFormData.email}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, email: e.target.value })}
                    className="w-full p-2 sm:p-2.5 rounded-lg bg-white border border-gray-200 text-[#1A1A1A] text-xs sm:text-sm focus:border-[#D4AF37] outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={quoteFormData.phone}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                    className="w-full p-2 sm:p-2.5 rounded-lg bg-white border border-gray-200 text-[#1A1A1A] text-xs sm:text-sm focus:border-[#D4AF37] outline-none transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Company *</label>
                  <input
                    type="text"
                    required
                    value={quoteFormData.company}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, company: e.target.value })}
                    className="w-full p-2 sm:p-2.5 rounded-lg bg-white border border-gray-200 text-[#1A1A1A] text-xs sm:text-sm focus:border-[#D4AF37] outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Service *</label>
                  <select
                    required
                    value={quoteFormData.service}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, service: e.target.value })}
                    className="w-full p-2 sm:p-2.5 rounded-lg bg-white border border-gray-200 text-[#1A1A1A] text-xs sm:text-sm focus:border-[#D4AF37] outline-none"
                  >
                    <option value="">Select a service</option>
                    {Object.values(serviceCategories).map((category) => (
                      <optgroup key={category.title} label={category.title}>
                        {category.services.map((service) => (
                          <option key={service.title} value={service.title}>{service.title}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Message</label>
                  <textarea
                    rows="3"
                    value={quoteFormData.message}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, message: e.target.value })}
                    className="w-full p-2 sm:p-2.5 rounded-lg bg-white border border-gray-200 text-[#1A1A1A] text-xs sm:text-sm focus:border-[#D4AF37] outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 bg-white text-[#1A1A1A] rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#E8F5E9] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#1E301E] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#2E7D32] disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default WebServices;