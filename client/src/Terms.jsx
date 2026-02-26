import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Navbar from "./Navbar";

function Terms() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FileText className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-300">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-xl p-8 space-y-8"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">1. Introduction</h2>
              <p className="text-gray-300 mb-3">
                Welcome to Stackenzo. These Terms and Conditions ("Terms") govern your use of our website, 
                services, workshops, and internship programs. By accessing or using our services, you agree 
                to be bound by these Terms.
              </p>
              <p className="text-gray-300">
                If you do not agree with any part of these Terms, please do not use our services.
              </p>
            </div>

            {/* Definitions */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. Definitions</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• "Company," "we," "us," or "our" refers to Stackenzo Technologies</li>
                <li>• "User," "you," or "your" refers to individuals accessing our services</li>
                <li>• "Services" includes all workshops, internships, training programs, and digital content</li>
                <li>• "Platform" refers to our website and associated digital infrastructure</li>
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. Eligibility</h2>
              <p className="text-gray-300 mb-3">
                To use our services, you must:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Be at least 18 years old or have parental/guardian consent</li>
                <li>• Provide accurate and complete registration information</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            {/* Registration and Enrollment */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Registration and Enrollment</h2>
              <p className="text-gray-300 mb-3">
                When enrolling in our programs:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• You must provide accurate personal and educational information</li>
                <li>• Registration is subject to availability and eligibility criteria</li>
                <li>• We reserve the right to reject applications that don't meet requirements</li>
                <li>• You are responsible for maintaining your account security</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Payment Terms</h2>
              <p className="text-gray-300 mb-3">
                Regarding fees and payments:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• All fees are listed in Indian Rupees (INR) unless otherwise stated</li>
                <li>• Payment must be completed before program commencement</li>
                <li>• Fees are non-refundable except as specified in our refund policy</li>
                <li>• We reserve the right to modify fees with prior notice</li>
                <li>• Payment plans may be available for certain programs</li>
              </ul>
            </div>

            {/* Refund Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">6. Refund Policy</h2>
              <p className="text-gray-300 mb-3">
                Our refund policy:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Full refund if cancellation is made 7 days before program start</li>
                <li>• 50% refund if cancellation is made 3-7 days before program start</li>
                <li>• No refund for cancellations made less than 3 days before start</li>
                <li>• Refunds are processed within 14 business days</li>
                <li>• Program cancellation by Stackenzo results in full refund</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. User Responsibilities</h2>
              <p className="text-gray-300 mb-3">
                As a user, you agree to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Attend sessions regularly and complete assignments on time</li>
                <li>• Respect instructors, mentors, and fellow participants</li>
                <li>• Not share course materials without authorization</li>
                <li>• Use provided resources only for educational purposes</li>
                <li>• Report any technical issues or concerns promptly</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Intellectual Property</h2>
              <p className="text-gray-300 mb-3">
                All content, materials, and resources provided by Stackenzo are protected by intellectual 
                property rights. You may not:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Reproduce, distribute, or sell our course materials</li>
                <li>• Remove copyright or proprietary notices</li>
                <li>• Use our brand name or logo without permission</li>
                <li>• Create derivative works from our content</li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">9. Code of Conduct</h2>
              <p className="text-gray-300 mb-3">
                Users must maintain professional conduct. Prohibited activities include:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Harassment, discrimination, or abusive behavior</li>
                <li>• Cheating, plagiarism, or academic dishonesty</li>
                <li>• Disrupting classes or interfering with others' learning</li>
                <li>• Sharing inappropriate or offensive content</li>
                <li>• Violating any applicable laws or regulations</li>
              </ul>
            </div>

            {/* Certificates */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">10. Certificates and Credentials</h2>
              <p className="text-gray-300 mb-3">
                Regarding certificates:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Certificates are issued upon successful program completion</li>
                <li>• Minimum attendance and performance criteria must be met</li>
                <li>• Certificates are digital and verifiable</li>
                <li>• Misrepresentation of credentials may result in revocation</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">11. Limitation of Liability</h2>
              <p className="text-gray-300 mb-3">
                Stackenzo shall not be liable for:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Indirect, incidental, or consequential damages</li>
                <li>• Loss of data, profits, or business opportunities</li>
                <li>• Technical issues beyond our reasonable control</li>
                <li>• Actions of third-party service providers</li>
                <li>• Employment outcomes or career advancement</li>
              </ul>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">12. Termination</h2>
              <p className="text-gray-300 mb-3">
                We reserve the right to terminate or suspend access to our services:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• For violation of these Terms</li>
                <li>• For fraudulent or illegal activities</li>
                <li>• For non-payment of fees</li>
                <li>• At our discretion with or without notice</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">13. Changes to Terms</h2>
              <p className="text-gray-300">
                We may update these Terms periodically. Continued use of our services after changes 
                constitutes acceptance of the modified Terms. We will notify users of significant changes 
                via email or platform notifications.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">14. Governing Law</h2>
              <p className="text-gray-300">
                These Terms are governed by the laws of India. Any disputes shall be subject to the 
                exclusive jurisdiction of courts in Bangalore, Karnataka.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">15. Contact Information</h2>
              <p className="text-gray-300 mb-3">
                For questions about these Terms, please contact us:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Email: legal@stackenzo.com</li>
                <li>• Phone: +91-XXXXXXXXXX</li>
                <li>• Address: Bangalore, Karnataka, India</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <Link to="/" className="text-2xl font-bold text-yellow-400 mb-4 block">
            Stackenzo
          </Link>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/About" className="hover:text-yellow-400 transition">About</Link>
            <Link to="/Contact" className="hover:text-yellow-400 transition">Contact</Link>
            <Link to="/Privacy" className="hover:text-yellow-400 transition">Privacy</Link>
            <Link to="/Terms" className="hover:text-yellow-400 transition">Terms</Link>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} Stackenzo. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Terms;
