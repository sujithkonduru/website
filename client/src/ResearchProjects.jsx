import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, Lightbulb, Users, Award, ChevronDown, Target, Zap, BookOpen,
  Microscope, Atom, Beaker, FlaskConical, Cpu, Globe2, Network,
  Sparkles, CheckCircle, Rocket, TrendingUp, Clock, HeadphonesIcon,
  FileText, GraduationCap, Building2, Briefcase, Share2, BookMarked,
  Layers, Code, Database, Cloud, Shield, Bot, Brain, FolderOpen, ChevronRight, ArrowLeft
} from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import rndData from "./data/rndData.json";

function ResearchProjects() {
  const [expandedGroups, setExpandedGroups] = useState({});

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

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link
              to="/R_AND_D"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-yellow-400/50 rounded-lg text-gray-300 hover:text-yellow-400 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to R&D Division</span>
            </Link>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6"
              >
                <Microscope className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span className="text-sm sm:text-base text-yellow-400 font-semibold">Research & Development Division</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400/50" />
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
                Research Projects
              </h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                Innovative research initiatives transforming real-world challenges into intelligent solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          {Object.entries(projectGroups).map(([groupKey, group], groupIndex) => {
            const isExpanded = expandedGroups[groupKey];
            return (
              <motion.div
                key={groupKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.15 }}
                className="mb-8 last:mb-0"
              >
                {/* Main Project Header - Enhanced Card Style */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                  onClick={() => setExpandedGroups(prev => ({ ...prev, [groupKey]: !prev[groupKey] }))}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/30 transition-all duration-300">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Project Number Badge */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-black font-bold text-lg sm:text-xl">
                          {(groupIndex + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            {group.title}
                          </h3>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors flex-shrink-0"
                          >
                            <ChevronDown className="w-5 h-5 text-yellow-400" />
                          </motion.div>
                        </div>

                        <p className="text-sm sm:text-base text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                          {group.desc}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mt-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-medium">
                            <FolderOpen className="w-3 h-3" />
                            {group.projects.length} {group.projects.length === 1 ? 'Project' : 'Projects'}
                          </span>
                          <span className="text-xs text-gray-500">
                            Click to {isExpanded ? 'collapse' : 'expand'} section
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Expandable Subprojects - Improved Grid */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pl-4 sm:pl-8 border-l-2 border-yellow-400/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                          {group.projects.map((project, i) => (
                            <motion.div
                              key={project.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ y: -5 }}
                              className="group/project"
                            >
                              <Link to={`/R_AND_D/${project.id}`}>
                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 h-full overflow-hidden">
                                  {/* Hover Gradient Overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover/project:opacity-100 transition-opacity duration-300" />

                                  <div className="relative p-5 sm:p-6">
                                    {/* Header Badges */}
                                    <div className="flex items-start justify-between mb-3">
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        {project.domain}
                                      </span>
                                      <span className="text-xs text-gray-500 bg-gray-800/80 px-2 py-1 rounded-full border border-gray-700">
                                        {project.timeline}
                                      </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover/project:text-yellow-400 transition-colors line-clamp-2">
                                      {project.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2">
                                      {project.desc}
                                    </p>

                                    {/* Impact Card */}
                                    <div className="bg-gray-800/80 p-3 rounded-lg border border-gray-700 mb-4">
                                      <p className="text-[10px] sm:text-xs text-green-400 font-semibold mb-1 flex items-center gap-1">
                                        <Rocket className="w-3 h-3" />
                                        Impact
                                      </p>
                                      <p className="text-[10px] sm:text-xs text-gray-300 line-clamp-2">
                                        {project.impact}
                                      </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 text-gray-500">
                                          <Users className="w-3 h-3" />
                                          <span className="text-[10px] sm:text-xs">{project.teamSize}</span>
                                        </div>
                                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                                        <span className="text-[10px] sm:text-xs text-gray-500">
                                          {project.technologies?.slice(0, 2).join(', ')}
                                          {project.technologies?.length > 2 ? '...' : ''}
                                        </span>
                                      </div>
                                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-yellow-400 group-hover/project:underline">
                                        View Details
                                        <ChevronRight className="w-3 h-3 group-hover/project:translate-x-0.5 transition-transform" />
                                      </span>
                                    </div>
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
      </section>

      <Footer />
    </div>
  );
}

export default ResearchProjects;
