import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import Navbar from "./Navbar";

function Privacy() {
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
            <Shield className="w-16 h-16 text-olive green-400 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Privacy Policy
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
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">1. Introduction</h2>
              <p className="text-gray-300 mb-3">
                At Stackenzo, we are committed to protecting your privacy and ensuring the security of your 
                personal information. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your data when you use our services.
              </p>
              <p className="text-gray-300">
                By using our platform, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">2.1 Personal Information</h3>
              <p className="text-gray-300 mb-3">We collect information you provide directly:</p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>• Name, email address, and phone number</li>
                <li>• Educational background and qualifications</li>
                <li>• Date of birth and gender</li>
                <li>• Address and location information</li>
                <li>• Payment and billing information</li>
                <li>• Resume and portfolio materials</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">2.2 Automatically Collected Information</h3>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>• IP address and device information</li>
                <li>• Browser type and operating system</li>
                <li>• Pages visited and time spent on platform</li>
                <li>• Referring website and search terms</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">2.3 Usage Data</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Course enrollment and completion data</li>
                <li>• Assignment submissions and grades</li>
                <li>• Attendance records and participation</li>
                <li>• Communication with instructors and support</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-3">We use collected information for:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Providing and improving our educational services</li>
                <li>• Processing registrations and payments</li>
                <li>• Communicating about programs, updates, and opportunities</li>
                <li>• Issuing certificates and credentials</li>
                <li>• Analyzing platform usage and performance</li>
                <li>• Personalizing your learning experience</li>
                <li>• Ensuring platform security and preventing fraud</li>
                <li>• Complying with legal obligations</li>
                <li>• Marketing and promotional activities (with consent)</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-3">We may share your information with:</p>
              
              <h3 className="text-xl font-semibold mb-3 text-white">4.1 Service Providers</h3>
              <p className="text-gray-300 mb-4">
                Third-party vendors who assist with payment processing, email delivery, hosting, 
                analytics, and customer support.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.2 Industry Partners</h3>
              <p className="text-gray-300 mb-4">
                With your consent, we may share your profile with potential employers and internship 
                providers for placement opportunities.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.3 Legal Requirements</h3>
              <p className="text-gray-300 mb-4">
                When required by law, court order, or government regulation, or to protect our rights 
                and safety.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">4.4 Business Transfers</h3>
              <p className="text-gray-300">
                In connection with mergers, acquisitions, or sale of assets, your information may be 
                transferred to the acquiring entity.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">5. Data Security</h2>
              <p className="text-gray-300 mb-3">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Secure server infrastructure and firewalls</li>
                <li>• Regular security audits and updates</li>
                <li>• Access controls and authentication</li>
                <li>• Employee training on data protection</li>
                <li>• Incident response and breach notification procedures</li>
              </ul>
              <p className="text-gray-300 mt-4">
                However, no method of transmission over the internet is 100% secure. We cannot guarantee 
                absolute security of your data.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">6. Data Retention</h2>
              <p className="text-gray-300 mb-3">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Provide our services and maintain your account</li>
                <li>• Comply with legal and regulatory requirements</li>
                <li>• Resolve disputes and enforce agreements</li>
                <li>• Maintain certificates and academic records</li>
              </ul>
              <p className="text-gray-300 mt-4">
                You may request deletion of your data, subject to legal retention requirements.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">7. Your Rights and Choices</h2>
              <p className="text-gray-300 mb-3">You have the right to:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate or incomplete data</li>
                <li>• Request deletion of your data</li>
                <li>• Object to processing of your information</li>
                <li>• Withdraw consent for marketing communications</li>
                <li>• Request data portability</li>
                <li>• Lodge complaints with data protection authorities</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights, contact us at privacy@stackenzo.com
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-3">
                We use cookies and similar technologies to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze platform usage and performance</li>
                <li>• Provide personalized content and recommendations</li>
                <li>• Enable social media features</li>
                <li>• Deliver targeted advertising</li>
              </ul>
              <p className="text-gray-300 mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect 
                platform functionality.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">9. Third-Party Links and Services</h2>
              <p className="text-gray-300">
                Our platform may contain links to third-party websites and services. We are not responsible 
                for their privacy practices. We encourage you to review their privacy policies before 
                providing any personal information.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">10. Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not intended for individuals under 18 years of age. We do not knowingly 
                collect personal information from children. If you believe we have collected information 
                from a child, please contact us immediately.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">11. International Data Transfers</h2>
              <p className="text-gray-300">
                Your information may be transferred to and processed in countries other than your country 
                of residence. We ensure appropriate safeguards are in place to protect your data in 
                accordance with this Privacy Policy.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal 
                requirements. We will notify you of significant changes via email or platform notification. 
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">13. Contact Us</h2>
              <p className="text-gray-300 mb-3">
                For questions or concerns about this Privacy Policy or our data practices:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Email: privacy@stackenzo.com</li>
                <li>• Data Protection Officer: dpo@stackenzo.com</li>
                <li>• Phone: +91-XXXXXXXXXX</li>
                <li>• Address: Stackenzo PVT LTD, Nellore, Andhra Pradesh, India</li>
              </ul>
            </div>

            {/* Consent */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-olive green-400">Your Consent</h2>
              <p className="text-gray-300">
                By using our platform and services, you acknowledge that you have read and understood this 
                Privacy Policy and consent to the collection, use, and disclosure of your personal 
                information as described herein.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <Link to="/" className="text-2xl font-bold text-olive green-400 mb-4 block">
            Stackenzo
          </Link>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/" className="hover:text-olive green-400 transition">Home</Link>
            <Link to="/About" className="hover:text-olive green-400 transition">About</Link>
            <Link to="/Contact" className="hover:text-olive green-400 transition">Contact</Link>
            <Link to="/Privacy" className="hover:text-olive green-400 transition">Privacy</Link>
            <Link to="/Terms" className="hover:text-olive green-400 transition">Terms</Link>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} Stackenzo. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Privacy;
