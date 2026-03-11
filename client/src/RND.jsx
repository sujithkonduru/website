import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, Lightbulb, Users, Award, ChevronDown, Target, Zap, BookOpen,
  Microscope, Atom, Beaker, FlaskConical, Cpu, Globe2, Network,
  Sparkles, CheckCircle, Rocket, TrendingUp, Clock, HeadphonesIcon,
  FileText, GraduationCap, Building2, Briefcase, Share2, BookMarked,
  Layers, Code, Database, Cloud, Shield, Bot, Brain, FolderOpen, ChevronRight
} from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import rndData from "./data/rndData.json";
import RNDApplicationModal from "./RNDApplicationModal";

function RND() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [activeDomain, setActiveDomain] = useState("all");
  const [expandedGroups, setExpandedGroups] = useState({});

  const researchDomains = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-600 to-cyan-600',
      desc: 'Advanced AI algorithms, deep learning, and intelligent systems for real-world applications',
      areas: ['Computer Vision', 'Natural Language Processing', 'Reinforcement Learning', 'Neural Networks', 'Generative AI', 'Edge AI']
    },
    {
      title: 'Internet of Things (IoT)',
      icon: <Network className="w-6 h-6" />,
      color: 'from-olive green-600 to-emerald-600',
      desc: 'Connected devices, smart systems, and edge computing for intelligent infrastructure',
      areas: ['Smart Cities', 'Industrial IoT', 'Healthcare IoT', 'Agricultural IoT', 'Wearable Technology', 'Vehicle Telematics']
    },
    {
      title: 'Robotics & Automation',
      icon: <Bot className="w-6 h-6" />,
      color: 'from-purple-600 to-pink-600',
      desc: 'Autonomous systems, robotic control, and intelligent automation for industry 4.0',
      areas: ['Autonomous Vehicles', 'Service Robots', 'Industrial Automation', 'Swarm Robotics', 'Human-Robot Interaction', 'Soft Robotics']
    },
    {
      title: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-600 to-rose-600',
      desc: 'Information security, threat detection, and secure systems for digital protection',
      areas: ['Blockchain Security', 'IoT Security', 'AI-based Threat Detection', 'Cryptography', 'Zero Trust Architecture', 'Cloud Security']
    },
    {
      title: 'Sustainable Technology',
      icon: <Globe2 className="w-6 h-6" />,
      color: 'from-teal-600 to-cyan-600',
      desc: 'olive green computing, renewable energy systems, and environmental solutions for sustainability',
      areas: ['Smart Grid', 'Energy Optimization', 'Environmental Monitoring', 'Waste Management', 'Carbon Capture Tech', 'Circular Economy']
    },
    {
      title: 'Healthcare Technology',
      icon: <Microscope className="w-6 h-6" />,
      color: 'from-indigo-600 to-purple-600',
      desc: 'Medical devices, health informatics, and telemedicine solutions for better healthcare',
      areas: ['Medical Imaging', 'Wearable Health Devices', 'Telemedicine', 'Drug Discovery', 'Bioinformatics', 'Digital Therapeutics']
    },
    {
      title: 'Quantum Computing',
      icon: <Atom className="w-6 h-6" />,
      color: 'from-violet-600 to-purple-600',
      desc: 'Quantum algorithms, quantum machine learning, and quantum simulation for breakthrough computing',
      areas: ['Quantum Algorithms', 'Quantum Machine Learning', 'Quantum Simulation', 'Quantum Cryptography', 'Quantum Hardware', 'Error Correction']
    },
    {
      title: 'Blockchain Technology',
      icon: <Layers className="w-6 h-6" />,
      color: 'from-orange-600 to-red-600',
      desc: 'Distributed ledger technology, smart contracts, and decentralized applications',
      areas: ['Smart Contracts', 'DeFi', 'NFTs', 'Supply Chain', 'Digital Identity', 'Consensus Mechanisms']
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Problem Identification',
      desc: 'Identify real-world problems and research gaps through systematic literature review and industry analysis',
      icon: Search,
      color: 'from-blue-600 to-cyan-600',
      deliverables: ['Literature Review', 'Gap Analysis', 'Problem Statement', 'Research Questions']
    },
    {
      step: '02',
      title: 'Research Planning',
      desc: 'Develop comprehensive research methodology, timeline, and resource allocation for systematic investigation',
      icon: FileText,
      color: 'from-olive green-600 to-emerald-600',
      deliverables: ['Methodology Design', 'Timeline Planning', 'Resource Allocation', 'Ethics Approval']
    },
    {
      step: '03',
      title: 'Prototype Development',
      desc: 'Build proof-of-concept solutions using cutting-edge technologies and frameworks for validation',
      icon: Code,
      color: 'from-purple-600 to-pink-600',
      deliverables: ['Proof of Concept', 'Minimum Viable Product', 'Technical Documentation', 'Architecture Design']
    },
    {
      step: '04',
      title: 'Testing & Validation',
      desc: 'Rigorous testing, performance evaluation, and validation against industry standards and benchmarks',
      icon: Beaker,
      color: 'from-olive green-600 to-orange-600',
      deliverables: ['Test Reports', 'Performance Metrics', 'Benchmark Results', 'Validation Studies']
    },
    {
      step: '05',
      title: 'Publication & Patent',
      desc: 'Document findings in research papers, conferences, and patent applications for IP protection',
      icon: FileText,
      color: 'from-indigo-600 to-purple-600',
      deliverables: ['Research Papers', 'Conference Presentations', 'Patent Filings', 'Technical Reports']
    },
    {
      step: '06',
      title: 'Commercialization',
      desc: 'Transform research outcomes into market-ready products and solutions for real-world impact',
      icon: Rocket,
      color: 'from-red-600 to-rose-600',
      deliverables: ['Market Analysis', 'Business Model', 'Product Launch', 'Industry Partnerships']
    }
  ];

  const tools = [
    { category: 'AI/ML', icon: Brain, tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Keras', 'Pandas', 'Hugging Face', 'JAX'] },
    { category: 'IoT', icon: Network, tools: ['Arduino', 'Raspberry Pi', 'ESP32', 'Node-RED', 'ThingSpeak', 'AWS IoT', 'MQTT', 'LoRaWAN'] },
    { category: 'Robotics', icon: Bot, tools: ['ROS', 'Gazebo', 'MATLAB/Simulink', 'V-REP', 'OpenRAVE', 'MoveIt', 'Webots', 'PyBullet'] },
    { category: 'Cloud/DevOps', icon: Cloud, tools: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'GitHub Actions'] },
    { category: 'Data Science', icon: Database, tools: ['Python', 'R', 'Jupyter', 'Tableau', 'Power BI', 'Apache Spark', 'Hadoop', 'SQL'] },
    { category: 'Blockchain', icon: Layers, tools: ['Ethereum', 'Hyperledger', 'Solana', 'Polkadot', 'Web3.js', 'Truffle', 'Hardhat', 'IPFS'] }
  ];

  const projects = rndData.projects;

  // Group projects hierarchically
  const projectGroups = {
    "GSIN": {
      title: "GSIN - Global Student Industry Network",
      desc: "Large-scale virtual learning ecosystem connecting students with industry",
      projects: projects.filter(p => p.id === "gsin-global-student-industry-network")
    },
    "Virtual Projects": {
      title: "Virtual Projects",
      desc: "2D digital twins and virtual collaboration platforms",
      projects: projects.filter(p => ["virtual-office", "virtual-industry", "virtual-campus"].includes(p.id))
    },
    "Stackenzo Eye Vision": {
      title: "Stackenzo Eye Vision",
      desc: "AI-powered surveillance and computer vision solutions",
      projects: projects.filter(p => ["ai-attendance-monitoring", "ai-class-lab-assistance", "stackenzo-retro-tracking", "stackenzo-person-tracking-alert"].includes(p.id))
    }
  };

  const outcomes = [
    { icon: <FileText className="w-8 h-8" />, title: 'Research Papers', count: '50+', desc: 'Published in top-tier conferences and journals', color: 'from-blue-600 to-cyan-600' },
    { icon: <Award className="w-8 h-8" />, title: 'Patents Filed', count: '25+', desc: 'Intellectual property protection for innovations', color: 'from-purple-600 to-pink-600' },
    { icon: <Rocket className="w-8 h-8" />, title: 'Products Launched', count: '15+', desc: 'Commercial products derived from research', color: 'from-orange-600 to-red-600' },
    { icon: <Users className="w-8 h-8" />, title: 'Industry Partners', count: '30+', desc: 'Collaborations with leading companies', color: 'from-olive green-600 to-emerald-600' }
  ];

  const eligibility = [
    {
      category: 'Students',
      icon: GraduationCap,
      color: 'from-blue-600 to-cyan-600',
      requirements: ['Final year B.Tech/M.Tech students', 'Strong academic record (CGPA > 7.5)', 'Passion for research and innovation', 'Basic programming knowledge', 'Research proposal submission'],
      duration: '6-12 months',
      stipend: '₹15,000 - ₹25,000/month'
    },
    {
      category: 'Professionals',
      icon: Briefcase,
      color: 'from-olive green-600 to-emerald-600',
      requirements: ['2+ years industry experience', 'Relevant technical background', 'Commitment to research goals', 'Available for part-time engagement', 'Industry problem proposal'],
      duration: '3-6 months',
      stipend: '₹30,000 - ₹50,000/month'
    },
    {
      category: 'Researchers',
      icon: Microscope,
      color: 'from-purple-600 to-pink-600',
      requirements: ['PhD/Post-doc candidates', 'Published research experience', 'Domain expertise', 'Full-time availability', 'Research grant proposal'],
      duration: '12-24 months',
      stipend: '₹50,000 - ₹80,000/month'
    }
  ];

  const faqs = [
    {
      q: "What is the selection process for R&D programs?",
      a: "Selection involves application review, technical interview, and project proposal presentation. We evaluate technical skills, research aptitude, and commitment to the research area."
    },
    {
      q: "Do I get paid during the R&D program?",
      a: "Yes, we provide competitive stipends for all researchers based on their qualifications and experience. Performance-based incentives are also available for exceptional contributions."
    },
    {
      q: "Can I publish research papers from the work?",
      a: "Absolutely! We strongly encourage publication and provide full support for conference submissions, journal publications, and presentation opportunities."
    },
    {
      q: "What happens to intellectual property rights?",
      a: "IP rights are shared between Stackenzo and researchers based on contribution levels, with clear agreements signed upfront. We follow industry-standard IP policies."
    },
    {
      q: "Is remote participation possible?",
      a: "Yes, many projects support remote work with virtual collaboration tools. However, some hardware-intensive projects may require occasional on-site presence."
    },
    {
      q: "What kind of mentorship will I receive?",
      a: "Each researcher is assigned a dedicated mentor (PhD holder or industry expert) who provides weekly one-on-one guidance, technical reviews, and career advice."
    }
  ];

  const publications = [
    { year: '2024', count: 8, venue: 'CVPR, NeurIPS, ICML' },
    { year: '2023', count: 12, venue: 'ICCV, ECCV, AAAI' },
    { year: '2022', count: 10, venue: 'ICRA, IROS, RSS' },
    { year: '2021', count: 7, venue: 'CHI, UIST, DIS' }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated Research Elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <motion.div
            animate={{ rotate: 360, y: [0, -20, 0] }}
            transition={{ rotate: { repeat: Infinity, duration: 8 }, y: { repeat: Infinity, duration: 4 } }}
            className="text-6xl opacity-20"
          >
            🧬
          </motion.div>
        </div>

        <div className="absolute top-32 right-16 hidden lg:block">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-5xl opacity-20"
          >
            🔬
          </motion.div>
        </div>

        <div className="absolute bottom-24 left-20 hidden lg:block">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-4xl opacity-20"
          >
            ⚛️
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-24 hidden lg:block">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 360] }}
            transition={{ y: { repeat: Infinity, duration: 4 }, rotate: { repeat: Infinity, duration: 10 } }}
            className="text-5xl opacity-20"
          >
            🧠
          </motion.div>
        </div>

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
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 shadow-sm"
            >
              <Microscope className="w-4 h-4 sm:w-5 sm:h-5 text-olive green-600" />
              <span className="text-sm sm:text-base text-olive green-600 font-semibold">Research & Development Division</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-olive green-600/50" />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2">
              <span className="text-gray-900">
                Engineering Innovation
              </span>
              <br />
              <span className="text-olive green-600">
                Through Applied Research
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              We Explore, Experiment and Engineer cutting-edge solutions that transform real-world challenges into scalable technological breakthroughs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 mb-12 sm:mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/Career'}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-olive green-600 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-olive green-700 transition-all shadow-md hover:shadow-lg"
              >
                Apply for R&D Program
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-olive green-600 text-olive green-600 rounded-full text-sm sm:text-base font-semibold hover:bg-olive green-600 hover:text-white transition-all"
              >
                Explore Research Projects
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="flex flex-col items-center gap-1 group">
            <span className="text-[10px] sm:text-xs text-gray-400 mb-1 group-hover:text-olive green-600 transition-colors">
              Explore Research
            </span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-olive green-600" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {outcomes.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-olive green-600/50 transition-all text-center group shadow-sm hover:shadow"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform border border-${stat.color.split('-')[1]}-200`}>
                  <div className={`text-${stat.color.split('-')[1]}-600`}>{stat.icon}</div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.count}</div>
                <div className="text-xs sm:text-sm font-semibold text-olive green-600 mb-1">{stat.title}</div>
                <p className="text-[10px] sm:text-xs text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-olive green-600">
              Research Domains
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Exploring cutting-edge technologies across multiple disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {researchDomains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-olive green-600/50 relative overflow-hidden shadow-sm hover:shadow"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${domain.color} bg-opacity-10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform border border-${domain.color.split('-')[1]}-200`}>
                    <div className={`text-${domain.color.split('-')[1]}-600`}>{domain.icon}</div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-olive green-600 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">{domain.desc}</p>
                  <div className="space-y-1">
                    {domain.areas.slice(0, 4).map((area, j) => (
                      <div key={j} className="flex items-center gap-1 sm:gap-2">
                        <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-olive green-600 flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research GIF Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-olive green-600 mb-4">
                Innovation Through Research
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Our Research & Development division focuses on cutting-edge technology solutions
                that address real-world challenges. We combine academic rigor with industry
                relevance to create impactful innovations that shape the future.
              </p>
              <div className="space-y-3">
                {[
                  'Problem-focused research addressing industry challenges',
                  'Rapid prototyping and iterative development',
                  'Publication in top-tier conferences and journals',
                  'Technology transfer and commercialization'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-olive green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all" />
                <div className="relative bg-white p-3 sm:p-4 rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif"
                    alt="Research and Innovation"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-lg">
                    <p className="text-olive green-400 font-semibold text-sm sm:text-base">Research & Innovation Lab</p>
                    <p className="text-gray-300 text-xs">Pushing the boundaries of technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-olive green-600">
              Research Methodology
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              A systematic approach to research and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {methodology.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-olive green-600/50 relative overflow-hidden shadow-sm hover:shadow"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center text-xs sm:text-sm font-bold text-${step.color.split('-')[1]}-600 border border-${step.color.split('-')[1]}-200`}>
                      {step.step}
                    </div>
                    <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${step.color.split('-')[1]}-600`} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">{step.desc}</p>
                  <div className="space-y-1">
                    {step.deliverables.map((item, j) => (
                      <div key={j} className="flex items-center gap-1">
                        <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-olive green-600 flex-shrink-0" />
                        <span className="text-[10px] sm:text-xs text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-olive green-600">
                Research Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming real-world challenges through innovative research
            </p>
          </motion.div>

          {/* Projects Accordion */}
          <div className="space-y-4">
            {Object.entries(projectGroups).map(([groupKey, group], groupIndex) => {
              const isExpanded = expandedGroups[groupKey];
              return (
                <motion.div
                  key={groupKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  {/* Project Group Header */}
                  <motion.div
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedGroups(prev => ({ ...prev, [groupKey]: !prev[groupKey] }))}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Project Count Badge */}
                        <div className="w-10 h-10 bg-olive green-600 rounded-lg flex items-center justify-center text-white font-bold">
                          {groupIndex + 1}
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                            {group.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {group.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="hidden sm:inline text-sm text-gray-500">
                          {group.projects.length} {group.projects.length === 1 ? 'project' : 'projects'}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200"
                        >
                          <ChevronDown className="w-5 h-5 text-olive green-600" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Expandable Projects Grid */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {group.projects.map((project, i) => (
                              <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                <Link to={`/R_AND_D/${project.id}`}>
                                  <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-olive green-600/50 transition-all group/project shadow-sm hover:shadow">
                                    {/* Domain Tag */}
                                    <div className="flex items-center justify-between mb-3">
                                      <span className="text-xs font-medium text-olive green-600 bg-olive green-50 px-2.5 py-1 rounded-full border border-olive green-200">
                                        {project.domain}
                                      </span>
                                      <span className="text-xs text-gray-500">
                                        {project.timeline}
                                      </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover/project:text-olive green-600 transition-colors">
                                      {project.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                      {project.desc}
                                    </p>

                                    {/* Impact Preview */}
                                    <div className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-200">
                                      <p className="text-xs text-gray-700 line-clamp-1">
                                        <span className="text-olive green-600 font-medium">Impact: </span>
                                        {project.impact}
                                      </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Users className="w-3.5 h-3.5" />
                                        <span>{project.teamSize}</span>
                                      </div>
                                      <span className="text-xs text-olive green-600 group-hover/project:underline">
                                        View Details →
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-olive green-600">
              Who Can Apply
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Opportunities for students, professionals, and researchers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {eligibility.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-olive green-600/50 relative overflow-hidden shadow-sm hover:shadow"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10 flex items-center justify-center mb-3 sm:mb-4 border border-${item.color.split('-')[1]}-200`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${item.color.split('-')[1]}-600`} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{item.category}</h3>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-600">
                        <Clock className="w-3 h-3" />
                        <span>Duration: {item.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {item.requirements.map((req, j) => (
                        <div key={j} className="flex items-start gap-1">
                          <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-olive green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-[10px] sm:text-xs text-gray-600">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-olive green-600">
              Mentorship & Collaboration
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Guided by experts, powered by collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-200">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Industry Experts</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Guidance from seasoned professionals with decades of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-olive green-50 rounded-lg flex items-center justify-center border border-olive green-200">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-olive green-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Academic Advisors</h3>
                  <p className="text-xs sm:text-sm text-gray-600">PhD holders and research scientists providing academic rigor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-200">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Peer Learning</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Collaborative research environment with cross-domain exposure</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <h3 className="text-sm sm:text-base font-bold text-olive green-600 mb-3 sm:mb-4">Collaboration Benefits</h3>
              <div className="space-y-2">
                {[
                  'Weekly one-on-one mentoring sessions',
                  'Access to research publications and resources',
                  'Networking with industry professionals',
                  'Conference presentation opportunities',
                  'Co-authorship on research papers',
                  'Career guidance and placement support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-olive green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-olive green-600">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Got questions about our R&D program?
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-olive green-600/50 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all gap-2"
                >
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 pr-2">{faq.q}</h3>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-olive green-600 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-gray-100">
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-olive green-600" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072')] bg-cover bg-center mix-blend-overlay opacity-20" />

            <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                Collaborate on the Future of Innovation
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Join our research initiatives and turn visionary ideas into impactful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/Career'}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-olive green-600 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
                >
                  Apply for R&D Program
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/research-projects', '_blank')}
                  className="group relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full text-sm sm:text-base font-semibold hover:bg-white hover:text-olive green-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  Explore Research Projects
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <RNDApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
      />

      <Footer />
    </div>
  );
}

export default RND;