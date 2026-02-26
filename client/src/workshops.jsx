import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BookOpen, Clock, Users, Target, X, CheckCircle, Briefcase,
  Code, Zap, Award, Calendar, MapPin, ChevronRight, Star,
  Sparkles, GraduationCap, Brain, Rocket, TrendingUp, Heart,
  Shield, Coffee, Globe, MessageSquare, Share2, Bookmark, BadgeCheck,
  HelpCircle, Mail, Phone, Send, MessageCircle, FileText, User,
  School, GraduationCap as GraduationIcon, CalendarDays, ListChecks
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WorkshopRegistrationModal from "./WorkshopRegistrationModal";
import InternshipRegistrationModal from "./InternshipRegistrationModal";
import workshopsData from "./data/workshopsData.json";
import internshipsData from "./data/internshipsData.json";

function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [viewMode, setViewMode] = useState("workshops");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [showWorkshopRegModal, setShowWorkshopRegModal] = useState(false);
  const [showInternshipRegModal, setShowInternshipRegModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");


  // Query Form State
  const [queryForm, setQueryForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "general",
    message: "",
    preferredContact: "email",
    preferredTime: "anytime"
  });

  const departments = ["All", "ECE", "EEE", "CSE", "AI & ML", "IT", "Mechanical", "MCA"];
  const internshipDepartments = ["All", "Engineering", "Degree"];

  // Filter workshops
  const filteredWorkshops = selectedDepartment === "All"
    ? workshopsData.workshops
    : workshopsData.workshops.filter(w => w.suitedFor.includes(selectedDepartment));

  // Filter internships
  let filteredInternships;
  if (selectedDepartment === "All") {
    filteredInternships = internshipsData.internships;
  } else if (selectedDepartment === "Engineering") {
    filteredInternships = internshipsData.internships.filter(i =>
      i.suitedFor.some(branch => ["CSE", "IT", "ECE", "EEE", "Mechanical"].includes(branch))
    );
  } else if (selectedDepartment === "Degree") {
    filteredInternships = internshipsData.internships.filter(i =>
      i.suitedFor.includes("MCA")
    );
  } else {
    filteredInternships = internshipsData.internships;
  }

  // Search functionality
  const searchFilteredWorkshops = filteredWorkshops.filter(w =>
    searchQuery === "" ||
    w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.suitedFor.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const searchFilteredInternships = filteredInternships.filter(i =>
    searchQuery === "" ||
    i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handle Query Form Submit
  const handleQuerySubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/queries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: queryForm.name,
          email: queryForm.email,
          phone: queryForm.phone,
          subject: queryForm.subject,
          category: queryForm.category,
          message: queryForm.message
        }),
      });

      if (response.ok) {
        toast.success("Your query has been submitted successfully! We'll get back to you within 24 hours.", {
          duration: 5000,
          icon: "✅"
        });

        setQueryForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          category: "general",
          message: "",
          preferredContact: "email",
          preferredTime: "anytime"
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to submit query. Please try again.", {
          duration: 5000,
          icon: "❌"
        });
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      toast.error("Network error. Please check your connection and try again.", {
        duration: 5000,
        icon: "❌"
      });
    }
  };

  // Handle Query Form Change
  const handleQueryChange = (e) => {
    setQueryForm({
      ...queryForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Toaster position="top-center" />
      <Navbar />

      {/* Hero Section - Enhanced with Query Button */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6"
            >
              {viewMode === "workshops" ? (
                <>
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  <span className="text-sm sm:text-base text-yellow-400 font-semibold">Hands-on Technical Workshops</span>
                </>
              ) : (
                <>
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  <span className="text-sm sm:text-base text-yellow-400 font-semibold">Professional Internship Program</span>
                </>
              )}
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400/50" />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-2">
              {viewMode === "workshops" ? (
                <>
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Transform Your Future
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    with Technical Workshops
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Launch Your Career
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    with Professional Internships
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8">
              {viewMode === "workshops"
                ? "Learn cutting-edge technologies, build real-world projects, and gain the confidence to step into the industry with practical expertise."
                : "Engage in structured learning, hands-on project development, and guided mentorship designed to prepare you for professional excellence."}
            </p>

            {/* Hero Buttons: Workshops / Internships / Query */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {/* Workshops Button */}
              <button
                onClick={() => setViewMode("workshops")}
                className={`relative px-7 py-3 rounded-xl font-semibold transition-all duration-300 
    flex items-center gap-2 border backdrop-blur-md
    ${viewMode === "workshops"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl scale-105 border-yellow-300"
                    : "bg-gray-900/80 text-gray-200 border-gray-700 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1"
                  }
    active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              >
                <BookOpen className="w-4 h-4" />
                Workshops
              </button>

              {/* Internships Button */}
              <button
                onClick={() => setViewMode("internships")}
                className={`relative px-7 py-3 rounded-xl font-semibold transition-all duration-300 
    flex items-center gap-2 border backdrop-blur-md
    ${viewMode === "internships"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl scale-105 border-yellow-300"
                    : "bg-gray-900/80 text-gray-200 border-gray-700 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1"
                  }
    active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              >
                <Briefcase className="w-4 h-4" />
                Internships
              </button>

              {/* Query Button */}
              {/* <button
                onClick={() => document.getElementById('query-form').scrollIntoView({ behavior: 'smooth' })}
                className="relative px-7 py-3 rounded-xl font-semibold transition-all duration-300
    flex items-center gap-2 border backdrop-blur-md
    bg-purple-600/20 text-purple-400 border-purple-500/30 hover:bg-purple-600/30 hover:shadow-lg hover:-translate-y-1"
              >
                <HelpCircle className="w-4 h-4" />
                Have a Query?
              </button> */}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
              {(viewMode === "workshops" ? [
                { icon: Clock, value: "5 Days", label: "Duration", color: "blue" },
                { icon: Users, value: "500+", label: "Students Trained", color: "green" },
                { icon: Code, value: "20+", label: "Workshops", color: "purple" },
                { icon: Award, value: "100%", label: "Hands-on", color: "yellow" }
              ] : [
                { icon: Briefcase, value: "3-6 Months", label: "Duration", color: "blue" },
                { icon: Users, value: "50+", label: "Interns", color: "green" },
                { icon: TrendingUp, value: "20+", label: "Internships", color: "purple" },
                { icon: Award, value: "100%", label: "Hands-on", color: "yellow" }
              ]).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:border-yellow-400/30 transition-all"
                >
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${stat.color}-400 mx-auto mb-1 sm:mb-2`} />
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      <AnimatePresence mode="wait">
        {viewMode === "workshops" ? (
          <motion.div
            key="workshops"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Introduction Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
              <div className="max-w-4xl mx-auto text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8"
                >
                  We conduct short-term, high-impact technical workshops designed to bridge the gap between academic learning and real-world technology.
                  Our workshops focus on hands-on learning, practical exposure, and awareness of current industry trends.
                </motion.p>
                
                  {/* Quick Query Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setQueryForm({...queryForm, category: "workshop"});
                      document.getElementById('query-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 text-purple-400 rounded-xl border border-purple-500/30 hover:bg-purple-600/30 transition-all"
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span>Have Workshop Questions? Ask Us</span>
                  </motion.button>
              </div>
            </section>

            {/* Our Approach */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white-900">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
                >
                  Our Workshop Approach
                </motion.h2>
                <p className="text-lg sm:text-xl text-center text-gray-300 mb-8">
                  Our technical workshops follow a hands-on, project-driven approach where participants learn by building real-world solutions—not by passively listening to theory.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Concept explanation in simple language",
                    "Live demonstrations",
                    "Hands-on practical sessions",
                    "Mini projects",
                    "Real-world use cases",
                    "Interactive discussions"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-center text-yellow-400 font-bold text-lg sm:text-xl mt-8"
                >
                  Our goal is clarity, confidence, and practical exposure, not just certificates.
                </motion.p>
              </div>
            </section>

            {/* Department Filter */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-800">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 text-yellow-400">
                  Filter Workshops by Department
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {departments.map((dept) => (
                    <motion.button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${selectedDepartment === dept
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                    >
                      {dept}
                    </motion.button>
                  ))}
                </div>
              </div>
            </section>

            {/* Workshops Grid */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
                >
                  Core Workshop Domains We Offer
                </motion.h2>

                {searchFilteredWorkshops.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-xl">No workshops found</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {searchFilteredWorkshops.map((workshop, i) => (
                      <motion.div
                        key={workshop.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all overflow-hidden"
                      >
                        <div className="p-4 sm:p-6">
                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                            {workshop.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2">
                            {workshop.description}
                          </p>

                          {/* Duration */}
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{workshop.duration}</span>
                          </div>

                          {/* Suited For */}
                          <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2">Best suited for:</p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {workshop.suitedFor.slice(0, 3).map((branch, j) => (
                                <span key={j} className="px-2 py-0.5 sm:py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded-full border border-yellow-400/20">
                                  {branch}
                                </span>
                              ))}
                              {workshop.suitedFor.length > 3 && (
                                <span className="px-2 py-0.5 sm:py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">
                                  +{workshop.suitedFor.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* CTA Buttons */}
                          <div className="flex flex-col gap-2">
                            <motion.button
                              onClick={() => setSelectedWorkshop(workshop)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-4 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all flex items-center justify-center gap-2 group"
                            >
                              <span>View Details</span>
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            
                            {/* <motion.button
                              onClick={() => {
                                setQueryForm({
                                  ...queryForm,
                                  category: "workshop",
                                  subject: workshop.title,
                                  message: `I'm interested in the ${workshop.title} workshop. Please provide more details.`
                                });
                                setShowQueryForm(true);
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-all flex items-center justify-center gap-2"
                            >
                              <HelpCircle className="w-3 h-3" />
                              <span>Quick Query</span>
                            </motion.button> */}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* What Students Gain */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
                >
                  What Students Gain
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {workshopsData.studentGains.map((gain, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-gray-700 p-4 sm:p-6 rounded-xl border border-gray-600 hover:border-yellow-400/50 transition-all flex flex-col items-center text-center"
                    >
                      <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-3" />
                      <p className="text-sm sm:text-base text-gray-300">
                        {gain}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
                >
                  Why Choose Our Workshops
                </motion.h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {workshopsData.whyChoose.map((reason, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-300">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Philosophy Banner */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-yellow-400 to-orange-500">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-black mb-6"
                >
                  Our Workshop Philosophy
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-xl sm:text-2xl text-black/90 font-semibold mb-8"
                >
                  Workshops should not just teach — they should transform thinking.
                </motion.p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {["Build skills", "Create awareness", "Boost confidence", "Prepare for future"].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-black/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg"
                    >
                      <p className="text-sm sm:text-base text-black font-semibold">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="internships"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Internship Hero */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-950">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 mx-auto mb-6" />
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Internship Program at Stackenzo</h2>
                  <p className="text-xl sm:text-2xl text-yellow-400 font-semibold mb-4">
                    Learn From the Ground. Grow With Confidence. Enjoy the Work Culture.
                  </p>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    At Stackenzo, our internship program is not just about certificates or short-term training.
                    It is about real exposure, real learning, and real motivation.
                  </p>
                  
                  {/* Quick Query Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setQueryForm({...queryForm, category: "internship"});
                      document.getElementById('query-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 text-purple-400 rounded-xl border border-purple-500/30 hover:bg-purple-600/30 transition-all"
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span>Have Internship Questions? Ask Us</span>
                  </motion.button>
                </motion.div>
              </div>
            </section>

            {/* Department Filter for Internships */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-800">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 text-yellow-400">
                  Filter Internships by Department
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {internshipDepartments.map((dept) => (
                    <motion.button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${selectedDepartment === dept
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                    >
                      {dept}
                    </motion.button>
                  ))}
                </div>
              </div>
            </section>

            {/* Internship Grid */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
                >
                  Available Internships
                </motion.h2>

                {searchFilteredInternships.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-xl">No internships found</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {searchFilteredInternships.map((internship, i) => (
                      <motion.div
                        key={internship.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all overflow-hidden"
                      >
                        <div className="p-4 sm:p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                                {internship.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-400">{internship.duration} • {internship.type}</p>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2">
                            {internship.description}
                          </p>

                          <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2">Technologies:</p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {internship.technologies.slice(0, 3).map((tech, j) => (
                                <span key={j} className="px-2 py-0.5 sm:py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded-full border border-yellow-400/20">
                                  {tech}
                                </span>
                              ))}
                              {internship.technologies.length > 3 && (
                                <span className="px-2 py-0.5 sm:py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">
                                  +{internship.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2">Suited for:</p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {internship.suitedFor.slice(0, 3).map((branch, j) => (
                                <span key={j} className="px-2 py-0.5 sm:py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full border border-blue-400/20">
                                  {branch}
                                </span>
                              ))}
                              {internship.suitedFor.length > 3 && (
                                <span className="px-2 py-0.5 sm:py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">
                                  +{internship.suitedFor.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* CTA Buttons */}
                          <div className="flex flex-col gap-2">
                            <motion.button
                              onClick={() => {
                                setSelectedInternship(internship);
                                setShowInternshipRegModal(true);
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-4 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all flex items-center justify-center gap-2 group"
                            >
                              <span>Apply Now</span>
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            
                            {/* <motion.button
                              onClick={() => {
                                setQueryForm({
                                  ...queryForm,
                                  category: "internship",
                                  subject: internship.title,
                                  message: `I'm interested in the ${internship.title} internship. Please provide more details.`
                                });
                                setShowQueryForm(true);
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-all flex items-center justify-center gap-2"
                            >
                              <HelpCircle className="w-3 h-3" />
                              <span>Quick Query</span>
                            </motion.button> */}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* What Interns Gain */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
                >
                  What Interns Gain at Stackenzo
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    "Professional Experience",
                    "Industry-Ready Skills",
                    "Portfolio Development",
                    "Networking Opportunities",
                    "Stipend and Benefits",
                    "Letter of Recommendation"
                  ].map((gain, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-gray-700 p-4 sm:p-6 rounded-xl border border-gray-600 hover:border-yellow-400/50 transition-all flex flex-col items-center text-center"
                    >
                      <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-3" />
                      <p className="text-sm sm:text-base text-gray-300">
                        {gain}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Stackenzo Internships */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
                >
                  Why Choose Stackenzo Internships
                </motion.h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Real-world project experience with live deployments",
                    "Guidance from industry experts and mentors",
                    "Flexible working hours and remote options",
                    "Certificate and letter of recommendation",
                    "Opportunity to work on cutting-edge technologies",
                    "Career guidance and placement assistance"
                  ].map((reason, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-300">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Internship Philosophy Banner */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-yellow-400 to-orange-500">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-black mb-6"
                >
                  Our Internship Philosophy
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-xl sm:text-2xl text-black/90 font-semibold mb-8"
                >
                  Internships should not just train — they should transform careers.
                </motion.p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {["Build expertise", "Create opportunities", "Boost employability", "Prepare for success"].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-black/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg"
                    >
                      <p className="text-sm sm:text-base text-black font-semibold">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Workshop Details Modal - Enhanced */}
      <AnimatePresence>
        {selectedWorkshop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedWorkshop(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-yellow-400/30 shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 sm:p-6 flex items-center justify-between z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-black pr-8">{selectedWorkshop.title}</h2>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="text-black hover:text-gray-700 transition-colors p-1 hover:bg-black/10 rounded-full"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Description */}
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {selectedWorkshop.description}
                  </p>
                </div>

                {/* Duration & Suited For */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                    <p className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Duration
                    </p>
                    <p className="text-white text-lg">{selectedWorkshop.duration}</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                    <p className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Best Suited For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedWorkshop.suitedFor.map((branch, i) => (
                        <span key={i} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-sm rounded-full border border-yellow-400/20">
                          {branch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Topics Covered */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Topics Covered
                  </h3>
                  <div className="space-y-2">
                    {selectedWorkshop.topics.map((topic, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-yellow-400/30 transition-all"
                      >
                        <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-300">{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Learning Outcomes
                  </h3>
                  <div className="space-y-2">
                    {selectedWorkshop.outcomes.map((outcome, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-yellow-400/30 transition-all"
                      >
                        <Target className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-300">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedWorkshop(null)}
                    className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition border border-gray-700"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowWorkshopRegModal(true);
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Register Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedWorkshop(null);
                      setQueryForm({
                        ...queryForm,
                        category: "workshop",
                        subject: selectedWorkshop.title,
                        message: `I'm interested in the ${selectedWorkshop.title} workshop. Please provide more details.`
                      });
                      setShowQueryForm(true);
                    }}
                    className="flex-1 px-6 py-3 bg-purple-600/20 text-purple-400 rounded-xl font-semibold border border-purple-500/30 hover:bg-purple-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Ask Question</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Modals */}
      {showWorkshopRegModal && selectedWorkshop && (
        <WorkshopRegistrationModal
          workshop={selectedWorkshop}
          onClose={() => {
            setShowWorkshopRegModal(false);
            setSelectedWorkshop(null);
          }}
        />
      )}

      {showInternshipRegModal && selectedInternship && (
        <InternshipRegistrationModal
          internship={selectedInternship}
          onClose={() => {
            setShowInternshipRegModal(false);
            setSelectedInternship(null);
          }}
        />
      )}

      {/* Query Form Section */}
      <section id="query-form" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <HelpCircle className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Have a Question?</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              We're here to help! Send us your queries and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 border border-yellow-400/30 shadow-2xl"
          >
            <form onSubmit={handleQuerySubmit} className="space-y-6">
              {/* Category Selection */}
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <label className="block text-sm font-medium text-gray-300 mb-3">Category *</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: "workshop", label: "Workshops", icon: BookOpen },
                    { id: "internship", label: "Internships", icon: Briefcase },
                    { id: "general", label: "General Inquiry", icon: MessageCircle }
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setQueryForm({...queryForm, category: type.id});
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                        queryForm.category === type.id
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-transparent'
                          : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                      }`}
                    >
                      <type.icon className="w-4 h-4" />
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={queryForm.name}
                    onChange={handleQueryChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={queryForm.email}
                    onChange={handleQueryChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={queryForm.phone}
                    onChange={handleQueryChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-yellow-400" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={queryForm.subject}
                    onChange={handleQueryChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              {/* Query Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-yellow-400" />
                  Your Question/Message *
                </label>
                <textarea
                  name="message"
                  value={queryForm.message}
                  onChange={handleQueryChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none resize-none"
                  placeholder="Please type your question or message here..."
                />
              </div>

              {/* Preferred Contact Method */}
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <label className="block text-sm font-medium text-gray-300 mb-3">Preferred Contact Method</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={queryForm.preferredContact === "email"}
                      onChange={handleQueryChange}
                      className="text-yellow-400 focus:ring-yellow-400"
                    />
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Email</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={queryForm.preferredContact === "phone"}
                      onChange={handleQueryChange}
                      className="text-yellow-400 focus:ring-yellow-400"
                    />
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Phone</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={queryForm.preferredContact === "whatsapp"}
                      onChange={handleQueryChange}
                      className="text-yellow-400 focus:ring-yellow-400"
                    />
                    <MessageCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Query
                </motion.button>
              </div>

              {/* Note */}
              <p className="text-xs text-gray-500 text-center">
                We'll get back to you within 24 hours. Your information is safe with us.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Workshops; 