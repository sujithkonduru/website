import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Users, Award, Zap, Heart, Globe, BookOpen, Briefcase, Code, TrendingUp, Rocket, Star } from "lucide-react";
import { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function About() {
  const storyRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Storytelling Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaborating on innovative projects"
            className="w-full h-full object-cover"
          />

          {/* Multi-layer cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-gray-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-blue-900/40 mix-blend-overlay"></div>

          {/* Animated vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)]"></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30l30-30M0 30l30-30M30 60L60 30M0 30l30 30' stroke='rgba(255,255,255,0.1)' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, -30, 30, -30],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Animated Background Gradients */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 40%)",
                "radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.15) 0%, transparent 40%)",
                "radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 40%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Badge with enhanced design */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              <span className="inline-block text-center px-6 py-3 
          bg-gradient-to-r from-yellow-400/20 to-orange-400/20 
          text-yellow-400 rounded-full text-sm font-semibold 
          border border-yellow-400/30 backdrop-blur-sm
          shadow-lg shadow-yellow-400/10">
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.span>{" "}
                Empowering the Next Generation of Innovators — Established 2026{" "}
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.span>
              </span>
            </motion.div>

            {/* Main Heading with enhanced typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="text-white drop-shadow-2xl">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 drop-shadow-2xl">
                Stackenzo
              </span>
            </motion.h1>

            {/* Description with enhanced readability */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10"
            >
              Bridging groundbreaking R&D, transformative IT solutions,
              and impactful EdTech experiences to turn ideas into digital reality.
            </motion.p>

            {/* Quick stats overlay for company story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { label: "Students Empowered", value: "1200+", icon: "🎓" },
                { label: "Projects Delivered", value: "150+", icon: "🚀" },
                { label: "Expert Mentors", value: "25+", icon: "👨‍🏫" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 min-w-[160px]"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-8 mt-5"
            >
              <div className="w-6 h-10 border-1 border-yellow-400/50 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

          </motion.div>
          
        </div>
      </section>

      {/* Our Story Section - Corrected Alignment */}
      <section ref={storyRef} className="py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Our Story
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Founded with a vision to bridge the gap between academic learning and industry excellence,
                  <span className="text-yellow-400 font-semibold mx-1">Stackenzo</span>
                  has emerged as a technology-driven organization committed to three core pillars:
                  groundbreaking R&D, transformative IT solutions, and impactful EdTech experiences.
                </p>
              </motion.div>

              {/* Four Pillars Grid - Comprehensive Offerings */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
                  Our Comprehensive Offerings
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Rocket className="w-6 h-6" />,
                      title: "R&D Innovation",
                      desc: "Pushing boundaries in AI/ML, IoT, robotics, and emerging technologies.",
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: <Code className="w-6 h-6" />,
                      title: "IT Services",
                      desc: "Scalable web applications and enterprise solutions for modern businesses.",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: <BookOpen className="w-6 h-6" />,
                      title: "EdTech Excellence",
                      desc: "Immersive learning platforms and industry-aligned curricula empowering thousands of learners.",
                      color: "from-yellow-500 to-orange-500"
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6" />,
                      title: "Marketing Solutions",
                      desc: "Data-driven strategies and creative excellence for powerful digital presence.",
                      color: "from-orange-500 to-red-500"
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 overflow-hidden"
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="relative z-10">
                        <div className="text-yellow-400 mb-3">{item.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed border-l-4 border-yellow-400 pl-4 italic">
                "What sets Stackenzo apart is our end-to-end ecosystem. We don't just research emerging technologies —
                we build them into enterprise solutions, teach them through immersive education, and amplify their
                reach through strategic marketing. This integrated approach ensures innovation flows from concept
                to classroom to customer seamlessly."
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-300">
                Today, Stackenzo stands as a unified technology powerhouse where
                <span className="text-yellow-400 font-semibold mx-1">groundbreaking research</span>
                fuels transformative IT solutions, where those solutions become
                <span className="text-yellow-400 font-semibold mx-1">impactful educational experiences</span>,
                and where strategic marketing ensures every innovation reaches its full potential —
                creating a continuous cycle of innovation, learning, and growth.
              </motion.p>
            </motion.div>

            {/* Right Column - Image with Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:sticky lg:top-24"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                {/* Floating Stats Cards - All five stats */}
                {/* R&D Stat */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-purple-400/30"
                >
                  <div className="flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-purple-400" />
                    <div>
                      <div className="text-2xl font-bold text-purple-400">15+</div>
                      <div className="text-xs text-gray-400">R&D Projects</div>
                    </div>
                  </div>
                </motion.div>

                {/* IT Services Stat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-20 right-6 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-blue-400/30"
                >
                  <div className="flex items-center gap-3">
                    <Code className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="text-2xl font-bold text-blue-400">50+</div>
                      <div className="text-xs text-gray-400">IT Solutions</div>
                    </div>
                  </div>
                </motion.div>

                {/* EdTech Stat */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-6 left-6 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-yellow-400/30"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-yellow-400" />
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">500+</div>
                      <div className="text-xs text-gray-400">Students Trained</div>
                    </div>
                  </div>
                </motion.div>

                {/* Marketing Stat */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-32 left-12 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-orange-400/30"
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-orange-400" />
                    <div>
                      <div className="text-2xl font-bold text-orange-400">100+</div>
                      <div className="text-xs text-gray-400">Campaigns Run</div>
                    </div>
                  </div>
                </motion.div>

                {/* Industry Partners Stat */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-6 right-6 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-green-400/30"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="text-2xl font-bold text-green-400">25+</div>
                      <div className="text-xs text-gray-400">Industry Partners</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Our Mission & Vision
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-2xl shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <Target className="w-14 h-14 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-6">
                  To design, develop, and deliver intelligent technology solutions that solve real-world problems with precision and purpose —
                  while empowering learners through strategic EdTech initiatives.
                </p>
                <ul className="space-y-3">
                  {[
                    "Building scalable, secure, and future-ready applications",
                    "Bridging the gap between theory and real-world implementation",
                    "Enabling developers, startups, and businesses to innovate faster",
                    "Creating systems that replace repetitive human effort with intelligent automation",
                    "Encouraging a culture of continuous learning and excellence"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-2xl shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />

              <div className="relative z-10">
                <Globe className="w-14 h-14 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-6">
                  To build a future where technology is not a barrier, but a bridge—connecting ideas, people, and opportunities across the world.
                </p>
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg">
                    Ultimately, Stackenzo strives to become a trusted digital backbone for next-generation products, platforms, and ideas.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {["Innovation", "Impact", "Integrity", "Inclusion"].map((word, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800/50 p-3 rounded-lg text-center border border-yellow-400/30"
                      >
                        <span className="text-yellow-400 font-semibold">{word}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do at Stackenzo
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: "Excellence",
                desc: "We strive for excellence in everything we do, from curriculum design to student support.",
                color: "from-yellow-400 to-orange-400"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Collaboration",
                desc: "We believe in the power of collaboration between students, educators, and industry partners.",
                color: "from-blue-400 to-purple-400"
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Innovation",
                desc: "We continuously innovate our teaching methods and programs to stay ahead of industry trends.",
                color: "from-green-400 to-teal-400"
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Integrity",
                desc: "We maintain the highest standards of integrity and transparency in all our operations.",
                color: "from-red-400 to-pink-400"
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Impact",
                desc: "We focus on creating meaningful impact in the lives of our students and the community.",
                color: "from-purple-400 to-indigo-400"
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Accessibility",
                desc: "We make quality education accessible to students from all backgrounds and locations.",
                color: "from-orange-400 to-red-400"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-yellow-400 mb-4 inline-block"
                >
                  {value.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.desc}</p>

                {/* Animated Border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-800 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.1) 0%, transparent 30%)",
              "radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 30%)",
              "radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.1) 0%, transparent 30%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Our Impact in Numbers
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "1200+", label: "Students Empowered", icon: Users },
              { number: "150+", label: "Projects Delivered", icon: Briefcase },
              { number: "25+", label: "Expert Mentors", icon: Award },
              { number: "20+", label: "Satisfied Clients", icon: Users }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="text-center group"
                >
                  <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-600 group-hover:border-yellow-400 transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-2 sm:mb-3">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Number */}
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                      {stat.number}
                    </div>

                    {/* Label */}
                    <div className="text-xs sm:text-sm text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Be part of a growing community of learners and innovators.
              Let's shape the future of technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/Contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-black text-yellow-400 rounded-full font-semibold
                    hover:bg-gray-900 transition-all duration-300 shadow-xl
                    flex items-center justify-center gap-2 mx-auto sm:mx-0"
                >
                  <span>Get in Touch</span>
                  <Rocket className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/StackenzoPrograms">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-black text-black rounded-full font-semibold
                    hover:bg-black hover:text-yellow-400 transition-all duration-300
                    flex items-center justify-center gap-2 mx-auto sm:mx-0"
                >
                  <span>Explore Programs</span>
                  <BookOpen className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/Services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full font-semibold
                    hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300
                    flex items-center justify-center gap-2 mx-auto sm:mx-0"
                >
                  <span>Explore Services</span>
                  <Target className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />

      {/* Add custom CSS for animations */}
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

export default About;