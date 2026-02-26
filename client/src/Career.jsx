import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Briefcase, MapPin, Clock, DollarSign, Users, TrendingUp, 
  Award, Heart, Rocket, Sparkles, Target, ChevronRight,
  Zap, Coffee, Gift, BookOpen, Home, Globe, ThumbsUp,
  Calendar, CheckCircle, Play, Star, Download, Mail,
  Phone, MessageSquare, ArrowRight, Filter, Search,
  X, Menu, Layers, Code, Palette, BarChart, Headphones
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ResumeModal from "./ResumeModal";

function Career() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [jobOpenings, setJobOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleApplyClick = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setIsResumeModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsResumeModalOpen(false);
    setSelectedJobTitle("");
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/jobs/postings');
      const data = await response.json();
      if (data.success) {
        setJobOpenings(data.data);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Get unique values for filters
  const departments = ["All", ...new Set(jobOpenings.map(job => job.department))];
  const locations = ["All", ...new Set(jobOpenings.map(job => job.location))];
  const types = ["All", ...new Set(jobOpenings.map(job => job.type))];

  // Filter jobs
  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    const matchesType = selectedType === "All" || job.type === selectedType;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesLocation && matchesType && matchesSearch;
  });

  const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage", color: "rose" },
    { icon: Coffee, title: "Work-Life Balance", desc: "Flexible hours and remote work options", color: "amber" },
    { icon: TrendingUp, title: "Growth & Development", desc: "Learning stipends and career advancement", color: "emerald" },
    { icon: Gift, title: "Perks & Benefits", desc: "Competitive salary, equity, and bonus structure", color: "purple" },
    { icon: Users, title: "Great Culture", desc: "Inclusive environment and team events", color: "blue" },
    { icon: Zap, title: "Innovation Time", desc: "20% time for passion projects", color: "yellow" }
  ];

  const testimonials = [
    {
      name: "Sujith kumar",
      role: "Senior Developer",
      icon: Code,
      quote: "Stackenzo has given me the opportunity to work on cutting-edge technology while maintaining work-life balance."
    },
    {
      name: "Harsha",
      role: "Marketing Lead",
      icon: Target,
      quote: "The collaborative culture and focus on innovation makes every day exciting and rewarding."
    },
    {
      name: "charan",
      role: "AI & ML Engineer",
      icon: Palette,
      quote: "I've grown tremendously here, surrounded by talented people who push me to be better."
    }
  ];

  const values = [
    { icon: Rocket, title: "Innovation First", desc: "We push boundaries and embrace new ideas" },
    { icon: Users, title: "Collaborative Spirit", desc: "Together we achieve more" },
    { icon: Award, title: "Excellence Always", desc: "High standards in everything we do" },
    { icon: Heart, title: "People-Centric", desc: "Our team is our greatest asset" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center">
        {/* Video Background Placeholder (Image fallback) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-indigo-950/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Join Our Mission</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Shape the Future
              </span>
              <br />
              <span className="text-white">with Stackenzo</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Join a team of innovators, builders, and problem-solvers who are passionate about 
              creating technology that makes a difference. Your journey starts here.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (!loading) {
                    document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-yellow-400/50 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400/10 transition-all flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Grid */}
            {/* <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { value: "50+", label: "Team Members", icon: Users },
                { value: "100+", label: "Projects Delivered", icon: Rocket },
                { value: "98%", label: "Employee Satisfaction", icon: ThumbsUp },
                { value: "3", label: "Global Offices", icon: Globe }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                  className="backdrop-blur-sm bg-black/30 p-4 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all"
                >
                  <stat.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                Our Values
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 text-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-yellow-400 text-sm font-semibold mb-4">
              Why Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                Benefits & Perks
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We take care of our team so they can focus on doing their best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const colors = {
                rose: "from-rose-500 to-pink-500",
                amber: "from-amber-500 to-yellow-500",
                emerald: "from-emerald-500 to-green-500",
                purple: "from-purple-500 to-indigo-500",
                blue: "from-blue-500 to-cyan-500",
                yellow: "from-yellow-500 to-orange-500"
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors[benefit.color]} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colors[benefit.color]} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                        <p className="text-sm text-gray-400">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      {jobOpenings.length > 0 && (
        <section id="openings" className="scroll-mt-20 py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                  Open Positions
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Find your perfect role and join us in shaping the future
              </p>
            </motion.div>

            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                  />
                </div>

                {/* Filter Toggle (Mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-xl text-gray-300"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                  {showFilters ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>

                {/* Desktop Filters */}
                <div className="hidden lg:flex gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-400 mb-1">Department</label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-400 mb-1">Location</label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    >
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-400 mb-1">Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    >
                      {types.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="lg:hidden mt-4 space-y-3"
                >
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Department</label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Location</label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    >
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    >
                      {types.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-6 text-sm text-gray-400">
              Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
            </div>

            {/* Job Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/20">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs border border-green-500/20">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                        {job.experience}
                      </div>
                      <div className="flex items-center text-sm text-gray-400 col-span-2">
                        <DollarSign className="w-4 h-4 mr-2 text-yellow-400" />
                        {job.salary}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 4).map((req, j) => (
                          <span key={j} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 4 && (
                          <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-400">
                            +{job.requirements.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <motion.button
                      onClick={() => handleApplyClick(job.title)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No positions found</h3>
                <p className="text-gray-400">Try adjusting your filters or check back later</p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* No Openings Fallback */}
      {jobOpenings.length === 0 && !loading && (
        <section id="openings" className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-12 rounded-3xl border border-gray-700/50"
            >
              <div className="text-7xl mb-6">✨</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                No Openings Available
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We're not hiring right now, but we're always interested in connecting with talented individuals. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsResumeModalOpen(true)}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Send Your Resume
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                What Our Team Says
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from the people who make Stackenzo great
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                  <div className="flex items-center gap-4 mb-4">
                     
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-yellow-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20" />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
            
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                  Ready to Join Us?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Take the first step towards an exciting career at Stackenzo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (jobOpenings.length > 0) {
                      document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setIsResumeModalOpen(true);
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all"
                >
                  {jobOpenings.length > 0 ? 'Browse Openings' : 'Send Resume'}
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-semibold hover:bg-yellow-400/10 transition-all"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseModal}
        jobTitle={selectedJobTitle}
      />

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
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}

export default Career;