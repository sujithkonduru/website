import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Clock, Users, Target, Lightbulb, Award } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
import rndData from "./data/rndData.json";
import RNDApplicationModal from "./RNDApplicationModal";

function RNDProjectDetail() {
  const { projectId } = useParams();
  const project = rndData.projects.find(p => p.id === projectId);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  if (!project) {
    return (
      <div className="bg-gray-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/R_AND_D" className="text-olive green-400 hover:underline">
            Back to R&D Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <Link to="/R_AND_D" className="inline-flex items-center gap-2 text-olive green-400 hover:text-olive green-300 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to R&D Programs
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-olive green-400 text-sm font-semibold mb-3">{project.domain}</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{project.desc}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-olive green-400" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-olive green-400" />
                <span>{project.teamSize}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-olive green-400">Project Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.fullDescription}</p>
          
          <div className="mt-8 bg-olive green-900/20 border border-olive green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-olive green-400 mt-1" />
              <div>
                <h3 className="font-semibold text-olive green-400 mb-2">Impact Achieved</h3>
                <p className="text-gray-300">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-12 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-olive green-400" />
            <h2 className="text-2xl font-bold text-olive green-400">Research Objectives</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {project.objectives.map((objective, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bg-gray-700 p-4 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-olive green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-olive green-400" />
            <h2 className="text-2xl font-bold text-olive green-400">Research Methodology</h2>
          </div>
          <div className="space-y-4">
            {project.methodology.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-gray-800 p-5 rounded-lg"
              >
                <div className="bg-olive green-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-300 pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-olive green-400">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-700 px-4 py-2 rounded-full text-white font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-olive green-400">Expected Outcomes & Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bg-gray-800 p-5 rounded-lg border border-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-olive green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-12 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-olive green-400">Eligibility Criteria</h2>
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-gray-300 text-lg">{project.eligibility}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-olive green-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Interested in This Project?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Apply now to join our research team and contribute to this groundbreaking project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowApplicationModal(true)}
              className="px-8 py-3 bg-black text-olive green-400 rounded-full font-semibold hover:bg-gray-900 transition"
            >
              Apply for This Project
            </button>
            <Link 
              to="/R_AND_D"
              className="px-8 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-olive green-400 transition inline-block text-center"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <RNDApplicationModal 
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        projectId={project.id}
        projectTitle={project.title}
      />
    </div>
  );
}

export default RNDProjectDetail;
