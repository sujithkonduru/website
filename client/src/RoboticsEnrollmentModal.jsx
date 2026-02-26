import { useState } from "react";
import { 
  X, User, Mail, Phone, School, Calendar, Users, Loader, 
  Building, BookOpen, UsersRound, Globe, Award, Clock,
  GraduationCap, UserCheck, Briefcase, MessageSquare
} from "lucide-react";
import toast from "react-hot-toast";

function RoboticsEnrollmentModal({ isOpen, onClose }) {
  const [enrollmentType, setEnrollmentType] = useState("student"); // "student" or "school"
  const [loading, setLoading] = useState(false);
  
  // Student enrollment form
  const [studentForm, setStudentForm] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    studentClass: "",
    school: "",
    age: "",
    previousExperience: "no",
    message: ""
  });

  // School partnership form
  const [schoolForm, setSchoolForm] = useState({
    schoolName: "",
    schoolAddress: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    studentCount: "",
    preferredStartDate: "",
    message: ""
  });

  const handleStudentChange = (e) => {
    setStudentForm({
      ...studentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSchoolChange = (e) => {
    setSchoolForm({
      ...schoolForm,
      [e.target.name]: e.target.value
    });
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/robotics-enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...studentForm, type: "student" })
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Student enrollment submitted successfully!");
        setStudentForm({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          studentClass: "",
          school: "",
          age: "",
          previousExperience: "no",
          message: ""
        });
        onClose();
      } else {
        toast.error(data.message || "Enrollment failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit enrollment");
    } finally {
      setLoading(false);
    }
  };

  const handleSchoolSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/school-partnerships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(schoolForm)
      });

      const data = await response.json();

      if (data.success) {
        toast.success("School partnership request submitted successfully!");
        setSchoolForm({
          schoolName: "",
          schoolAddress: "",
          contactPerson: "",
          designation: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          pincode: "",
          studentCount: "",
          preferredStartDate: "",
          message: ""
        });
        onClose();
      } else {
        toast.error(data.message || "Request failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit request");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl w-full max-w-2xl my-8 border border-yellow-400/30 shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                <span>🤖</span>
                <span>Robotics Program</span>
              </h2>
              <p className="text-black/80 text-sm mt-1">Choose your enrollment type</p>
            </div>
            <button
              onClick={onClose}
              className="text-black hover:text-gray-700 transition-colors p-1 hover:bg-black/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Enrollment Type Toggle */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setEnrollmentType("student")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                enrollmentType === "student"
                  ? "bg-black text-yellow-400 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <UserCheck className="w-5 h-5" />
              <span>Student Enrollment</span>
            </button>
            <button
              type="button"
              onClick={() => setEnrollmentType("school")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                enrollmentType === "school"
                  ? "bg-black text-yellow-400 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Building className="w-5 h-5" />
              <span>School Partnership</span>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {enrollmentType === "student" ? (
            /* Student Enrollment Form */
            <form onSubmit={handleStudentSubmit} className="space-y-5">
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 mb-4">
                <h3 className="text-yellow-400 font-semibold flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  Student Information
                </h3>
                <p className="text-gray-400 text-sm">For Classes 6-9 | 1-3 hours/week | No exams</p>
              </div>

              {/* Student Name */}
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Student's Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="studentName"
                    value={studentForm.studentName}
                    onChange={handleStudentChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                    placeholder="Enter student's full name"
                  />
                </div>
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Parent/Guardian Name *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="parentName"
                    value={studentForm.parentName}
                    onChange={handleStudentChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                    placeholder="Enter parent/guardian name"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={studentForm.email}
                      onChange={handleStudentChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                      placeholder="parent@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={studentForm.phone}
                      onChange={handleStudentChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Class & Age */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    Current Class *
                  </label>
                  <select
                    name="studentClass"
                    value={studentForm.studentClass}
                    onChange={handleStudentChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="" className="bg-gray-900">Select Class</option>
                    <option value="6" className="bg-gray-900">Class 6</option>
                    <option value="7" className="bg-gray-900">Class 7</option>
                    <option value="8" className="bg-gray-900">Class 8</option>
                    <option value="9" className="bg-gray-900">Class 9</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    Student's Age *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="age"
                      value={studentForm.age}
                      onChange={handleStudentChange}
                      required
                      min="10"
                      max="16"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                      placeholder="Age (10-16)"
                    />
                  </div>
                </div>
              </div>

              {/* School */}
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  School Name *
                </label>
                <div className="relative">
                  <School className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="school"
                    value={studentForm.school}
                    onChange={handleStudentChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                    placeholder="Enter school name"
                  />
                </div>
              </div>

              {/* Previous Experience */}
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Any previous robotics experience?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="previousExperience"
                      value="yes"
                      checked={studentForm.previousExperience === "yes"}
                      onChange={handleStudentChange}
                      className="w-4 h-4 text-yellow-400"
                    />
                    <span className="text-white">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="previousExperience"
                      value="no"
                      checked={studentForm.previousExperience === "no"}
                      onChange={handleStudentChange}
                      className="w-4 h-4 text-yellow-400"
                    />
                    <span className="text-white">No</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  name="message"
                  value={studentForm.message}
                  onChange={handleStudentChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none resize-none"
                  placeholder="Any questions or special requirements?"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition border border-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Enrolling...</span>
                    </>
                  ) : (
                    <>
                      <span>🚀 Enroll Now</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* School Partnership Form */
            <form onSubmit={handleSchoolSubmit} className="space-y-5">
              <div className="bg-purple-400/10 border border-purple-400/30 rounded-xl p-4 mb-4">
                <h3 className="text-purple-400 font-semibold flex items-center gap-2 mb-2">
                  <Building className="w-5 h-5" />
                  School Partnership Program
                </h3>
                <p className="text-gray-400 text-sm">Bring robotics education to your school | Structured curriculum | Teacher training</p>
              </div>

              {/* School Name */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-2">
                  School/Institution Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="schoolName"
                    value={schoolForm.schoolName}
                    onChange={handleSchoolChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                    placeholder="Enter school name"
                  />
                </div>
              </div>

              {/* School Address */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-2">
                  School Address *
                </label>
                <textarea
                  name="schoolAddress"
                  value={schoolForm.schoolAddress}
                  onChange={handleSchoolChange}
                  required
                  rows="2"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none resize-none"
                  placeholder="Complete address with landmark"
                />
              </div>

              {/* Contact Person & Designation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="contactPerson"
                      value={schoolForm.contactPerson}
                      onChange={handleSchoolChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                      placeholder="Principal / Coordinator name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    Designation *
                  </label>
                  <select
                    name="designation"
                    value={schoolForm.designation}
                    onChange={handleSchoolChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="" className="bg-gray-900">Select</option>
                    <option value="Principal" className="bg-gray-900">Principal</option>
                    <option value="Vice Principal" className="bg-gray-900">Vice Principal</option>
                    <option value="Academic Coordinator" className="bg-gray-900">Academic Coordinator</option>
                    <option value="Teacher" className="bg-gray-900">Teacher</option>
                    <option value="Other" className="bg-gray-900">Other</option>
                  </select>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={schoolForm.email}
                      onChange={handleSchoolChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                      placeholder="school@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={schoolForm.phone}
                      onChange={handleSchoolChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* City, State, Pincode */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={schoolForm.city}
                    onChange={handleSchoolChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={schoolForm.state}
                    onChange={handleSchoolChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                    placeholder="State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={schoolForm.pincode}
                    onChange={handleSchoolChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                    placeholder="Pincode"
                  />
                </div>
              </div>

              {/* Student Count & Start Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    Approx. Student Count *
                  </label>
                  <div className="relative">
                    <UsersRound className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="studentCount"
                      value={schoolForm.studentCount}
                      onChange={handleSchoolChange}
                      required
                      min="1"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                      placeholder="Number of students"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-400 mb-2">
                    Preferred Start Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="preferredStartDate"
                      value={schoolForm.preferredStartDate}
                      onChange={handleSchoolChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-2">
                  Additional Information / Requirements *
                </label>
                <textarea
                  name="message"
                  value={schoolForm.message}
                  onChange={handleSchoolChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none resize-none"
                  placeholder="Tell us about your requirements, preferred schedule, etc."
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition border border-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Building className="w-5 h-5" />
                      <span>Submit Partnership Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer Note */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            {enrollmentType === "student" 
              ? "We'll contact you within 24 hours to confirm enrollment details."
              : "Our team will reach out to discuss partnership opportunities."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoboticsEnrollmentModal;