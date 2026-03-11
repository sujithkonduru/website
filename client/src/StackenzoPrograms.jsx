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
        gradient: "from-[#1E301E] to-[#2E7D32]",
        lightBg: "bg-[#E8F5E9]",
        color: "[#1E301E]",
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
        gradient: "from-[#1E301E] to-[#2E7D32]",
        lightBg: "bg-[#E8F5E9]",
        color: "[#1E301E]",
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
        gradient: "from-[#D4AF37] to-[#D4AF37]",
        lightBg: "bg-[#E8F5E9]",
        color: "[#D4AF37]",
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
          { name: "Junior (Class 6)", icon: "🤖", color: "[#D4AF37]" },
          { name: "Intermediate (Class 6 - Class 8)", icon: "⚙️", color: "[#2E7D32]" },
          { name: "Advanced (Class 9)", icon: "🚀", color: "[#1E301E]" }
        ],
        stats: { students: "700+", projects: "1000+", comps: "15+" },
        link: "/Robotics"
      }
    }
  };

  return (
    <div className="bg-white text-[#1A1A1A] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 mb-8 shadow-sm">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm font-semibold text-[#1E301E]">Future-Ready Learning</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-[#1A1A1A]">Stackenzo</span>
              <br />
              <span className="text-[#1E301E]">
                Programs
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#1A1A1A] max-w-3xl mx-auto leading-relaxed mb-12">
              Where young minds transform into innovators through hands-on learning and real-world experience
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: GraduationCap, value: "1200+", label: "Students", color: "text-[#1E301E]" },
                { icon: BookOpen, value: "15+", label: "Programs", color: "text-[#2E7D32]" },
                { icon: Award, value: "95%", label: "Success Rate", color: "text-[#1E301E]" },
                { icon: Star, value: "4.9/5", label: "Rating", color: "text-[#D4AF37]" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow transition-all"
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-xl font-bold text-[#1A1A1A]">{stat.value}</div>
                  <div className="text-sm text-[#1A1A1A]">{stat.label}</div>
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
          <div className="w-6 h-10 border-2 border-[#D4AF37]/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#D4AF37] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 p-1 bg-[#E8F5E9] rounded-xl border border-gray-200">
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
                    ? 'bg-[#1E301E] text-white shadow-md'
                    : 'text-[#1A1A1A] hover:text-[#1E301E] hover:bg-white'
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
        <section className="py-12 px-4 sm:px-6 bg-[#E8F5E9]">
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
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden h-full hover:border-[#D4AF37] transition-colors shadow-sm hover:shadow">
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r from-[#1E301E] to-[#2E7D32] flex items-center justify-center shadow-md`}>
                          <div className="text-white">{program.icon}</div>
                        </div>
                        <div className="flex gap-2">
                          {program.topics.slice(0, 2).map((topic, i) => (
                            <span key={i} className="px-2 py-1 bg-[#E8F5E9] rounded-lg text-xs flex items-center gap-1 text-[#1A1A1A] border border-gray-200">
                              {topic.icon}
                              {topic.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-bold mb-3 text-[#1E301E]">
                        {program.title}
                      </h3>
                      <p className="text-[#1A1A1A] mb-6 leading-relaxed">{program.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {program.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                            <span className="text-sm text-[#1A1A1A]">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-[#E8F5E9] rounded-xl border border-gray-200">
                        {Object.entries(program.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-[#1E301E]">{value}</div>
                            <div className="text-xs text-[#1A1A1A] capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link to={program.link}>
                        <button className="w-full py-3 bg-[#1E301E] text-white rounded-xl font-semibold hover:bg-[#2E7D32] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
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
        <section className="py-12 px-4 sm:px-6 bg-[#E8F5E9]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-colors shadow-sm hover:shadow">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] flex items-center justify-center shadow-md`}>
                      {programs.school.robotics.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-[#1E301E]">
                        {programs.school.robotics.title}
                      </h3>
                      <p className="text-[#1A1A1A]">{programs.school.robotics.description}</p>
                    </div>
                  </div>

                  {/* Features & Topics */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                        Program Features
                      </h4>
                      {programs.school.robotics.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                          <span className="text-[#1A1A1A]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Topics */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-[#D4AF37]" />
                        What You'll Learn
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {programs.school.robotics.topics.map((topic, i) => (
                          <div key={i} className="bg-[#E8F5E9] p-3 rounded-lg border border-gray-200">
                            <div className="text-[#1E301E] mb-1">{topic.icon}</div>
                            <div className="text-xs text-[#1A1A1A]">{topic.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Age Groups */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">Age Groups</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {programs.school.robotics.levels.map((level, i) => (
                        <div key={i} className="bg-[#E8F5E9] p-4 rounded-lg border border-gray-200 text-center hover:border-[#D4AF37] transition-colors">
                          <div className="text-2xl mb-2">{level.icon}</div>
                          <div className="text-sm font-medium text-[#1A1A1A]">{level.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#E8F5E9] rounded-xl border border-gray-200">
                    <div className="flex gap-6">
                      {Object.entries(programs.school.robotics.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-[#D4AF37]">{value}</div>
                          <div className="text-xs text-[#1A1A1A] capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <Link to={programs.school.robotics.link}>
                      <button className="px-6 py-3 bg-gradient-to-r from-[#1E301E] to-[#2E7D32] text-white rounded-lg font-semibold hover:from-[#2E7D32] hover:to-[#1E301E] transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
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
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#1E301E] to-[#2E7D32] rounded-3xl overflow-hidden">
            <div className="px-8 py-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Begin Your Journey?
                </h2>
                
                <p className="text-lg text-white/90 mb-8">
                  Join hundreds of students who have transformed their careers through our programs
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/Contact">
                    <button className="px-8 py-3 bg-white text-[#1E301E] rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
                      Get Started Today
                    </button>
                  </Link>
                  <Link to="/Contact">
                    <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1E301E] transition-colors flex items-center justify-center gap-2">
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
                    <div key={i} className="flex items-center gap-2 text-white/80">
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