import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Bot, Heart, Sparkles, Users, Clock, Target, ChevronDown,
  Brain, Rocket, Trophy, Star, BookOpen, Zap, Award,
  Smile, Lightbulb, Compass, GraduationCap, Gamepad2,
  MessageCircle, ChevronRight, CheckCircle, X,
  School, UsersRound, HandHeart, Shield, TrendingUp,
  Calendar, BookMarked
} from "lucide-react";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RoboticsEnrollmentModal from "./RoboticsEnrollmentModal";

function Robotics() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classProgression = [
    {
      level: "Foundation Level",
      title: "Explore & Play",
      icon: "🎮",
      color: "blue",
      points: [
        "Introduction to robotics through games",
        "Free exploration and curiosity-based learning",
        "Touch, build, and experiment"
      ],
      benefit: "Students discover the joy of building and creating"
    },
    {
      level: "Intermediate Level",
      title: "Think & Control",
      icon: "🧠",
      color: "green",
      points: [
        "Simple logic and control",
        "Understanding how ideas become actions",
        "Fun challenges and teamwork"
      ],
      benefit: "Students develop logical thinking skills"
    },
    {
      level: "Advanced Level",
      title: "Solve & Create",
      icon: "⚙️",
      color: "purple",
      points: [
        "Small real-life problem-solving projects",
        "Structured thinking",
        "Team-based activities"
      ],
      benefit: "Students learn to solve real problems confidently"
    },
    {
      level: "Master Level",
      title: "Design & Innovate",
      icon: "🚀",
      color: "orange",
      points: [
        "Designing solutions",
        "Creative thinking",
        "Confidence and presentation skills"
      ],
      benefit: "Students become confident creators and innovators"
    }
  ];

  const faqs = [
    {
      q: "Why start robotics from Class 6?",
      a: "Class 6 is the perfect age where curiosity is at its peak, independent thinking begins, and students love exploring. Starting early helps them grow with technology naturally instead of learning it later with fear."
    },
    {
      q: "How many hours per week?",
      a: "Only 1-3 hours per week. We believe learning doesn't need long hours—it needs the right experience. This ensures no academic burden and high excitement for every session."
    },
    {
      q: "Are there exams or marks?",
      a: "No exams. No fear of marks. Only curiosity, exploration, and confidence building. Robotics here is a play-and-learn experience where mistakes are allowed and encouraged as learning opportunities."
    },
    {
      q: "What will students learn?",
      a: "Students will develop problem-solving ability, logical and creative thinking, teamwork, communication, and confidence to express ideas—skills that stay with them for life."
    }
  ];

 const benefits = [
  { icon: Brain, title: "Sharper Thinking", desc: "Watch them figure out challenges on their own" },
  { icon: Rocket, title: "Confidence to Create", desc: "From 'I can't' to 'I built this!'" },
  { icon: Trophy, title: "Learning Together", desc: "Collaboration skills that last a lifetime" },
  { icon: Star, title: "Future-Ready Skills", desc: "Early exposure to tomorrow's technology" }
];

  const stats = [
    { icon: Users, value: "500+", label: "Students Enrolled" },
    { icon: Clock, value: "1-3 hrs", label: "Per Week" },
    { icon: Trophy, value: "50+", label: "Projects Built" },
    { icon: Smile, value: "98%", label: "Happy Students" }
  ];

  const whyChoose = [
    { icon: HandHeart, title: "Stress-Free Learning", desc: "No exams, no pressure—just pure joy of discovery" },
    { icon: TrendingUp, title: "Future-Ready Skills", desc: "Prepare students for tomorrow's world" },
    { icon: Shield, title: "Safe Environment", desc: "Guided learning in a supportive atmosphere" },
    { icon: BookMarked, title: "Structured Curriculum", desc: "Ready-to-use program that fits any schedule" }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Toaster position="top-center" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-indigo-900/40" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Animated Robot Icons */}
        <div className="absolute top-40 right-20 hidden lg:block">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-7xl opacity-30"
          >
            🤖
          </motion.div>
        </div>

        <div className="absolute bottom-40 left-20 hidden lg:block">
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            className="text-7xl opacity-30"
          >
            🦾
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6"
            >
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span className="text-sm sm:text-base text-yellow-400 font-semibold">School Robotics Program</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400/50" />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 px-2">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Where Young Minds
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Build the Future
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 px-4">
              Where Learning Feels Like Play and Ideas Come Alive
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8 px-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:border-yellow-400/30 transition-all"
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all inline-flex items-center gap-2 group"
            >
              <span>Enroll Now</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-12"
            >
              <button
                onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <span className="text-xs sm:text-sm">Learn More</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              We introduce robotics at the school level to help students learn technology in the most enjoyable way possible.
              Our program is specially designed for <span className="text-yellow-400 font-semibold">Classes 6 to 9</span>, where learning happens naturally through fun, games, and hands-on activities — not pressure or exams.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-2 border-yellow-400 rounded-2xl p-6 sm:p-8"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">
                Students look forward to every session — not as a subject, but as an adventure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Program */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
          >
            Why Choose Our Robotics Program
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 hover:border-yellow-400/50 transition-all"
              >
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Students */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
          >
            What Students Gain
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 hover:border-yellow-400/50 transition-all"
              >
                <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Robot GIF Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                Experience Hands-On Robotics
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                Watch students bring robots to life! From basic movements to complex
                autonomous behaviors, our robotics education program transforms theoretical
                knowledge into practical skills.
              </p>
              <div className="space-y-3">
                {[
                  "Interactive robot programming",
                  "Real-time sensor integration",
                  "Autonomous navigation systems",
                  "Team-based challenges"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right GIF */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all" />
                <div className="relative bg-gray-800 p-3 sm:p-4 rounded-2xl border border-gray-700">
                  <img
                    src="https://media.giphy.com/media/5k5vZwRFZR5aZeniqb/giphy.gif"
                    alt="Robot in action"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBkNjBmNzg5ZjE3YzI3ZjI3ZjI3ZjI3ZjI3ZjI3ZjI3ZjI3ZjI3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif";
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-lg">
                    <p className="text-yellow-400 font-semibold text-sm sm:text-base">Live Robot Demo</p>
                    <p className="text-gray-300 text-xs">See robotics in action</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Start Early */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
          >
            Where Questions Turn into Robots
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl text-gray-300 mb-6">This is the moment curiosity takes flight:</p>
              <div className="space-y-3">
                {[
                  { icon: Lightbulb, text: "Curiosity is at its peak" },
                  { icon: Brain, text: "Independent thinking begins" },
                  { icon: Compass, text: "Students love exploring and experimenting" },
                  { icon: Gamepad2, text: "Learning through play works best" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-gray-700 p-4 rounded-lg hover:bg-gray-650 transition-all"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-600"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-6">
                Students will:
              </h3>
              <div className="space-y-4">
                {[
                  "Think logically and creatively",
                  "Understand how things work",
                  "Build confidence early",
                  "Grow comfortably with technology"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-yellow-400 mt-6 font-semibold">
                Instead of learning technology later with fear, students grow with it naturally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weekly Hours Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-400">
              No academic burden — just pure learning joy
            </h2>
            {/* <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-semibold">
              No academic burden — just pure learning joy
            </p> */}

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "No academic burden",
                "No stress or overload",
                "High excitement for every session",
                "Better focus and interest"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-yellow-400/30 transition-all"
                >
                  <p className="text-sm sm:text-base text-white">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-gradient-to-r from-yellow-400/10 to-orange-400/10 p-6 rounded-xl border border-yellow-400/30"
            >
              <p className="text-lg sm:text-xl text-yellow-400 font-bold">
                Students wait for robotics class — they never feel forced to attend it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fun Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
          >
            More Fun Than a Game Period
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {[
              { icon: "🎮", text: "More exciting than a game period" },
              { icon: "🤝", text: "More interactive than a normal class" },
              { icon: "🎯", text: "More engaging than theory-based learning" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all text-center"
              >
                <div className="text-4xl sm:text-5xl mb-3">{item.icon}</div>
                <p className="text-sm sm:text-base font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
          >
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4 text-center">Students:</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {[
                "Build robots with their own hands",
                "Play with sensors, motors, and mechanisms",
                "Solve challenges like games",
                "Learn by doing, not memorizing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg sm:text-xl text-center text-yellow-400 font-bold mt-4">
              Here, fun itself becomes the learning process.
            </p>
          </motion.div> */}
        </div>
      </section>

      {/* Class Progression with Levels */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-4 text-yellow-400"
          >
            Learning Journey with 4 Levels of Progression
          </motion.h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A progressive 4-level program designed to build skills step by step
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {classProgression.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedClass(selectedClass === i ? null : i)}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border-2 transition-all cursor-pointer ${selectedClass === i
                    ? 'border-yellow-400 shadow-lg shadow-yellow-400/20'
                    : 'border-gray-700 hover:border-yellow-400/50'
                  }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                    <h3 className="text-base sm:text-lg font-semibold text-yellow-400">{item.level}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-yellow-400 transition-transform ${selectedClass === i ? 'rotate-180' : ''}`} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h4>

                {/* Preview */}
                {selectedClass !== i && (
                  <p className="text-xs sm:text-sm text-gray-400 italic">
                    {item.benefit}
                  </p>
                )}

                <AnimatePresence>
                  {selectedClass === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-3 overflow-hidden mt-3"
                    >
                      {/* Learning Points */}
                      <div className="space-y-2">
                        {item.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-yellow-400 mt-1 flex-shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </div>

                      {/* Benefit Message */}
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-sm text-yellow-400 font-medium">
                          {item.benefit}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {selectedClass !== i && (
                  <p className="text-xs text-gray-400 mt-2">Click to expand</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-center text-yellow-400 mt-8 font-bold"
          >
            Each level adds skills and confidence, not pressure.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-yellow-400"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-700 rounded-xl border border-gray-600 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center hover:bg-gray-650 transition-all gap-3"
                >
                  <h3 className="font-semibold text-white text-sm sm:text-base md:text-lg pr-2">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-yellow-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-yellow-400">Our Philosophy</h2>

            <div className="grid grid-cols-5 gap-2 mb-6">
              {[
                { icon: "🌱", text: "Start early" },
                { icon: "🪶", text: "Keep light" },
                { icon: "🎉", text: "Make fun" },
                { icon: "⏰", text: "Limit hours" },
                { icon: "🔍", text: "Curiosity" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/15 transition-all"
                >
                  <div className="text-2xl sm:text-3xl mb-1">{item.icon}</div>
                  <p className="text-[10px] sm:text-xs font-medium text-gray-200">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4"
            >
              <p className="text-sm sm:text-base font-semibold text-yellow-400">
                When learning feels like play, students don't just learn — they thrive.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Give Your Child the Gift of Joyful Learning
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join our robotics program for Classes 6–9 where learning feels like play and curiosity leads the way.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-yellow-400 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-900 transition-all inline-flex items-center gap-2 group"
            >
              <span>Enroll Your Child Now</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <RoboticsEnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}

export default Robotics;