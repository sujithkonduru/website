import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar, MapPin, Clock, Tag, ExternalLink, Filter,
  Bell, TrendingUp, Users, Award, Zap, Target,
  ChevronRight, Star, MessageSquare, Share2, Bookmark,
  Eye, CalendarDays, Building, Rocket, Grid3X3,
  List, Archive, Download, BellRing, Sparkles,
  ChevronDown, X, Search, BookOpen, Briefcase
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [pinnedPosts, setPinnedPosts] = useState([]);
  const [showArchived, setShowArchived] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Fetch programs from API
  useEffect(() => {
    fetchPrograms();
  }, [selectedType, selectedStatus, showArchived]);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedType !== 'all') params.append('type', selectedType);
      if (selectedStatus !== 'all') params.append('status', selectedStatus);
      if (showArchived) params.append('archived', 'true');

      const response = await fetch(`http://localhost:5000/api/programs?${params}`);
      const data = await response.json();

      if (data.success) {
        setPrograms(data.programs);
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
    } finally {
      setLoading(false);
    }
  };

  const togglePin = (id) => {
    setPinnedPosts(prev =>
      prev.includes(id)
        ? prev.filter(postId => postId !== id)
        : [...prev, id]
    );
  };

  const types = [
    { value: "all", label: "All Updates", icon: "📢", color: "blue" },
    { value: "workshop", label: "Workshops", icon: "🎓", color: "green" },
    { value: "hackathon", label: "Hackathons", icon: "💻", color: "purple" },
    { value: "challenge", label: "Challenges", icon: "🏆", color: "yellow" },
    { value: "school-program", label: "School Programs", icon: "🏫", color: "pink" },
    { value: "expo", label: "Expos", icon: "🎪", color: "orange" },
    { value: "announcement", label: "Announcements", icon: "📢", color: "red" },
    { value: "partnership", label: "Partnerships", icon: "🤝", color: "teal" },
    { value: "achievement", label: "Achievements", icon: "⭐", color: "amber" }
  ];

  const statuses = [
    { value: "all", label: "All Status", icon: Eye, color: "gray" },
    { value: "upcoming", label: "Upcoming", icon: CalendarDays, color: "blue" },
    { value: "ongoing", label: "Live Now", icon: Zap, color: "green" },
    { value: "registration-open", label: "Registration Open", icon: Users, color: "yellow" },
    { value: "featured", label: "Featured", icon: Star, color: "purple" }
  ];

  // Filter and search programs
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = searchQuery === "" || 
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming": return "blue";
      case "ongoing": return "green";
      case "registration-open": return "yellow";
      case "featured": return "purple";
      default: return "gray";
    }
  };

  const getStatusGradient = (status) => {
    switch (status) {
      case "upcoming": return "from-blue-500 to-cyan-500";
      case "ongoing": return "from-green-500 to-emerald-500";
      case "registration-open": return "from-yellow-500 to-orange-500";
      case "featured": return "from-purple-500 to-pink-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getTypeColor = (type) => {
    const typeObj = types.find(t => t.value === type);
    return typeObj?.color || "gray";
  };

  const getTypeIcon = (type) => {
    const typeObj = types.find(t => t.value === type);
    return typeObj ? typeObj.icon : "📌";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const sortByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date);
  };

  const sortedPrograms = [...filteredPrograms].sort(sortByDate);

  // Pinned programs first
  const pinnedPrograms = sortedPrograms.filter(p => pinnedPosts.includes(p.id));
  const otherPrograms = sortedPrograms.filter(p => !pinnedPosts.includes(p.id));
  const orderedPrograms = [...pinnedPrograms, ...otherPrograms];

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

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
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            >
              <BellRing className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span className="text-sm sm:text-base text-yellow-400 font-semibold">Company Updates & Announcements</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400/50" />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Stackenzo
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-8 sm:mb-12">
              Stay informed about our latest workshops, hackathons, achievements, partnerships, and announcements. Be the first to know!
            </p>

            {/* Quick Stats - Responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
              {[
                { icon: Bell, value: sortedPrograms.length, label: "Updates", color: "blue" },
                { icon: Users, value: "5K+", label: "Participants", color: "green" },
                { icon: Building, value: "100+", label: "Partners", color: "purple" },
                { icon: Rocket, value: "50+", label: "Events", color: "orange" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-yellow-400/30 transition-all"
                >
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${stat.color}-400 mx-auto mb-1 sm:mb-2`} />
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 sm:mt-12"
            >
              <button
                onClick={() => document.getElementById('updates')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <span className="text-xs sm:text-sm">Scroll to explore</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="updates" className="scroll-mt-20 py-8 sm:py-12 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Search and Filter Bar - Mobile Optimized */}
          <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">

            {/* Search and Actions Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search updates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl pl-10 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="sm:hidden flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-gray-300 hover:text-yellow-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* View Toggle - Hidden on mobile (shown in filters) */}
                <div className="hidden sm:flex bg-gray-800/50 border border-gray-700 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("timeline")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "timeline" ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Archive Toggle */}
                <button
                  onClick={() => setShowArchived(!showArchived)}
                  className={`px-4 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                    showArchived
                      ? 'bg-yellow-400/10 border-yellow-400 text-yellow-400'
                      : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-white'
                  }`}
                >
                  <Archive className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">{showArchived ? 'Hide' : 'Show'} Archive</span>
                </button>
              </div>
            </div>

            {/* Filters - Desktop View */}
            <div className="hidden sm:block space-y-3">
              {/* Type Filters */}
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                      selectedType === type.value
                        ? `bg-${type.color}-500/20 text-${type.color}-400 border border-${type.color}-500/30`
                        : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-700/50'
                    }`}
                  >
                    <span className="text-base">{type.icon}</span>
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>

              {/* Status Filters */}
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => setSelectedStatus(status.value)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                      selectedStatus === status.value
                        ? `bg-${status.color}-500/20 text-${status.color}-400 border border-${status.color}-500/30`
                        : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-700/50'
                    }`}
                  >
                    <status.icon className="w-4 h-4" />
                    <span>{status.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filters - Expandable */}
            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="sm:hidden space-y-3 overflow-hidden"
                >
                  {/* View Mode Toggle */}
                  <div className="flex gap-2 p-1 bg-gray-800/50 border border-gray-700 rounded-xl">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        viewMode === "grid" ? 'bg-yellow-400 text-black' : 'text-gray-400'
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode("timeline")}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        viewMode === "timeline" ? 'bg-yellow-400 text-black' : 'text-gray-400'
                      }`}
                    >
                      <List className="w-4 h-4" />
                      Timeline
                    </button>
                  </div>

                  {/* Type Filters - Scrollable */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-400 px-1">Type</div>
                    <div className="flex flex-wrap gap-2">
                      {types.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => setSelectedType(type.value)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                            selectedType === type.value
                              ? `bg-${type.color}-500/20 text-${type.color}-400 border border-${type.color}-500/30`
                              : 'bg-gray-800/50 text-gray-400 border border-gray-700'
                          }`}
                        >
                          <span>{type.icon}</span>
                          <span>{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Filters */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-400 px-1">Status</div>
                    <div className="flex flex-wrap gap-2">
                      {statuses.map((status) => (
                        <button
                          key={status.value}
                          onClick={() => setSelectedStatus(status.value)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                            selectedStatus === status.value
                              ? `bg-${status.color}-500/20 text-${status.color}-400 border border-${status.color}-500/30`
                              : 'bg-gray-800/50 text-gray-400 border border-gray-700'
                          }`}
                        >
                          <status.icon className="w-3 h-3" />
                          <span>{status.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results Count */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 px-1">
              <span>Showing {orderedPrograms.length} updates</span>
              {pinnedPosts.length > 0 && (
                <span>{pinnedPosts.length} pinned</span>
              )}
            </div>
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center py-20"
              >
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-gray-700 border-t-yellow-400 rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ) : orderedPrograms.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 sm:py-20 px-4"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-gray-700">
                  <Bell className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2">No updates found</h3>
                <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto mb-6">
                  {searchQuery ? "Try adjusting your search or filters" : "Check back later for new announcements"}
                </p>
                {(searchQuery || selectedType !== 'all' || selectedStatus !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedType("all");
                      setSelectedStatus("all");
                      setShowArchived(false);
                    }}
                    className="px-6 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold hover:bg-yellow-300 transition"
                  >
                    Clear Filters
                  </button>
                )}
              </motion.div>
            ) : viewMode === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {orderedPrograms.map((program, i) => (
                  <NotificationCard
                    key={program.id}
                    program={program}
                    index={i}
                    getStatusColor={getStatusColor}
                    getStatusGradient={getStatusGradient}
                    getTypeColor={getTypeColor}
                    getTypeIcon={getTypeIcon}
                    formatDate={formatDate}
                    isPinned={pinnedPosts.includes(program.id)}
                    togglePin={togglePin}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                {/* Timeline line - Desktop only */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20" />

                <div className="space-y-4 sm:space-y-8">
                  {orderedPrograms.map((program, i) => (
                    <TimelineNotification
                      key={program.id}
                      program={program}
                      index={i}
                      getStatusColor={getStatusColor}
                      getStatusGradient={getStatusGradient}
                      getTypeColor={getTypeColor}
                      getTypeIcon={getTypeIcon}
                      formatDate={formatDate}
                      isPinned={pinnedPosts.includes(program.id)}
                      togglePin={togglePin}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl sm:rounded-3xl border border-gray-800 p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">Never Miss an Update!</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Get notified about new programs and events</p>
                </div>
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                /> */}
                <Link to="/Contact" className="whitespace-nowrap">
                  <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all">
                    Get In Touch
                  </button>
                </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

// Notification Card Component - Enhanced
function NotificationCard({ program, index, getStatusColor, getStatusGradient, getTypeColor, getTypeIcon, formatDate, isPinned, togglePin }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className={`group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl sm:rounded-2xl border ${
        isPinned ? 'border-yellow-400/50' : 'border-gray-800'
      } hover:border-yellow-400/30 transition-all overflow-hidden`}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${getStatusGradient(program.status)}`} />

      {/* Pin indicator */}
      {isPinned && (
        <div className="absolute top-3 right-3 z-10">
          <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
        </div>
      )}

      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-${getTypeColor(program.type)}-500/20 flex items-center justify-center text-lg sm:text-xl`}>
              {getTypeIcon(program.type)}
            </div>
            <div>
              <div className={`text-xs font-semibold text-${getTypeColor(program.type)}-400 uppercase`}>
                {program.type.replace("-", " ")}
              </div>
              <div className="text-xs text-gray-500">{formatDate(program.date)}</div>
            </div>
          </div>
          
          <button
            onClick={() => togglePin(program.id)}
            className={`p-1.5 rounded-lg transition-colors ${
              isPinned ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-400'
            }`}
          >
            <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${isPinned ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {program.description}
        </p>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1 text-gray-400">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="truncate max-w-[100px]">{program.location}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{program.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {program.tags.slice(0, 3).map((tag, j) => (
            <span key={j} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
              {tag}
            </span>
          ))}
          {program.tags.length > 3 && (
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">
              +{program.tags.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-800">
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{program.views || Math.floor(Math.random() * 900) + 100}</span>
            </button>
            <button className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 hover:text-green-400 transition-colors">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{program.comments || Math.floor(Math.random() * 50)}</span>
            </button>
          </div>

          <Link
            to={`/Programs/${program.id}`}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
          >
            <span>Details</span>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Timeline Notification Component - Enhanced
function TimelineNotification({ program, index, getStatusColor, getStatusGradient, getTypeColor, getTypeIcon, formatDate, isPinned, togglePin }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Mobile Timeline View */}
      <div className="sm:hidden">
        <div className={`bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border ${isPinned ? 'border-yellow-400/50' : 'border-gray-800'} p-4`}>
          {/* Date and Pin */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-gray-500" />
              <span className="text-xs text-gray-400">{formatDate(program.date)}</span>
            </div>
            <button onClick={() => togglePin(program.id)}>
              <Bookmark className={`w-3 h-3 ${isPinned ? 'text-yellow-400 fill-current' : 'text-gray-500'}`} />
            </button>
          </div>

          {/* Type and Status */}
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-lg bg-${getTypeColor(program.type)}-500/20 w-6 h-6 rounded-lg flex items-center justify-center`}>
              {getTypeIcon(program.type)}
            </span>
            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r ${getStatusGradient(program.status)}`}>
              {program.status.replace("-", " ")}
            </span>
          </div>

          {/* Title and Description */}
          <h3 className="text-sm font-bold text-white mb-1">{program.title}</h3>
          <p className="text-xs text-gray-400 mb-3 line-clamp-2">{program.description}</p>

          {/* Location and Duration */}
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="truncate max-w-[100px]">{program.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{program.duration}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {program.tags.slice(0, 2).map((tag, j) => (
              <span key={j} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full">
                {tag}
              </span>
            ))}
            {program.tags.length > 2 && (
              <span className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-full">
                +{program.tags.length - 2}
              </span>
            )}
          </div>

          {/* Link */}
          <Link
            to={`/Programs/${program.id}`}
            className="inline-flex items-center gap-1 text-xs text-yellow-400 font-semibold"
          >
            View Details
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Desktop Timeline View */}
      <div className="hidden sm:flex items-center gap-4">
        {/* Timeline dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getStatusGradient(program.status)} animate-pulse`} />
        </div>

        {/* Content */}
        <div className={`w-5/12 ${isEven ? 'ml-auto pl-8' : 'pr-8'}`}>
          <div className={`group bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border ${isPinned ? 'border-yellow-400/50' : 'border-gray-800'} p-6 hover:border-yellow-400/30 transition-all`}>
            {/* Date and Pin */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-400">{formatDate(program.date)}</span>
              </div>
              <button onClick={() => togglePin(program.id)} className="group-hover:opacity-100 transition-opacity">
                <Bookmark className={`w-4 h-4 ${isPinned ? 'text-yellow-400 fill-current' : 'text-gray-500 hover:text-yellow-400'}`} />
              </button>
            </div>

            {/* Type and Status */}
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-lg bg-${getTypeColor(program.type)}-500/20 flex items-center justify-center text-lg`}>
                {getTypeIcon(program.type)}
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getStatusGradient(program.status)}`}>
                {program.status.replace("-", " ")}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
              {program.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{program.description}</p>

            {/* Location and Duration */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{program.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{program.duration}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {program.tags.slice(0, 3).map((tag, j) => (
                <span key={j} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <Link
              to={`/Programs/${program.id}`}
              className="inline-flex items-center gap-1 text-sm text-yellow-400 font-semibold hover:gap-2 transition-all"
            >
              View Details
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Programs;