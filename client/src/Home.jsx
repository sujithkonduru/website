import "./App.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Toast from "./Toast";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import Gallery from "./Gallery";
import {
  Bot,
  Cpu,
  Code2,
  Rocket,
  Globe,
  Users,
  Briefcase,
  Lightbulb,
  Smartphone,
  Database,
  Shield,
  Zap,
  Search,
  TrendingUp,
  Settings,
  Monitor,
  MessageCircle
} from "lucide-react";

const testimonials = [
  {
    name: "Arjun Kumar",
    role: "Engineering Student",
    quote:
      "Stackenzo completely changed how I approach real-world projects. The learning is practical and intense.",
  },
  {
    name: "Sneha R",
    role: "Startup Founder",
    quote:
      "Their IT services helped us launch faster with a solid and scalable platform.",
  },
  {
    name: "Rahul M",
    role: "Robotics Enthusiast",
    quote:
      "The robotics programs are hands-on and far better than typical classroom learning.",
  },
];

function Home() {
  const [index, setIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, subject: "Contact from Home Page" })
      });
      const data = await response.json();
      if (data.success) {
        setToast({ show: true, message: "Thank you! We'll contact you within 24 hours." });
        setContactForm({ name: "", email: "", message: "" });
      } else {
        const errorMsg = data.errors ? data.errors.map(err => err.msg || err.message).join(', ') : data.message;
        setToast({ show: true, message: errorMsg || 'Failed to submit. Please try again.' });
      }
    } catch (error) {
      setToast({ show: true, message: 'Error submitting. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("/api/test")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching /api/test:', error));
  }, []);

  // Icon positions and animations for hero background
  // const heroIcons = [
  //   { Icon: Bot, top: "top-20", left: "left-10", duration: 8, delay: 0 },
  //   { Icon: Cpu, top: "top-32", right: "right-16", duration: 6, delay: 1 },
  //   { Icon: Code2, top: "bottom-40", left: "left-20", duration: 7, delay: 2 },
  //   { Icon: Rocket, top: "bottom-24", right: "right-32", duration: 9, delay: 0.5 },
  //   { Icon: Globe, top: "top-40", left: "left-32", duration: 10, delay: 1.5 },
  //   { Icon: Users, top: "bottom-32", right: "right-20", duration: 8, delay: 3 },
  //   { Icon: Briefcase, top: "top-28", right: "right-8", duration: 7, delay: 2 },
  //   { Icon: Lightbulb, top: "bottom-20", left: "left-8", duration: 6, delay: 1 },
  //   { Icon: Smartphone, top: "top-16", left: "left-40", duration: 9, delay: 2.5 },
  //   { Icon: Database, top: "top-48", right: "right-40", duration: 7, delay: 1.8 },
  //   { Icon: Shield, top: "bottom-48", left: "left-16", duration: 8, delay: 0.8 },
  //   { Icon: Zap, top: "bottom-16", right: "right-12", duration: 6, delay: 3.2 },
  //   { Icon: Search, top: "top-24", left: "left-48", duration: 10, delay: 1.2 },
  //   { Icon: TrendingUp, top: "top-52", right: "right-28", duration: 8, delay: 2.8 },
  //   { Icon: Settings, top: "bottom-28", left: "left-44", duration: 7, delay: 0.3 },
  //   { Icon: Monitor, top: "bottom-44", right: "right-48", duration: 9, delay: 2.2 }
  // ];

  return (
    <div className="bg-gray-950 text-white font-sans overflow-x-hidden">
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 z-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Technology Innovation Background"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer overlay for better text readability and visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-pink-900/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/30 to-indigo-900/40"></div>
        </div>

        <motion.h4
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-5xl z-10 text-white drop-shadow-lg mx-auto"
        >
          Empowering the Future through{" "}
          <span className="text-yellow-300 drop-shadow-md">
            Research & Development, Smart IT Solutions, and Edutech Advancement.
          </span>
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative mt-5 sm:mt-6 text-sm sm:text-base md:text-xl max-w-3xl text-gray-100 z-10 drop-shadow-lg"
        >
          A technology-driven organization committed to groundbreaking R&D,
          transformative IT solutions, and immersive EdTech experiences —
          empowering innovation, fostering technical excellence, and
          shaping the future of technology.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative px-8 sm:px-10 py-3 bg-yellow-400 text-black rounded-full font-semibold shadow-2xl hover:bg-yellow-300 transition z-10 shadow-black/30"
          >
            Get Started 🚀
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative px-8 sm:px-10 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition z-10 backdrop-blur-sm bg-black/20"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-10 flex flex-col items-center z-10"
        >
          <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-black/10">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
          <span className="text-xs mt-2 text-white/90 drop-shadow-lg">Scroll</span>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold 
            text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Empowering the next generation through innovative technology solutions,
            education, and community-driven growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                icon: "🔬",
                title: "Research & Development",
                desc: "Cutting-edge R&D projects that solve real-world problems using modern technologies."
              },
              {
                icon: "💼",
                title: "IT Services",
                desc: "Custom web development, Mobile App Development, and IT solutions for businesses and startups."
              },
              {
                icon: "🎓",
                title: "Education & Training",
                desc: "Strategic EdTech initiatives driving future-focused learning and skill development."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-100 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold 
              text-gray-900 mb-6">
              Why Choose Stackenzo?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with educational excellence to deliver
              solutions that make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Swift Assistance", desc: "Quick turnaround times without compromising quality" },
              { icon: "🎯", title: "Expert Team", desc: "Experienced professionals in technology and education" },
              { icon: "🤝", title: "24/7 Support", desc: "Continuous support throughout your journey with us" },
              { icon: "📈", title: "Proven Results", desc: "Track record of successful projects and satisfied clients" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-950 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold 
          text-center mb-6 text-yellow-400">
          Our Programs
        </h2>
        <p className="text-center text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto">
          Explore our comprehensive range of programs designed to empower students,
          professionals, and businesses with cutting-edge technology skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-8 sm:gap-12 max-w-6xl mx-auto relative z-10">
          {[
            {
              title: "R & D Projects",
              desc: "Research-oriented projects solving real-life problems using modern technologies.",
              img: "https://eu-images.contentstack.com/v3/assets/blt7a82e963f79cc4ec/blte9ba4bb5c8fc7e51/64b54806962d8e60ca1b576d/RD.jpg",
              link: "/R_AND_D",
            },
            {
              title: "IT Services",
              desc: "Modern websites, dashboards, and platforms built for startups and institutions.",
              img: "https://ktla.com/wp-content/uploads/sites/4/2017/08/nasa.jpg",
              link: "/WebServices",
            },
            {
              title: "Robotics Education",
              desc: "Hands-on robotics learning for school students, focusing on innovation, logic, and creativity.",
              img: "https://tse3.mm.bing.net/th/id/OIP.95DU085B5v2VMvLso-nfzAAAAA",
              link: "/Robotics",
            },
            {
              title: "Workshops & Internships",
              desc: "Industry-aligned programs for college students to gain real-world engineering exposure.",
              img: "https://st2.depositphotos.com/3591429/8629/i/950/depositphotos_86293450-stock-photo-workshop-training-development-concept.jpg",
              link: "/WorkShops",
            },
            {
              title: "Digital Marketing",
              desc: "SEO, branding, content creation, and digital growth strategies for businesses.",
              img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
              link: "/DigitalMarketing",
            },
            {
              title: "GSIN Platform",
              desc: "A gamified tech ecosystem with challenges, leaderboards, and collaboration.",
              img: "https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20158.jpg",
              link: "/Community",
            },
          ].map((p, i) => (
            <Link to={p.link} key={i}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gray-900/70 backdrop-blur-xl border border-white/10 
                  rounded-2xl shadow-xl overflow-hidden relative z-10"
              >
                <img src={p.img} alt={p.title} className="h-44 sm:h-48 w-full object-cover" />
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Stats */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-gray-900 to-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 
          gap-6 sm:gap-10 text-center px-4">
          {[
            { label: "Students Trained", value: "1200+" },
            { label: "Projects Delivered", value: "150+" },
            { label: "Workshops Conducted", value: "80+" },
            { label: "Community Members", value: "3000+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/70 backdrop-blur-xl border border-white/10 
                rounded-xl sm:rounded-2xl p-6 sm:p-8 relative z-10"
            >
              <h3 className="text-2xl sm:text-4xl font-extrabold text-yellow-400">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-800 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">

          {/* Mission */}
          <motion.div className="bg-gray-700 p-6 sm:p-10 rounded-2xl shadow-2xl relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Our mission is to design, develop, and deliver intelligent technology solutions that solve real-world problems with precision and purpose.
              <br /><br />
              👉 Building scalable, secure, and future-ready applications<br />
              👉 Bridging the gap between theory and real-world implementation<br />
              👉 Enabling developers, startups, and businesses to innovate faster and smarter<br />
              👉 Creating systems that replace repetitive human effort with intelligent automation<br />
              👉 Revolutionizing education through cutting-edge EdTech solutions<br />
              👉 Encouraging a culture of continuous learning, experimentation, and excellence
              <br /><br />
              👉 to create technology that genuinely works, grows, and lasts.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div className="bg-gray-700 p-6 sm:p-10 rounded-2xl shadow-2xl relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              To become a leading innovation-driven technology ecosystem where research and development serve as the foundation for transformative solutions. We advance applied research that addresses real-world challenges, convert breakthrough ideas into scalable digital products, and engineer intelligent systems that power businesses and industries. <br></br><br></br>Through this innovation backbone, we strive to redefine education by integrating practical learning, industry exposure, and technology-enabled experiences — empowering the next generation to think, build, and lead with confidence in a rapidly evolving world.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-gray-950 px-4 relative z-10">
        <div className="max-w-xl sm:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-10 sm:mb-14">
            What People Say
          </h2>

          <motion.div
            key={index}
            className="bg-gray-900/70 backdrop-blur-xl border border-white/10 
              rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10"
          >
            <p className="italic text-sm sm:text-base text-gray-200">
              “{testimonials[index].quote}”
            </p>
            <h4 className="mt-5 font-bold text-yellow-400">
              {testimonials[index].name}
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              {testimonials[index].role}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-yellow-400 to-orange-500 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students and professionals who have already started their
            journey with Stackenzo. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">

            <button
              onClick={() => {
                document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3 bg-black text-yellow-400 rounded-full 
    font-semibold shadow-lg transition duration-300 
    hover:bg-gray-900 active:scale-95 text-center"
            >
              Start Your Journey
            </button>

            <Link to="/Contact" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-8 py-3 border-2 border-black 
      text-black rounded-full font-semibold 
      transition duration-300 
      hover:bg-black hover:text-yellow-400 
      active:scale-95 text-center"
              >
                Schedule a Call
              </button>
            </Link>

          </div>

        </div>
      </section>

      {/* Map Section (from Contact page) */}

      {/* Reusable Footer component */}
      <Footer />

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-green-500 rounded-full opacity-30 blur-md group-hover:opacity-50 transition duration-300"></div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/916281704664"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 
                       bg-green-500 hover:bg-green-600 
                       text-white rounded-full shadow-xl 
                       transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-7 h-7" />
          </a>

        </div>
      </div>

      {/* Scroll to Top */}
      <ScrollToTop />

    </div>
  );
}

export default Home;