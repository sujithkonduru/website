import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BookOpen, Briefcase, Rocket, ChevronRight,
  Users, Award, TrendingUp, Target, Sparkles,
  Code, Cpu, CircuitBoard, Bot, GraduationCap,
  Microscope, Zap, Globe, Clock, Star, ArrowRight,
  CheckCircle, Layers, Palette, Lightbulb,
  School,
  Presentation
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Shield } from "lucide-react";

function StackenzoPrograms() {
  const [activeTab, setActiveTab] = useState("college");

  const programs = {
    college: {
      workshops: {
        title: "Advanced Workshops",
        icon: <Presentation className="w-8 h-8" />,
        gradient: "from-blue-600 to-indigo-600",
        lightBg: "bg-blue-500/10",
        color: "blue",
        description: "Deep-dive technical workshops led by industry experts, covering cutting-edge technologies and real-world applications.",
        features: [
          "Hands-on coding sessions with real projects",
          "Industry-aligned curriculum updated quarterly",
          "Expert mentorship from working professionals",
          "Certificate of completion with project portfolio"
        ],
        topics: [
          { name: "Full-Stack Development", icon: <Code className="w-4 h-4" /> },
          { name: "Artificial Intelligence", icon: <Bot className="w-4 h-4" /> },
          { name: "Cloud Architecture", icon: <Globe className="w-4 h-4" /> },
          { name: "Cybersecurity", icon: <Shield className="w-4 h-4" /> }
        ],
        stats: { duration: "4-8 weeks", projects: "3+", students: "500+" },
        link: "/WorkShops"
      },
      internships: {
        title: "Industry Internships",
        icon: <Briefcase className="w-8 h-8" />,
        gradient: "from-emerald-600 to-teal-600",
        lightBg: "bg-emerald-500/10",
        color: "emerald",
        description: "Structured internship programs with partner companies, offering real-world experience and professional mentorship.",
        features: [
          "Paid internship opportunities with top companies",
          "One-on-one mentorship from industry veterans",
          "Real project contributions to production code",
          "Potential for full-time job offers post-internship"
        ],
        topics: [
          { name: "Software Engineering", icon: <Code className="w-4 h-4" /> },
          { name: "Product Management", icon: <Target className="w-4 h-4" /> },
          { name: "UX Design", icon: <Palette className="w-4 h-4" /> },
          { name: "Data Science", icon: <TrendingUp className="w-4 h-4" /> }
        ],
        stats: { partners: "25+", placement: "85%", stipend: "Competitive" },
        link: "/workshops"
      }
    },
    school: {
      robotics: {
        title: "Robotics Education",
        icon: <School className="w-8 h-8" />,
        gradient: "from-amber-500 to-orange-500",
        lightBg: "bg-amber-500/10",
        color: "amber",
        description: "Hands-on robotics programs that introduce students to programming, electronics, and engineering through fun projects.",
        features: [
          "Age-appropriate curriculum for grades 6 - 9",
          "Build and program real robots",
          "Participate in robotics competitions",
          "Develop problem-solving and teamwork skills"
        ],
        topics: [
          { name: "Arduino Programming", icon: <Cpu className="w-4 h-4" /> },
          { name: "Circuit Design", icon: <CircuitBoard className="w-4 h-4" /> },
          { name: "Sensor Integration", icon: <Zap className="w-4 h-4" /> },
          { name: "Mechanical Design", icon: <Layers className="w-4 h-4" /> }
        ],
        levels: [
          { name: "Junior (Class 6)", icon: "🤖", color: "amber" },
          { name: "Intermediate (Class 6 - Class 8)", icon: "⚙️", color: "orange" },
          { name: "Advanced (Class 9)", icon: "🚀", color: "red" }
        ],
        stats: { students: "700+", projects: "1000+", comps: "15+" },
        link: "/Robotics"
      }
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-gray-950"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">Future-Ready Learning</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-white">Stackenzo</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                Programs
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Where young minds transform into innovators through hands-on learning and real-world experience
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: GraduationCap, value: "1200+", label: "Students", color: "text-blue-400" },
                { icon: BookOpen, value: "15+", label: "Programs", color: "text-green-400" },
                { icon: Award, value: "95%", label: "Success Rate", color: "text-purple-400" },
                { icon: Star, value: "4.9/5", label: "Rating", color: "text-yellow-400" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-4"
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-yellow-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 p-1 bg-gray-800/50 rounded-xl border border-gray-700">
            {[
              { id: "college", label: "College Programs", icon: <GraduationCap className="w-5 h-5" /> },
              { id: "school", label: "School Programs", icon: <School className="w-5 h-5" /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* College Programs */}
      {activeTab === "college" && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(programs.college).map(([key, program], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden h-full hover:border-yellow-400/50 transition-colors">
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${program.gradient} flex items-center justify-center`}>
                          <div className="text-white">{program.icon}</div>
                        </div>
                        <div className="flex gap-2">
                          {program.topics.slice(0, 2).map((topic, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-700 rounded-lg text-xs flex items-center gap-1 text-gray-300">
                              {topic.icon}
                              {topic.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className={`text-2xl font-bold mb-3 text-${program.color}-400`}>
                        {program.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {program.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className={`w-5 h-5 text-${program.color}-400 flex-shrink-0`} />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gray-900/50 rounded-xl">
                        {Object.entries(program.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className={`text-lg font-bold text-${program.color}-400`}>{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link to={program.link}>
                        <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all flex items-center justify-center gap-2">
                          <span>Explore Program</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* School Programs */}
      {activeTab === "school" && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-colors">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${programs.school.robotics.gradient} flex items-center justify-center`}>
                      {programs.school.robotics.icon}
                    </div>
                    <div>
                      <h3 className={`text-3xl font-bold mb-2 text-${programs.school.robotics.color}-400`}>
                        {programs.school.robotics.title}
                      </h3>
                      <p className="text-gray-400">{programs.school.robotics.description}</p>
                    </div>
                  </div>

                  {/* Features & Topics */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        Program Features
                      </h4>
                      {programs.school.robotics.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Topics */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-400" />
                        What You'll Learn
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {programs.school.robotics.topics.map((topic, i) => (
                          <div key={i} className="bg-gray-700/50 p-3 rounded-lg border border-gray-600">
                            <div className="text-yellow-400 mb-1">{topic.icon}</div>
                            <div className="text-xs text-gray-300">{topic.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Age Groups */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Age Groups</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {programs.school.robotics.levels.map((level, i) => (
                        <div key={i} className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 text-center">
                          <div className="text-2xl mb-2">{level.icon}</div>
                          <div className="text-sm font-medium text-white">{level.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gray-900/50 rounded-xl">
                    <div className="flex gap-6">
                      {Object.entries(programs.school.robotics.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-amber-400">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <Link to={programs.school.robotics.link}>
                      <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all flex items-center gap-2">
                        <span>Explore Robotics</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl overflow-hidden">
            <div className="px-8 py-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-black" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Ready to Begin Your Journey?
                </h2>
                
                <p className="text-lg text-black/80 mb-8">
                  Join hundreds of students who have transformed their careers through our programs
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/Contact">
                    <button className="px-8 py-3 bg-black text-yellow-400 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                      Get Started Today
                    </button>
                  </Link>
                  <Link to="/Contact">
                    <button className="px-8 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition-colors flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      Schedule a Call
                    </button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  {[
                    { icon: Award, text: "Certified Programs" },
                    { icon: Users, text: "Expert Mentors" },
                    { icon: Star, text: "4.9/5 Rating" }
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-black/70">
                      <badge.icon className="w-4 h-4" />
                      <span className="text-sm">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default StackenzoPrograms;