import "./App.css";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Toast from "./Toast";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
// import Gallery from "./Gallery";
import {
  Bot,
  Cpu,
  Code2,
  Rocket,
  Globe,
  Users,
  Briefcase,
  Lightbulb,
  Smartphone,
  Database,
  Shield,
  Zap,
  Search,
  TrendingUp,
  Settings,
  Monitor,
  MessageCircle,
  X,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Target,
  Eye,
  Award,
  Clock,
  MapPin,
  Calendar,
  BookOpen,
  Cpu as CpuIcon,
  Radio,
  Heart,
  Star,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Menu,
  Play,
  Pause,
  Volume2,
  VolumeX,
  BrickWallFire,
  Package,
  CheckCircle
} from "lucide-react";

const testimonials = [
  {
    name: "Arjun Kumar",
    role: "Engineering Student",
    quote:
      "Stackenzo completely changed how I approach real-world projects. The learning is practical and intense.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    rating: 5
  },
  {
    name: "Sneha R",
    role: "Startup Founder",
    quote:
      "Their IT services helped us launch faster with a solid and scalable platform.",
    image: "https://images.unsplash.com/photo-1494790108777-766d5e5f4c9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    rating: 5
  },
  {
    name: "Rahul M",
    role: "Robotics Enthusiast",
    quote:
      "The robotics programs are hands-on and far better than typical classroom learning.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    rating: 5
  },
];

const stats = [
  { label: "Students Trained", value: "1200+", icon: Users, color: "from-[#1E301E] to-[#2E7D32]", description: "Empowering future innovators" },
  { label: "Projects Delivered", value: "150+", icon: Package, color: "from-[#1E301E] to-[#2E7D32]", description: "Successful implementations" },
  { label: "Workshops Conducted", value: "80+", icon: Briefcase, color: "from-[#1E301E] to-[#2E7D32]", description: "Hands-on learning experiences" },
  { label: "Community Members", value: "3000+", icon: Globe, color: "from-[#1E301E] to-[#2E7D32]", description: "Growing tech community" },
];

// Updated services array with icons and detailed descriptions
const services = [
  {
    id: 1,
    title: "Research & Development",
    shortDesc: "Cutting-edge R&D projects solving real-world problems",
    fullDesc: "We pioneer groundbreaking research initiatives that address complex challenges across industries. Our R&D team combines academic rigor with practical application, delivering innovations in AI, robotics, sustainable technology, and more. Through strategic partnerships and state-of-the-art facilities, we transform theoretical concepts into tangible solutions that drive progress.",
    icon: CpuIcon,
    color: "from-[#1E301E] to-[#2E7D32]",
    bgImage: "https://www.trackntrace.com.au/wp-content/uploads/2024/03/140849pTD4t8.jpg",
    features: ["AI & Machine Learning", "Sustainable Tech", "Prototype Development", "Industry Collaboration"]
  },
  {
    id: 2,
    title: "IT Services",
    shortDesc: "Custom web & mobile development, cloud solutions",
    fullDesc: "Our comprehensive IT services empower businesses with robust digital infrastructure. From custom web applications and mobile platforms to enterprise cloud solutions, we architect scalable systems that drive efficiency and growth. We leverage cutting-edge technologies to build secure, high-performance solutions tailored to your unique business needs.",
    icon: Code2,
    color: "from-[#1E301E] to-[#2E7D32]",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Web Development", "Mobile Apps", "Cloud Solutions", "Enterprise Software"]
  },
  {
    id: 3,
    title: "Education & Training",
    shortDesc: "Strategic EdTech initiatives driving future-focused learning",
    fullDesc: "We revolutionize education through innovative EdTech solutions that make learning engaging, accessible, and effective. Our programs blend cutting-edge technology with pedagogical excellence, offering immersive experiences in robotics, coding, digital literacy, and professional development. We prepare learners for tomorrow's challenges with hands-on, industry-aligned training.",
    icon: BookOpen,
    color: "from-[#1E301E] to-[#2E7D32]",
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Robotics Education", "Coding Bootcamps", "Teacher Training", "Digital Curriculum"]
  },
  {
    id: 4,
    title: "Digital Marketing",
    shortDesc: "SEO, branding, and digital growth strategies",
    fullDesc: "Our data-driven digital marketing strategies help businesses establish powerful online presence and connect with their target audience. From SEO optimization and content marketing to social media management and analytics, we craft comprehensive campaigns that drive engagement, build brand loyalty, and deliver measurable ROI.",
    icon: TrendingUp,
    color: "from-[#1E301E] to-[#2E7D32]",
    bgImage: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
    features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics & Reporting"]
  },
  {
    id: 5,
    title: "Robotics & Automation",
    shortDesc: "Hands-on robotics learning and industrial automation",
    fullDesc: "We specialize in robotics education and industrial automation solutions that bridge the gap between theory and practice. Our programs offer hands-on experience with cutting-edge robotics technology, while our automation services help businesses optimize operations, reduce costs, and increase productivity through intelligent robotic systems.",
    icon: Bot,
    color: "from-[#1E301E] to-[#2E7D32]",
    bgImage: "https://tse3.mm.bing.net/th/id/OIP.95DU085B5v2VMvLso-nfzAAAAA",
    features: ["Industrial Automation", "Robotics Training", "IoT Integration", "Smart Manufacturing"]
  },
  {
    id: 6,
    title: "GSIN Platform",
    shortDesc: "Gamified tech ecosystem with challenges and collaboration",
    fullDesc: "Our innovative GSIN (Global Student Industrial Network) platform creates an engaging ecosystem where tech enthusiasts collaborate, compete, and grow. Through challenges, leaderboards, project showcases, and community events, we foster a vibrant community of innovators who learn together and build solutions that matter.",
    icon: Globe,
    color: "from-[#1E301E] to-[#2E7D32]",
    bgImage: "https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20158.jpg",
    features: ["Coding Challenges", "Project Collaboration", "Leaderboards", "Community Events", "Meetings"]
  },
];

const features = [
  { icon: Zap, title: "Swift Assistance", desc: "Quick turnaround times without compromising quality", color: "text-[#1E301E]" },
  { icon: Target, title: "Expert Team", desc: "Experienced professionals in technology and education", color: "text-[#1E301E]" },
  { icon: Heart, title: "24/7 Support", desc: "Continuous support throughout your journey", color: "text-[#1E301E]" },
  { icon: TrendingUp, title: "Proven Results", desc: "Track record of successful projects and satisfied clients", color: "text-[#1E301E]" }
];

function Home() {
  const [index, setIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [programs, setPrograms] = useState([]);
  const [programsLoading, setProgramsLoading] = useState(true);
  const [programsError, setProgramsError] = useState(null);
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [activeTab, setActiveTab] = useState("mission");
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const videoRef = useRef(null);
  const rotationIntervalRef = useRef(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, subject: "Contact from Home Page" })
      });
      const data = await response.json();
      if (data.success) {
        setToast({ show: true, message: "Thank you! We'll contact you within 24 hours." });
        setContactForm({ name: "", email: "", message: "" });
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

  // Auto-rotation for services
  useEffect(() => {
    if (isRotating) {
      rotationIntervalRef.current = setInterval(() => {
        setActiveServiceIndex((prev) => (prev + 1) % services.length);
      }, 5000);
    }
    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, [isRotating]);

  // Pause rotation on hover
  const pauseRotation = () => setIsRotating(false);
  const resumeRotation = () => setIsRotating(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setProgramsLoading(true);
        const response = await fetch('/api/programs');
        const data = await response.json();
        if (data.success) {
          const sortedPrograms = data.programs.sort((a, b) => new Date(b.date) - new Date(a.date));
          setPrograms(sortedPrograms);
          const activeEvents = sortedPrograms.filter(p => p.status === 'registration-open' || p.status === 'upcoming');

          const modalShown = localStorage.getItem('eventsModalShown');
          if (activeEvents.length > 0 && !modalShown) {
            setShowEventsModal(true);
            localStorage.setItem('eventsModalShown', 'true');
          }
        } else {
          setProgramsError('Failed to load updates');
        }
      } catch (error) {
        setProgramsError('Error loading updates');
      } finally {
        setProgramsLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  useEffect(() => {
    if (showEventsModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showEventsModal]);

  return (
    <div className="bg-white text-[#1A1A1A] font-sans overflow-x-hidden relative">
      {/* Animated Background Gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(30, 48, 30, 0.1), transparent 80%)`
        }}
      />

      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8F5E9] via-white to-[#E8F5E9]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-5" />

          {/* Animated Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />

          {/* Floating Orbs */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 md:left-20 w-48 md:w-64 h-48 md:h-64 bg-[#E8F5E9] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-[#E8F5E9] rounded-full blur-3xl"
          />
        </div>

        {/* Top Scrolling Updates */}
        {!programsLoading && programs.length > 0 && (
          <div className="absolute top-20 md:top-24 left-0 right-0 z-10">
            <div className="relative overflow-hidden bg-white border-y border-gray-200 py-2 md:py-3 shadow-sm">
              <motion.div
                className="flex gap-6 md:gap-12 whitespace-nowrap px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                }}
              >
                {[...programs.slice(0, 6), ...programs.slice(0, 6)].map((program, index) => (
                  <Link
                    to={`/Programs/${program.id}`}
                    key={`hero-${program.id}-${index}`}
                    className="group flex items-center gap-2 md:gap-3 text-xs md:text-sm text-[#1A1A1A] hover:text-[#1E301E] transition-colors"
                  >
                    <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[#D4AF37]"></span>
                    </span>
                    <span className="font-medium truncate max-w-[120px] md:max-w-none">{program.title}</span>
                    <span className="text-gray-300 hidden md:inline">•</span>
                    <span className="text-xs text-gray-500 hidden md:inline">
                      {new Date(program.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        )}

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto mt-24 md:mt-28">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 md:gap-2 bg-white border border-gray-200 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#D4AF37] flex-shrink-0" />
            <span className="text-xs md:text-base text-[#1E301E] font-semibold whitespace-nowrap">Innovation Through Technology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2"
          >
            <span className="bg-gradient-to-r from-[#1E301E] via-[#2E7D32] to-[#D4AF37] bg-clip-text text-transparent">
              Empowering the Future through Research & Development, Smart IT Solutions, and Edutech Advancement.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-[#1A1A1A] max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4"
          >
            A technology-driven organization committed to groundbreaking R&D, transformative IT solutions, and immersive EdTech experiences — empowering innovation, fostering technical excellence, and shaping the future of technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 mt-8 md:mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-4 md:px-6 py-3 md:py-4 bg-[#1E301E] text-white rounded-full text-sm md:text-base font-semibold overflow-hidden shadow-lg hover:shadow-xl hover:bg-[#2E7D32] transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-[#1E301E] text-[#1E301E] rounded-full text-sm md:text-base font-semibold bg-white hover:bg-[#E8F5E9] transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 pt-4 md:pt-6"
        >
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-4 h-6 md:w-5 md:h-8 border-2 border-[#1E301E] rounded-full flex justify-center"
            >
              <div className="w-0.5 h-1.5 md:w-1 md:h-2 bg-[#D4AF37] rounded-full mt-1.5 md:mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section with Rotator */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#D4AF37] font-semibold tracking-wider text-xs md:text-sm">WHAT WE DO</span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6 text-[#1A1A1A] px-4">
              Transforming Ideas into
              <span className="bg-gradient-to-r from-[#1E301E] to-[#2E7D32] bg-clip-text text-transparent block md:inline"> Reality</span>
            </h2>
            <p className="text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto px-4">
              Explore our comprehensive range of services designed to drive innovation and excellence
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Service Description */}
            <div className="w-full lg:w-2/5 px-4 lg:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceIndex}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200 shadow-lg"
                  onHoverStart={pauseRotation}
                  onHoverEnd={resumeRotation}
                >
                  {/* Service Icon */}
                  <div className={`inline-flex p-3 md:p-4 bg-gradient-to-r from-[#1E301E] to-[#2E7D32] rounded-xl md:rounded-2xl mb-4 md:mb-6`}>
                    {(() => {
                      const Icon = services[activeServiceIndex].icon;
                      return <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />;
                    })()}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-[#1A1A1A]">
                    {services[activeServiceIndex].title}
                  </h3>

                  {/* Full Description */}
                  <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed mb-4 md:mb-6">
                    {services[activeServiceIndex].fullDesc}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {services[activeServiceIndex].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#D4AF37] rounded-full" />
                        <span className="text-xs md:text-sm text-[#1A1A1A]">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link to={`/services/${services[activeServiceIndex].id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-1 md:gap-2 text-sm md:text-base text-[#1E301E] font-semibold hover:text-[#2E7D32] transition-colors"
                    >
                      Learn More About This Service
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>

                  {/* Service Counter */}
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-500">
                      Service {activeServiceIndex + 1} of {services.length}
                    </span>
                    <div className="flex gap-1.5 md:gap-2">
                      {services.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveServiceIndex(idx);
                            pauseRotation();
                            setTimeout(resumeRotation, 5000);
                          }}
                          className={`h-1.5 md:h-2 rounded-full transition-all ${idx === activeServiceIndex
                            ? 'w-4 md:w-6 bg-[#D4AF37]'
                            : 'w-1.5 md:w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Rotating Service Cards */}
            <div className="w-full lg:w-3/5 relative mt-8 lg:mt-0" onMouseEnter={pauseRotation} onMouseLeave={resumeRotation}>
              {/* Rotator Container */}
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
                {/* Center Point */}
                <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-[#D4AF37] rounded-full z-10 shadow-lg shadow-[#D4AF37]/50" />

                {/* Rotating Cards */}
                {services.map((service, idx) => {
                  // Calculate position on circle
                  const angle = (idx - activeServiceIndex) * (360 / services.length);
                  const radius = window.innerWidth < 640 ? 100 : window.innerWidth < 1024 ? 140 : 180;
                  const x = Math.sin((angle * Math.PI) / 180) * radius;
                  const y = -Math.cos((angle * Math.PI) / 180) * radius * 0.8;

                  // Determine if this is the highlighted card
                  const isHighlighted = idx === activeServiceIndex;

                  return (
                    <motion.div
                      key={service.id}
                      className="absolute"
                      animate={{
                        x,
                        y,
                        scale: isHighlighted ? 1.1 : 0.7,
                        opacity: Math.abs(idx - activeServiceIndex) <= 2 ? 1 : 0.2,
                        zIndex: isHighlighted ? 20 : 10,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        opacity: { duration: 0.3 }
                      }}
                      onClick={() => {
                        setActiveServiceIndex(idx);
                        pauseRotation();
                        setTimeout(resumeRotation, 5000);
                      }}
                    >
                      {/* Service Card */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`relative w-32 sm:w-36 md:w-40 lg:w-48 cursor-pointer group ${isHighlighted ? 'filter drop-shadow-2xl' : ''
                          }`}
                      >
                        {/* Card Background with Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-[#1E301E] to-[#2E7D32] rounded-xl md:rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />

                        {/* Card Content */}
                        <div className={`relative bg-white border rounded-xl md:rounded-2xl p-3 md:p-4 transition-all ${isHighlighted
                          ? `border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20`
                          : 'border-gray-200 hover:border-[#1E301E]'
                          }`}>
                          {/* Icon */}
                          <div className={`inline-flex p-1.5 md:p-2 bg-gradient-to-r from-[#1E301E] to-[#2E7D32] rounded-lg md:rounded-xl mb-2 md:mb-3`}>
                            {(() => {
                              const Icon = service.icon;
                              return <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />;
                            })()}
                          </div>

                          {/* Title */}
                          <h4 className="font-bold text-xs md:text-sm mb-1 md:mb-2 text-[#1A1A1A] group-hover:text-[#1E301E] transition-colors line-clamp-2">
                            {service.title}
                          </h4>

                          {/* Short Description */}
                          <p className="text-[10px] md:text-xs text-[#1A1A1A] line-clamp-2">
                            {service.shortDesc}
                          </p>

                          {/* Highlight Indicator */}
                          {isHighlighted && (
                            <motion.div
                              layoutId="highlight-indicator"
                              className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-[#D4AF37] rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring" }}
                            />
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Rotation Controls */}
              <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setActiveServiceIndex((prev) => (prev - 1 + services.length) % services.length);
                    pauseRotation();
                    setTimeout(resumeRotation, 5000);
                  }}
                  className="p-1.5 md:p-2 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-200 text-[#1A1A1A]"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
                </motion.button>

                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs md:text-sm border border-gray-200 flex items-center gap-1.5 md:gap-2 text-[#1A1A1A]"
                >
                  {isRotating ? (
                    <>
                      <Pause className="w-3 h-3 md:w-4 md:h-4" /> 
                      <span className="hidden sm:inline">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 md:w-4 md:h-4" /> 
                      <span className="hidden sm:inline">Resume</span>
                    </>
                  )}
                </button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setActiveServiceIndex((prev) => (prev + 1) % services.length);
                    pauseRotation();
                    setTimeout(resumeRotation, 5000);
                  }}
                  className="p-1.5 md:p-2 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-200 text-[#1A1A1A]"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#E8F5E9]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-[#D4AF37] font-semibold tracking-widest text-xs md:text-sm uppercase">
              Company Impact
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 md:mt-4 px-4">
              Our Impact in Numbers
            </h2>

            <div className="w-16 md:w-20 h-0.5 md:h-[2px] bg-[#D4AF37] mx-auto mt-4 md:mt-6" />

            <p className="text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto mt-4 md:mt-6 px-4">
              Delivering measurable growth through innovation, technology, and trusted partnerships.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4">

            {stats.map((stat, i) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 md:p-8 text-center hover:border-[#D4AF37] transition-colors duration-300 shadow-sm"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3 md:mb-6">
                    <div className="bg-[#1E301E] p-2 md:p-3 rounded-md">
                      <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1A1A1A] mb-1 md:mb-2">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="text-[#1E301E] uppercase tracking-wide text-xs md:text-sm mb-1 md:mb-2">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-[10px] md:text-xs text-[#1A1A1A] line-clamp-2">
                    {stat.description || `Total ${stat.label.toLowerCase()}`}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#D4AF37] font-semibold tracking-wider text-xs md:text-sm uppercase">
              Our Core Programs
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-3 md:mt-4 text-[#1A1A1A] px-4">
              Programs We Deliver
            </h2>

            <div className="w-16 md:w-20 h-0.5 md:h-[2px] bg-[#D4AF37] mx-auto mt-4 md:mt-6" />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4">
            {[
              {
                title: "R & D Projects",
                desc: "Research-driven engineering projects focused on solving real-world industrial and societal challenges.",
                img: "https://eu-images.contentstack.com/v3/assets/blt7a82e963f79cc4ec/blte9ba4bb5c8fc7e51/64b54806962d8e60ca1b576d/RD.jpg",
                link: "/R_AND_D",
                icon: CpuIcon
              },
              {
                title: "IT Services",
                desc: "End-to-end software development including websites, enterprise dashboards, and scalable digital platforms.",
                img: "https://ktla.com/wp-content/uploads/sites/4/2017/08/nasa.jpg",
                link: "/WebServices",
                icon: Code2
              },
              {
                title: "Robotics Education",
                desc: "Hands-on robotics programs for schools and institutions promoting innovation and applied learning.",
                img: "https://tse3.mm.bing.net/th/id/OIP.95DU085B5v2VMvLso-nfzAAAAA",
                link: "/Robotics",
                icon: Bot
              },
              {
                title: "Workshops & Internships",
                desc: "Industry-oriented workshops and internships designed to bridge academic learning with practical exposure.",
                img: "https://st2.depositphotos.com/3591429/8629/i/950/depositphotos_86293450-stock-photo-workshop-training-development-concept.jpg",
                link: "/WorkShops",
                icon: Users
              },
              {
                title: "Digital Marketing",
                desc: "Comprehensive digital growth strategies including SEO, branding, performance marketing, and analytics.",
                img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
                link: "/DigitalMarketing",
                icon: TrendingUp
              },
              {
                title: "GSIN Platform",
                desc: "A gamified innovation ecosystem enabling collaboration, competitions, and skill-based growth.",
                img: "https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20158.jpg",
                link: "/Community",
                icon: Globe
              }
            ].map((p, i) => {
              const Icon = p.icon;

              return (
                <Link to={p.link} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#D4AF37] transition-colors duration-300 h-full shadow-sm hover:shadow-md"
                  >
                    {/* Image */}
                    <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Icon */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#1E301E] p-1.5 md:p-2 rounded-md">
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6">
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#1A1A1A] mb-2 md:mb-3">
                        {p.title}
                      </h3>

                      <p className="text-xs md:text-sm text-[#1A1A1A] leading-relaxed mb-4 md:mb-6 line-clamp-3">
                        {p.desc}
                      </p>

                      <div className="flex items-center text-[#1E301E] text-xs md:text-sm font-medium">
                        View Program
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#E8F5E9]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#1A1A1A] uppercase tracking-widest text-[10px] md:text-xs font-semibold">
              Why Stackenzo
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-3 md:mt-4 text-[#1A1A1A] px-4">
              Why Choose Stackenzo
            </h2>

            <div className="w-12 md:w-16 h-0.5 md:h-[2px] bg-[#D4AF37] mx-auto mt-4 md:mt-6" />
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 px-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center hover:border-[#D4AF37] transition-colors shadow-sm"
                >
                  <div className="flex justify-center mb-4 md:mb-6">
                    <Icon className={`w-6 h-6 md:w-8 md:h-8 ${feature.color}`} />
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-[#1A1A1A] mb-2 md:mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#1A1A1A] leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-[#D4AF37] font-semibold tracking-widest text-xs md:text-sm uppercase">
              About Stackenzo
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 md:mt-4 px-4">
              Our Mission & Vision
            </h2>

            <div className="w-16 md:w-20 h-0.5 md:h-[2px] bg-[#D4AF37] mx-auto mt-4 md:mt-6" />
          </motion.div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 hover:border-[#D4AF37] transition-colors duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-[#1E301E] p-2 md:p-3 rounded-md">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1E301E]">
                  Our Mission
                </h3>
              </div>

              <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed mb-6 md:mb-8">
                Our mission is to design, develop, and deliver intelligent technology
                solutions that solve real-world challenges with precision, scalability,
                and long-term impact.
              </p>

              <ul className="space-y-2 md:space-y-4">
                {[
                  "Develop scalable, secure, and future-ready digital solutions",
                  "Bridge academic knowledge with real-world implementation",
                  "Empower startups, institutions, and enterprises through innovation",
                  "Automate complex processes to enhance productivity",
                  "Strengthen research-driven engineering culture",
                  "Promote continuous learning and technological excellence"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#D4AF37] rounded-full mt-1.5 md:mt-2" />
                    <span className="text-xs md:text-sm text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 hover:border-[#D4AF37] transition-colors duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-[#1E301E] p-2 md:p-3 rounded-md">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1E301E]">
                  Our Vision
                </h3>
              </div>

              <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed mb-6 md:mb-8">
                To become a leading innovation-driven technology ecosystem where research and development serve as the foundation for transformative solutions. We advance applied research that addresses real-world challenges, convert breakthrough ideas into scalable digital products, and engineer intelligent systems that power businesses and industries.
              </p>

              <div className="bg-[#E8F5E9] rounded-xl md:rounded-2xl p-3 md:p-4">
                <p className="text-xs md:text-sm text-[#1A1A1A] italic leading-relaxed">
                  "Through this innovation backbone, we strive to redefine education by integrating practical learning, industry exposure, and technology-enabled experiences — empowering the next generation to think, build, and lead with confidence in a rapidly evolving world."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Gallery */}
      {/* <Gallery /> */}

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#E8F5E9]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-[#D4AF37] font-semibold tracking-wider text-xs md:text-sm">TESTIMONIALS</span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6 text-[#1A1A1A] px-4">
              What People <span className="bg-gradient-to-r from-[#1E301E] to-[#2E7D32] bg-clip-text text-transparent">Say</span>
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="relative px-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg">
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-6">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#D4AF37]"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A]">{testimonials[index].name}</h4>
                    <p className="text-sm md:text-base text-[#1A1A1A]">{testimonials[index].role}</p>
                  </div>
                </div>

                <div className="flex justify-center sm:justify-start gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-sm md:text-base lg:text-lg text-[#1A1A1A] italic leading-relaxed text-center sm:text-left">
                  "{testimonials[index].quote}"
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 md:h-2 rounded-full transition-all ${i === index 
                      ? 'w-6 md:w-8 bg-[#D4AF37]' 
                      : 'w-1.5 md:w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E301E]/90 to-[#2E7D32]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-6"
          >
            Ready to Transform Your Future?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4"
          >
            Join thousands of students and professionals who have already started their journey with Stackenzo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-[#1E301E] rounded-full text-sm md:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <Link to="/Contact" className="w-full sm:w-auto">
              <button className="w-full px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full text-sm md:text-base font-semibold hover:bg-white hover:text-[#1E301E] transition-all hover:scale-105">
                Schedule a Call
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-[#D4AF37] rounded-full opacity-30 blur-md group-hover:opacity-50 transition duration-300 animate-pulse" />

          <a
            href="https://wa.me/916281704664"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#1E301E] hover:bg-[#2E7D32] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </motion.div>

      <ScrollToTop />

      {/* Events Modal */}
      <AnimatePresence>
        {showEventsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowEventsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border border-gray-200 rounded-xl md:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] md:max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-lg md:text-2xl font-bold flex items-center gap-1.5 md:gap-2 text-[#1A1A1A]">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
                    <span className="bg-gradient-to-r from-[#1E301E] to-[#2E7D32] bg-clip-text text-transparent">
                      Upcoming Events
                    </span>
                  </h2>
                  <p className="text-xs md:text-sm text-[#1A1A1A] mt-0.5 md:mt-1">Don't miss out on these exciting opportunities!</p>
                </div>
                <button
                  onClick={() => setShowEventsModal(false)}
                  className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 text-gray-500 hover:text-gray-700" />
                </button>
              </div>

              <div className="p-4 md:p-6 max-h-[60vh] md:max-h-96 overflow-y-auto">
                {programsLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="w-6 h-6 md:w-8 md:h-8 border-3 md:border-4 border-gray-200 border-t-[#D4AF37] rounded-full animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-3 md:space-y-4">
                    {(() => {
                      const activeEvents = programs.filter(p => p.status === 'registration-open' || p.status === 'upcoming');
                      if (activeEvents.length === 0) {
                        return (
                          <div className="text-center py-6 md:py-8 text-sm md:text-base text-[#1A1A1A]">
                            No upcoming events at the moment. Check back later!
                          </div>
                        );
                      }
                      return activeEvents.map((program) => (
                        <Link
                          to={`/Programs/${program.id}`}
                          key={program.id}
                          onClick={() => setShowEventsModal(false)}
                        >
                          <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-[#E8F5E9] hover:bg-[#E8F5E9]/80 border border-gray-200 rounded-lg md:rounded-xl p-3 md:p-4 transition-all cursor-pointer"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 md:gap-4">
                              <div className="flex-1">
                                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#1A1A1A] mb-1.5 md:mb-2 hover:text-[#1E301E] transition-colors">
                                  {program.title}
                                </h3>
                                <p className="text-xs md:text-sm text-[#1A1A1A] mb-2 md:mb-3 line-clamp-2">
                                  {program.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs text-[#1A1A1A]">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
                                    <span className="text-[10px] md:text-xs">{new Date(program.date).toLocaleDateString()}</span>
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
                                    <span className="text-[10px] md:text-xs truncate max-w-[80px] md:max-w-none">{program.location}</span>
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
                                    <span className="text-[10px] md:text-xs">{program.duration}</span>
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between sm:justify-end gap-2 md:gap-3">
                                <span className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold whitespace-nowrap ${
                                  program.status === 'registration-open'
                                    ? 'bg-[#D4AF37] text-[#1A1A1A] border border-[#D4AF37]'
                                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                                  }`}>
                                  {program.status.replace('-', ' ')}
                                </span>
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#1A1A1A] flex-shrink-0" />
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      ));
                    })()}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;