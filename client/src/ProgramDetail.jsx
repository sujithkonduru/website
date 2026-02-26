import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { 
  Calendar, MapPin, Clock, Tag, ArrowLeft, Users, 
  CheckCircle, ExternalLink, Share2, Bookmark
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgramRegistrationModal from "./ProgramRegistrationModal";

function ProgramDetail() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProgram();
  }, [id]);

  const fetchProgram = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/programs/${id}`);
      const data = await response.json();
      
      if (data.success) {
        setProgram(data.program);
      }
    } catch (error) {
      console.error('Error fetching program:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-950 text-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading program details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="bg-gray-950 text-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Program Not Found</h2>
            <Link to="/Programs" className="text-blue-400 hover:text-blue-300">
              ← Back to Programs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch(status) {
      case "upcoming": return "bg-blue-500";
      case "ongoing": return "bg-green-500";
      case "registration-open": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Toaster position="top-right" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <Link to="/Programs" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Programs
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-2 ${getStatusColor(program.status)} text-white rounded-full text-sm font-semibold`}>
                {program.status.replace("-", " ").toUpperCase()}
              </span>
              <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-semibold">
                {program.type.replace("-", " ").toUpperCase()}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {program.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>{new Date(program.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{program.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>{program.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              >
                <h2 className="text-2xl font-bold text-white mb-4">About This Program</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {program.description}
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Topics Covered</h2>
                <div className="flex flex-wrap gap-3">
                  {program.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              >
                <h2 className="text-2xl font-bold text-white mb-6">What You'll Get</h2>
                <div className="space-y-4">
                  {[
                    "Hands-on practical experience",
                    "Industry expert mentorship",
                    "Certificate of completion",
                    "Networking opportunities",
                    "Learning resources and materials"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 sticky top-24"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Join?</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <Users className="w-5 h-5" />
                    <span>Limited seats available</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Calendar className="w-5 h-5" />
                    <span>Registration closing soon</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full px-6 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all mb-4"
                >
                  Register Now
                </button>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Bookmark className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
              >
                <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Program Type</span>
                    <span className="text-white font-medium">{program.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white font-medium">{program.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-white font-medium">{program.status}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Registration Modal */}
      <ProgramRegistrationModal 
        program={program}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default ProgramDetail;
