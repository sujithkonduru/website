import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Toast from "./Toast";

function EnrollmentModal({ isOpen, onClose, title = "Enrollment Form", type = "enrollment", workshopTitle = "", department = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    education: "",
    message: "",
    department: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  // Update course and department when props change
  useEffect(() => {
    if (workshopTitle || department) {
      setFormData(prev => ({ 
        ...prev, 
        course: workshopTitle || prev.course, 
        department: department || prev.department 
      }));
    }
  }, [workshopTitle, department]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: type,
          department: formData.department
        })
      });

      const data = await response.json();

      if (data.success) {
        setToast({ show: true, message: "Thank you! We'll contact you within 24 hours." });
        setTimeout(() => {
          onClose();
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            education: "",
            message: "",
            department: ""
          });
        }, 1500);
      } else {
        const errorMsg = data.errors 
          ? data.errors.map(err => err.msg || err.message).join(', ')
          : data.message || 'Failed to submit enrollment. Please try again.';
        setToast({ show: true, message: errorMsg });
      }
    } catch (error) {
      console.error('Enrollment submission error:', error);
      setToast({ show: true, message: 'Failed to submit. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <Toast 
        message={toast.message} 
        isVisible={toast.show} 
        onClose={() => setToast({ show: false, message: "" })} 
      />
      <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-gray-800 rounded-xl shadow-2xl max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-gray-700"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 sm:p-6 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm sm:text-base outline-none focus:border-yellow-400 transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm sm:text-base outline-none focus:border-yellow-400 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm sm:text-base outline-none focus:border-yellow-400 transition"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                {type === "internship" ? "Internship Program" : "Course/Workshop"} *
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm sm:text-base outline-none focus:border-yellow-400 transition"
                placeholder={type === "internship" ? "Select internship program" : "Select course or workshop"}
              />
            </div>

            {formData.department && (
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                  Department
                </label>
                <input
                  type="text"
                  value={formData.department}
                  readOnly
                  className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-600 border border-gray-600 text-gray-300 text-sm sm:text-base outline-none cursor-not-allowed"
                />
              </div>
            )}

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                Educational Background *
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm sm:text-base outline-none focus:border-yellow-400 transition"
              >
                <option value="">Select your education level</option>
                <option value="high-school">High School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="professional">Working Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm sm:text-base outline-none focus:border-yellow-400 transition resize-none"
                placeholder="Tell us about your goals and expectations..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-yellow-400 text-black rounded-lg font-semibold text-sm sm:text-base hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
    </>
  );
}

export default EnrollmentModal;
