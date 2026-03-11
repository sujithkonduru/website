import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar, MapPin, Clock, Tag, ExternalLink, Filter,
  Bell, TrendingUp, Users, Award, Zap, Target,
  ChevronRight, Star, MessageSquare, Share2, Bookmark,
  Eye, CalendarDays, Building, Rocket, Grid3X3,
  List, Archive, Download, BellRing, Sparkles,
  ChevronDown, X, Search, BookOpen, Briefcase,
  CheckCircle
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
    { value: "all", label: "All Updates", icon: "📢", color: "green" },
    { value: "workshop", label: "Workshops", icon: "🎓", color: "green" },
    { value: "hackathon", label: "Hackathons", icon: "💻", color: "green" },
    { value: "challenge", label: "Challenges", icon: "🏆", color: "green" },
    { value: "school-program", label: "School Programs", icon: "🏫", color: "green" },
    { value: "expo", label: "Expos", icon: "🎪", color: "green" },
    { value: "announcement", label: "Announcements", icon: "📢", color: "green" },
    { value: "partnership", label: "Partnerships", icon: "🤝", color: "green" },
    { value: "achievement", label: "Achievements", icon: "⭐", color: "green" }
  ];

  const statuses = [
    { value: "all", label: "All Status", icon: Eye, color: "blue" },
    { value: "upcoming", label: "Upcoming", icon: CalendarDays, color: "blue" },
    { value: "ongoing", label: "Live Now", icon: Zap, color: "blue" },
    { value: "registration-open", label: "Registration Open", icon: Users, color: "blue" },
    { value: "featured", label: "Featured", icon: Star, color: "blue" }
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
      case "registration-open": return "green";
      case "featured": return "purple";
      default: return "gray";
    }
  };

  const getStatusGradient = (status) => {
    switch (status) {
      case "upcoming": return "from-blue-600 to-cyan-600";
      case "ongoing": return "from-[#1E301E] to-[#2E7D32]";
      case "registration-open": return "from-[#1E301E] to-[#D4AF37]";
      case "featured": return "from-purple-600 to-pink-600";
      default: return "from-gray-600 to-gray-700";
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
    <div className="bg-white text-[#1A1A1A] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-[#E8F5E9] via-white to-[#E8F5E9]">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E301E]/5 via-transparent to-[#2E7D32]/5" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 48, 30, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E301E]/10 rounded-full blur-3xl animate-pulse delay-1000" />

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
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-sm"
            >
              <BellRing className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              <span className="text-sm sm:text-base text-[#1E301E] font-semibold">Company Updates & Announcements</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]/50" />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-2">
              <span className="text-[#1A1A1A]">
                Stackenzo
              </span>
              <br />
              <span className="text-[#1E301E]">
                Updates
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A] max-w-3xl mx-auto leading-relaxed px-4 mb-8 sm:mb-12">
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
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-[#D4AF37] transition-all shadow-sm"
                >
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-[#1E301E] mx-auto mb-1 sm:mb-2`} />
                  <div className="text-lg sm:text-2xl font-bold text-[#1A1A1A]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#1A1A1A]">{stat.label}</div>
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
                className="inline-flex flex-col items-center gap-2 text-[#1A1A1A] hover:text-[#1E301E] transition-colors"
              >
                <span className="text-xs sm:text-sm">Scroll to explore</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="updates" className="scroll-mt-20 py-8 sm:py-12 px-3 sm:px-6 bg-[#E8F5E9]">
        <div className="max-w-7xl mx-auto">

          {/* Search and Filter Bar - Mobile Optimized */}
          <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">

            {/* Search and Actions Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#1A1A1A]" />
                <input
                  type="text"
                  placeholder="Search updates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl pl-10 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-[#1A1A1A] placeholder-[#1A1A1A] focus:outline-none focus:border-[#1E301E] transition-colors shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1A1A1A] hover:text-[#1E301E]"
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
                  className="sm:hidden flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] hover:text-[#1E301E] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* View Toggle - Hidden on mobile (shown in filters) */}
                <div className="hidden sm:flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? 'bg-[#1E301E] text-white' : 'text-[#1A1A1A] hover:text-[#1E301E]'}`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("timeline")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "timeline" ? 'bg-[#1E301E] text-white' : 'text-[#1A1A1A] hover:text-[#1E301E]'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Archive Toggle */}
                <button
                  onClick={() => setShowArchived(!showArchived)}
                  className={`px-4 py-2 rounded-xl border transition-all flex items-center gap-2 shadow-sm ${
                    showArchived
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37]'
                      : 'bg-white border-gray-200 text-[#1A1A1A] hover:text-[#1E301E] hover:border-[#1E301E]'
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
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 border ${
                      selectedType === type.value
                        ? `bg-[${type.color === 'green' ? '#1E301E' : type.color + '-100'}] text-${type.color === 'green' ? 'white' : type.color + '-700'} border-[${type.color === 'green' ? '#1E301E' : type.color + '-200'}]`
                        : 'bg-white text-[#1A1A1A] border-gray-200 hover:border-[#1E301E] hover:text-[#1E301E]'
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
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 border ${
                      selectedStatus === status.value
                        ? `bg-[${status.color === 'green' ? '#1E301E' : status.color + '-100'}] text-${status.color === 'green' ? 'white' : status.color + '-700'} border-[${status.color === 'green' ? '#1E301E' : status.color + '-200'}]`
                        : 'bg-white text-[#1A1A1A] border-gray-200 hover:border-[#1E301E] hover:text-[#1E301E]'
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
                  <div className="flex gap-2 p-1 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        viewMode === "grid" ? 'bg-[#1E301E] text-white' : 'text-[#1A1A1A]'
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode("timeline")}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        viewMode === "timeline" ? 'bg-[#1E301E] text-white' : 'text-[#1A1A1A]'
                      }`}
                    >
                      <List className="w-4 h-4" />
                      Timeline
                    </button>
                  </div>

                  {/* Type Filters - Scrollable */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-[#1A1A1A] px-1">Type</div>
                    <div className="flex flex-wrap gap-2">
                      {types.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => setSelectedType(type.value)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                            selectedType === type.value
                              ? `bg-[${type.color === 'green' ? '#1E301E' : type.color + '-100'}] text-${type.color === 'green' ? 'white' : type.color + '-700'} border-[${type.color === 'green' ? '#1E301E' : type.color + '-200'}]`
                              : 'bg-white text-[#1A1A1A] border-gray-200'
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
                    <div className="text-xs font-semibold text-[#1A1A1A] px-1">Status</div>
                    <div className="flex flex-wrap gap-2">
                      {statuses.map((status) => (
                        <button
                          key={status.value}
                          onClick={() => setSelectedStatus(status.value)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                            selectedStatus === status.value
                              ? `bg-[${status.color === 'green' ? '#1E301E' : status.color + '-100'}] text-${status.color === 'green' ? 'white' : status.color + '-700'} border-[${status.color === 'green' ? '#1E301E' : status.color + '-200'}]`
                              : 'bg-white text-[#1A1A1A] border-gray-200'
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
            <div className="flex items-center justify-between text-xs sm:text-sm text-[#1A1A1A] px-1">
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-gray-200 border-t-[#D4AF37] rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] animate-pulse" />
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
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-gray-200 shadow-sm">
                  <Bell className="w-10 h-10 sm:w-12 sm:h-12 text-[#1A1A1A]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-2">No updates found</h3>
                <p className="text-sm sm:text-base text-[#1A1A1A] max-w-md mx-auto mb-6">
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
                    className="px-6 py-2 bg-[#1E301E] text-white rounded-full text-sm font-semibold hover:bg-[#2E7D32] transition shadow-md"
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
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
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#D4AF37]/20 via-[#1E301E]/20 to-[#2E7D32]/20" />

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
      <section className="py-12 sm:py-16 px-3 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1E301E] to-[#2E7D32] rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">Never Miss an Update!</h3>
                  <p className="text-xs sm:text-sm text-white/80">Get notified about new programs and events</p>
                </div>
              </div>
                <Link to="/Contact" className="whitespace-nowrap">
                  <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#1E301E] rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg">
                    Get In Touch
                  </button>
                </Link>
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
      className={`group relative bg-white rounded-xl sm:rounded-2xl border ${
        isPinned ? 'border-[#D4AF37]' : 'border-gray-200'
      } hover:border-[#1E301E] transition-all overflow-hidden shadow-sm hover:shadow`}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${getStatusGradient(program.status)}`} />

      {/* Pin indicator */}
      {isPinned && (
        <div className="absolute top-3 right-3 z-10">
          <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-current" />
        </div>
      )}

      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-lg sm:text-xl border border-gray-200`}>
              {getTypeIcon(program.type)}
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1E301E] uppercase">
                {program.type.replace("-", " ")}
              </div>
              <div className="text-xs text-[#1A1A1A]">{formatDate(program.date)}</div>
            </div>
          </div>
          
          <button
            onClick={() => togglePin(program.id)}
            className={`p-1.5 rounded-lg transition-colors ${
              isPinned ? 'text-[#D4AF37]' : 'text-[#1A1A1A] hover:text-[#D4AF37]'
            }`}
          >
            <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${isPinned ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1E301E] transition-colors line-clamp-2">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#1A1A1A] mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {program.description}
        </p>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1 text-[#1A1A1A]">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
            <span className="truncate max-w-[100px]">{program.location}</span>
          </div>
          <div className="flex items-center gap-1 text-[#1A1A1A]">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
            <span>{program.duration}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {program.tags.slice(0, 3).map((tag, j) => (
            <span key={j} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#E8F5E9] text-[#1A1A1A] text-xs rounded-full border border-gray-200">
              {tag}
            </span>
          ))}
          {program.tags.length > 3 && (
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#E8F5E9] text-[#1A1A1A] text-xs rounded-full border border-gray-200">
              +{program.tags.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="flex items-center gap-1 text-xs sm:text-sm text-[#1A1A1A] hover:text-blue-600 transition-colors">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
              <span>{program.views || Math.floor(Math.random() * 900) + 100}</span>
            </button>
            <button className="flex items-center gap-1 text-xs sm:text-sm text-[#1A1A1A] hover:text-[#1E301E] transition-colors">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
              <span>{program.comments || Math.floor(Math.random() * 50)}</span>
            </button>
          </div>

          <Link
            to={`/Programs/${program.id}`}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1E301E] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#2E7D32] transition-all shadow-sm hover:shadow"
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
        <div className={`bg-white rounded-xl border ${isPinned ? 'border-[#D4AF37]' : 'border-gray-200'} p-4 shadow-sm`}>
          {/* Date and Pin */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-xs text-[#1A1A1A]">{formatDate(program.date)}</span>
            </div>
            <button onClick={() => togglePin(program.id)}>
              <Bookmark className={`w-3 h-3 ${isPinned ? 'text-[#D4AF37] fill-current' : 'text-[#1A1A1A]'}`} />
            </button>
          </div>

          {/* Type and Status */}
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-lg bg-[#E8F5E9] w-6 h-6 rounded-lg flex items-center justify-center border border-gray-200`}>
              {getTypeIcon(program.type)}
            </span>
            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r ${getStatusGradient(program.status)} text-white`}>
              {program.status.replace("-", " ")}
            </span>
          </div>

          {/* Title and Description */}
          <h3 className="text-sm font-bold text-[#1A1A1A] mb-1">{program.title}</h3>
          <p className="text-xs text-[#1A1A1A] mb-3 line-clamp-2">{program.description}</p>

          {/* Location and Duration */}
          <div className="flex items-center gap-3 mb-3 text-xs text-[#1A1A1A]">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span className="truncate max-w-[100px]">{program.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              <span>{program.duration}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {program.tags.slice(0, 2).map((tag, j) => (
              <span key={j} className="px-2 py-0.5 bg-[#E8F5E9] text-[#1A1A1A] text-xs rounded-full border border-gray-200">
                {tag}
              </span>
            ))}
            {program.tags.length > 2 && (
              <span className="px-2 py-0.5 bg-[#E8F5E9] text-[#1A1A1A] text-xs rounded-full border border-gray-200">
                +{program.tags.length - 2}
              </span>
            )}
          </div>

          {/* Link */}
          <Link
            to={`/Programs/${program.id}`}
            className="inline-flex items-center gap-1 text-xs text-[#1E301E] font-semibold hover:text-[#2E7D32]"
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
          <div className={`group bg-white rounded-2xl border ${isPinned ? 'border-[#D4AF37]' : 'border-gray-200'} p-6 hover:border-[#1E301E] transition-all shadow-sm hover:shadow`}>
            {/* Date and Pin */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-[#1A1A1A]">{formatDate(program.date)}</span>
              </div>
              <button onClick={() => togglePin(program.id)} className="group-hover:opacity-100 transition-opacity">
                <Bookmark className={`w-4 h-4 ${isPinned ? 'text-[#D4AF37] fill-current' : 'text-[#1A1A1A] hover:text-[#D4AF37]'}`} />
              </button>
            </div>

            {/* Type and Status */}
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-lg border border-gray-200`}>
                {getTypeIcon(program.type)}
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getStatusGradient(program.status)} text-white`}>
                {program.status.replace("-", " ")}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1E301E] transition-colors">
              {program.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#1A1A1A] mb-4 line-clamp-2">{program.description}</p>

            {/* Location and Duration */}
            <div className="flex items-center gap-4 mb-4 text-sm text-[#1A1A1A]">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{program.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>{program.duration}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {program.tags.slice(0, 3).map((tag, j) => (
                <span key={j} className="px-2 py-1 bg-[#E8F5E9] text-[#1A1A1A] text-xs rounded-full border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <Link
              to={`/Programs/${program.id}`}
              className="inline-flex items-center gap-1 text-sm text-[#1E301E] font-semibold hover:gap-2 transition-all"
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