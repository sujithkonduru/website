import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Toast from "./Toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Headphones,
  Rocket,
  Shield,
  Plus,
  Minus
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setToast({ show: true, message: "Thank you! We'll contact you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const errorMsg = data.errors ? data.errors.map(err => err.msg || err.message).join(', ') : data.message;
        setToast({ show: true, message: errorMsg || 'Failed to submit. Please try again.' });
      }
    } catch (error) {
      setToast({ show: true, message: 'Error submitting. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "Hello@stackenzo.com",
      link: "mailto:Hello@stackenzo.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 XXX XXX XXXX",
      link: "tel:+91XXXXXXXXXX",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Nellore, Andhra Pradesh, India",
      link: "https://www.google.com/maps",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", link: "#", color: "hover:text-blue-400", bg: "bg-blue-500/10" },
    { icon: Twitter, name: "Twitter", link: "#", color: "hover:text-sky-400", bg: "bg-sky-500/10" },
    { icon: Instagram, name: "Instagram", link: "#", color: "hover:text-pink-400", bg: "bg-pink-500/10" },
    { icon: Facebook, name: "Facebook", link: "#", color: "hover:text-blue-500", bg: "bg-blue-500/10" },
    { icon: Youtube, name: "YouTube", link: "#", color: "hover:text-red-500", bg: "bg-red-500/10" }
  ];

  const stats = [
    { icon: Headphones, label: "24/7 Support", value: "Always Available" },
    { icon: Rocket, label: "Fast Response", value: "< 12 Hours" },
    { icon: Shield, label: "Secure", value: "100% Confidential" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Toast 
        message={toast.message} 
        isVisible={toast.show} 
        onClose={() => setToast({ show: false, message: "" })} 
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 overflow-hidden flex items-center">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 pointer-events-none hidden sm:block">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            className="text-6xl opacity-30"
          >
            ✨
          </motion.div>
        </div>
        
        <div className="absolute bottom-20 right-10 pointer-events-none hidden sm:block">
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
            className="text-6xl opacity-30"
          >
            💬
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Let's Connect
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            Get In Touch
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Have a question or want to work together? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10"
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                  <p className="text-sm sm:text-base font-semibold">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ top: '90vh' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer group"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <span className="text-xs sm:text-sm bg-gray-900/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-700/50 group-hover:border-yellow-400/50 group-hover:text-yellow-400 transition-all duration-300">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-90 text-yellow-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Contact Form & Info Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-700/50 shadow-2xl h-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                  Send Us a Message
                </h2>
                <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">Fill out the form and we'll get back to you within 24 hours</p>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe", required: true },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX", required: false },
                    { name: "subject", label: "Subject", type: "text", placeholder: "How can we help you?", required: true }
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        {field.label} {field.required && <span className="text-yellow-400">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required={field.required}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-900/50 border border-gray-700 
                          text-white text-sm sm:text-base outline-none transition-all duration-300
                          focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20
                          hover:border-gray-600"
                        placeholder={field.placeholder}
                      />
                      {focusedField === field.name && (
                        <motion.div
                          layoutId="field-focus"
                          className="absolute inset-0 rounded-lg sm:rounded-xl ring-2 ring-yellow-400/50 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Message <span className="text-yellow-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-900/50 border border-gray-700 
                        text-white text-sm sm:text-base outline-none transition-all duration-300 resize-none
                        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20
                        hover:border-gray-600"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-3 sm:py-4 rounded-lg sm:rounded-xl 
                      font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-yellow-400/25 
                      transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50
                      relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full"
                          />
                          <span className="text-sm sm:text-base">Sending...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-sm sm:text-base">Send Message</span>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Header Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-base text-gray-400">
                  Feel free to reach out to us through any of the following channels.
                </p>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.link}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                    target={info.link !== "#" ? "_blank" : "_self"}
                    rel={info.link !== "#" ? "noopener noreferrer" : ""}
                  >
                    {/* Icon with Gradient */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-base mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                        {info.details}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Social Links & Trust Badge */}
              <div className="space-y-6">
                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1 h-5 bg-yellow-400 rounded-full"></span>
                    Connect With Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.link}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 ${social.bg} rounded-xl flex items-center justify-center
                          hover:bg-opacity-30 transition-all duration-300 border border-white/5 relative group/icon`}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${social.color}`} />

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs
                          py-1 px-2 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300
                          whitespace-nowrap pointer-events-none hidden sm:block border border-gray-700 z-10">
                          {social.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-green-400 text-base">100% Response Rate</p>
                    <p className="text-sm text-gray-400">We typically respond within 2 hours</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 border-2 border-gray-800"></div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">Trusted by 1000+ clients</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
              Find Us Here
            </h2>
            <p className="text-sm sm:text-base text-gray-400">Visit our office or schedule a meeting</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-96 border-2 border-gray-700/50 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15350.123456789012!2d79.986456!3d14.442599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf00abcdef123:0xabcdef123456789!2sNellore,+Andhra+Pradesh,+India!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stackenzo Location"
              className="filter brightness-90 hover:brightness-100 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">Got questions? We've got answers</p>
          </motion.div>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "What are your response times?",
                a: "We typically respond to all inquiries within 24 hours during business days, often much faster!"
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer free initial consultations to discuss your project requirements and provide expert advice."
              },
              {
                q: "Can I schedule a call?",
                a: "Absolutely! You can schedule a call by mentioning your preferred time in the contact form, and we'll send you a calendar invite."
              },
              {
                q: "Do you work with international clients?",
                a: "Yes, we work with clients globally and can accommodate different time zones with flexible scheduling."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl 
                    border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 
                    overflow-hidden cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {/* Question Header */}
                  <div className="p-4 sm:p-6 flex items-center justify-between">
                    <h3 className="font-semibold text-white text-sm sm:text-base md:text-lg group-hover:text-yellow-400 transition-colors pr-4 sm:pr-8">
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-400/10 flex items-center justify-center 
                        group-hover:bg-yellow-400/20 transition-colors flex-shrink-0"
                    >
                      {openFaq === i ? (
                        <Minus className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400" />
                      ) : (
                        <Plus className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400" />
                      )}
                    </motion.div>
                  </div>

                  {/* Answer Panel */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openFaq === i ? "auto" : 0,
                      opacity: openFaq === i ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pt-3 sm:pt-4 border-t border-gray-700/50">
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          {faq.a}
                        </p>
                        
                        {/* Optional additional details */}
                        {i === 1 && (
                          <div className="mt-3 sm:mt-4 flex items-center gap-2">
                            <span className="bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs">
                              Free 30-min consultation
                            </span>
                          </div>
                        )}
                        
                        {i === 2 && (
                          <div className="mt-3 sm:mt-4">
                            <a 
                              href="#" 
                              className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
                            >
                              Schedule a call now
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Help Center CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">Still have questions?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 
                text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base 
                hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
              onClick={() => {
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;