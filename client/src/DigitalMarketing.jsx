import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp, Search, Share2, Mail, BarChart3, ChevronDown,
  Target, Users, Zap, X, CheckCircle, Rocket, Briefcase,
  Building2, GraduationCap, Sparkles, Award, Clock, HeadphonesIcon,
  PieChart, Radio, Megaphone, Globe, Smartphone, Eye
} from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StrategyButton from "./StrategyButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function DigitalMarketing() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [showExpertPopup, setShowExpertPopup] = useState(false);
  const [auditForm, setAuditForm] = useState({
    name: '', email: '', phone: '', company: '', website: '',
    industry: '', currentMarketing: '', goals: '', budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuditSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log('Submitting audit form:', auditForm);
      const response = await fetch('http://localhost:5000/api/marketing-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(auditForm)
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        alert('Thank you! We\'ll contact you within 24 hours with your free marketing audit.');
        setAuditForm({
          name: '', email: '', phone: '', company: '', website: '',
          industry: '', currentMarketing: '', goals: '', budget: ''
        });
        setShowAuditModal(false);
      } else {
        const errorMsg = data.errors ? data.errors.map(err => err.msg || err.message).join(', ') : data.message;
        alert('Error: ' + errorMsg);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please check if the server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Search Engine Optimization',
      desc: 'Improve your website\'s visibility and ranking on search engines for increased organic traffic',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO', 'SEO Audits']
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Marketing',
      desc: 'Build brand awareness and engage with your audience across all major social platforms',
      features: ['Content Creation', 'Community Management', 'Social Advertising', 'Influencer Marketing', 'Analytics', 'Strategy Planning']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Paid Advertising',
      desc: 'Drive targeted traffic and conversions through strategic paid advertising campaigns',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display Advertising', 'Retargeting', 'Campaign Optimization']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Content Marketing',
      desc: 'Create valuable content that attracts, engages, and converts your target audience',
      features: ['Content Strategy', 'Blog Writing', 'Video Content', 'Infographics', 'E-books', 'Content Distribution']
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email & WhatsApp Marketing',
      desc: 'Nurture leads and maintain customer relationships through personalized messaging',
      features: ['Email Campaigns', 'WhatsApp Business', 'Automation', 'Segmentation', 'A/B Testing', 'Performance Tracking']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      desc: 'Track, measure, and optimize your marketing performance with detailed insights',
      features: ['Google Analytics', 'Conversion Tracking', 'ROI Analysis', 'Custom Dashboards', 'Monthly Reports', 'Data Visualization']
    }
  ];

  const targetAudience = [
    {
      title: 'Startups & Scale-ups',
      desc: 'Accelerate growth and establish market presence in competitive landscapes',
      icon: Rocket,
      segment: 'Company Size: 1-50 employees',
      challenges: ['Limited marketing budget', 'Brand awareness', 'Rapid customer acquisition', 'Product-market fit'],
      solutions: ['Growth hacking strategies', 'Viral marketing campaigns', 'Influencer partnerships', 'Data-driven optimization']
    },
    {
      title: 'Small & Medium Businesses',
      desc: 'Scale operations and dominate local markets with strategic digital presence',
      icon: Briefcase,
      segment: 'Company Size: 50-500 employees',
      challenges: ['Local market competition', 'Resource constraints', 'Customer retention', 'Digital transformation'],
      solutions: ['Local SEO dominance', 'Omnichannel marketing', 'Customer experience optimization', 'Automation implementation']
    },
    {
      title: 'Enterprise Corporations',
      desc: 'Drive enterprise-wide digital transformation and maintain market leadership',
      icon: Building2,
      segment: 'Company Size: 500+ employees',
      challenges: ['Complex organizational structure', 'Legacy system integration', 'Brand consistency', 'Global market presence'],
      solutions: ['Enterprise marketing automation', 'Global campaign orchestration', 'Advanced analytics platforms', 'Cross-channel attribution']
    },
    {
      title: 'E-commerce & DTC Brands',
      desc: 'Maximize online revenue and optimize customer lifetime value',
      icon: Globe,
      segment: 'Business Model: Direct-to-consumer',
      challenges: ['High customer acquisition costs', 'Shopping cart abandonment', 'Inventory visibility', 'Multi-channel complexity'],
      solutions: ['Performance marketing mastery', 'Conversion rate optimization', 'Customer data platforms', 'Personalized shopping experiences']
    }
  ];

  const achievements = [
    { icon: TrendingUp, value: '150%', label: 'Average Revenue Growth', desc: 'Within 12 months of partnership' },
    { icon: Users, value: '300%', label: 'Lead Generation', desc: 'Improvement in qualified leads' },
    { icon: Eye, value: '200%', label: 'Brand Visibility', desc: 'Increase in online presence' },
    { icon: Award, value: '4:1', label: 'ROI', desc: 'Average return on investment' }
  ];

  const marketingWorkflow = [
    {
      title: 'Brand Marketing',
      desc: 'Build a strong brand identity and establish market presence',
      activities: ['Brand Strategy', 'Brand Identity Design', 'Brand Positioning', 'Brand Guidelines', 'Brand Storytelling', 'Brand Awareness Campaigns']
    },
    {
      title: 'Digital Marketing',
      desc: 'Leverage digital channels to reach and engage your target audience',
      activities: ['Website Optimization', 'Digital Strategy', 'Online Presence', 'Digital Campaigns', 'Multi-channel Marketing', 'Marketing Automation']
    },
    {
      title: 'Search Marketing',
      desc: 'Dominate search results and drive qualified traffic',
      activities: ['SEO Strategy', 'Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building', 'Search Ads (PPC)']
    },
    {
      title: 'Social Media',
      desc: 'Build community and engage audiences across social platforms',
      activities: ['Social Strategy', 'Content Creation', 'Community Management', 'Social Advertising', 'Influencer Outreach', 'Social Listening']
    },
    {
      title: 'Content Marketing',
      desc: 'Create valuable content that attracts and converts',
      activities: ['Content Strategy', 'Blog Posts', 'Video Content', 'Infographics', 'E-books & Guides', 'Content Distribution']
    },
    {
      title: 'Performance Marketing',
      desc: 'Drive measurable results through data-driven campaigns',
      activities: ['Paid Advertising', 'Campaign Optimization', 'Conversion Tracking', 'ROI Analysis', 'Budget Management', 'Performance Reports']
    },
    {
      title: 'Influencer Marketing',
      desc: 'Leverage influencer partnerships to expand reach',
      activities: ['Influencer Research', 'Partnership Management', 'Campaign Collaboration', 'Content Co-creation', 'Performance Tracking', 'Relationship Building']
    },
    {
      title: 'Lead Generation',
      desc: 'Attract and capture qualified leads for your business',
      activities: ['Lead Magnets', 'Landing Pages', 'Forms & CTAs', 'Lead Nurturing', 'Email Sequences', 'Lead Scoring']
    },
    {
      title: 'CRO',
      desc: 'Optimize user experience to maximize conversions',
      activities: ['A/B Testing', 'User Experience Analysis', 'Funnel Optimization', 'Heat Mapping', 'User Testing', 'Conversion Tracking']
    },
    {
      title: 'Analytics',
      desc: 'Measure, analyze, and derive insights from data',
      activities: ['Data Collection', 'Performance Tracking', 'Custom Dashboards', 'Reporting', 'Data Visualization', 'Insights & Recommendations']
    },
    {
      title: 'Local Marketing',
      desc: 'Dominate local search and attract nearby customers',
      activities: ['Google Business Profile', 'Local SEO', 'Local Citations', 'Review Management', 'Local Advertising', 'Community Engagement']
    },
    {
      title: 'Growth Marketing',
      desc: 'Implement scalable strategies for rapid business growth',
      activities: ['Growth Experiments', 'Viral Marketing', 'Referral Programs', 'Product-Led Growth', 'Retention Strategies', 'Scale Optimization']
    }
  ];

  const strategy = [
    {
      step: '01',
      title: 'Brand & Market Analysis',
      desc: 'Comprehensive analysis of your brand, competitors, and target market to identify opportunities',
      icon: Search,
      deliverables: ['Market Research Report', 'Competitor Analysis', 'Brand Audit', 'Target Audience Personas']
    },
    {
      step: '02',
      title: 'Strategy Planning',
      desc: 'Develop a customized digital marketing strategy aligned with your business goals',
      icon: Target,
      deliverables: ['Marketing Strategy Document', 'Channel Selection', 'Budget Allocation', 'Timeline & Milestones']
    },
    {
      step: '03',
      title: 'Content & Campaign Creation',
      desc: 'Create compelling content and campaigns that resonate with your target audience',
      icon: Megaphone,
      deliverables: ['Content Calendar', 'Creative Assets', 'Campaign Setup', 'Landing Pages']
    },
    {
      step: '04',
      title: 'Execution & Optimization',
      desc: 'Launch campaigns and continuously optimize based on performance data',
      icon: Zap,
      deliverables: ['Campaign Launch', 'A/B Testing', 'Performance Monitoring', 'Optimization Reports']
    },
    {
      step: '05',
      title: 'Monitoring & Analytics',
      desc: 'Track performance metrics and provide detailed insights for decision making',
      icon: PieChart,
      deliverables: ['Analytics Setup', 'Performance Dashboards', 'Monthly Reports', 'ROI Analysis']
    },
    {
      step: '06',
      title: 'Continuous Improvement',
      desc: 'Refine strategies based on data insights and market changes for sustained growth',
      icon: TrendingUp,
      deliverables: ['Strategy Refinement', 'New Opportunities', 'Scale Recommendations', 'Future Roadmap']
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      challenge: 'Build trust and attract patients in a competitive market',
      solution: 'Content marketing, local SEO, and reputation management',
      results: ['40% increase in appointments', '60% improvement in online reviews', '200% growth in website traffic']
    },
    {
      industry: 'Education',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
      challenge: 'Increase student enrollment and brand awareness',
      solution: 'Social media campaigns, targeted advertising, and content marketing',
      results: ['50% increase in inquiries', '30% higher enrollment rate', '150% social media growth']
    },
    {
      industry: 'Real Estate',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
      challenge: 'Generate quality leads and showcase properties effectively',
      solution: 'Facebook advertising, SEO, and virtual tour marketing',
      results: ['300% increase in leads', '25% faster property sales', '80% improvement in lead quality']
    },
    {
      industry: 'E-commerce',
      icon: '🛒',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      challenge: 'Reduce customer acquisition cost and increase sales',
      solution: 'Google Shopping ads, email automation, and retargeting',
      results: ['45% reduction in CAC', '120% increase in revenue', '35% improvement in conversion rate']
    },
    {
      industry: 'Technology',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
      challenge: 'Establish thought leadership and generate B2B leads',
      solution: 'LinkedIn marketing, content marketing, and webinar campaigns',
      results: ['200% increase in qualified leads', '150% growth in brand mentions', '60% improvement in sales cycle']
    },
    {
      industry: 'Hospitality',
      icon: '🏨',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      challenge: 'Increase bookings and improve online reputation',
      solution: 'Social media marketing, review management, and local SEO',
      results: ['70% increase in direct bookings', '4.8/5 average rating', '90% improvement in local visibility']
    }
  ];

  const whyChooseUs = [
    { icon: '📊', title: 'Data-Driven Approach', desc: 'Every decision backed by comprehensive analytics and insights' },
    { icon: '🎯', title: 'Targeted Strategies', desc: 'Customized campaigns designed for your specific audience and goals' },
    { icon: '💰', title: 'ROI Focused', desc: 'Maximize your marketing budget with proven strategies that deliver results' },
    { icon: '🚀', title: 'Rapid Growth', desc: 'Accelerate your business growth with scalable marketing solutions' },
    { icon: '🤝', title: 'Dedicated Support', desc: 'Personal account manager and 24/7 support for all your needs' },
    { icon: '📈', title: 'Proven Results', desc: 'Track record of success across various industries and business sizes' }
  ];

  const faqs = [
    {
      q: "How long does it take to see results from digital marketing?",
      a: "Results vary by channel. SEO typically takes 3-6 months, while paid advertising can show results within days. Social media and content marketing usually show significant results within 2-3 months."
    },
    {
      q: "What's the minimum budget required for digital marketing?",
      a: "We work with budgets starting from $1,000/month. The budget depends on your goals, industry competition, and chosen channels. We'll recommend the optimal allocation for maximum ROI."
    },
    {
      q: "Do you work with businesses in all industries?",
      a: "Yes, we have experience across various industries including healthcare, education, e-commerce, technology, real estate, and more. We adapt our strategies to each industry's unique requirements."
    },
    {
      q: "How do you measure and report on campaign performance?",
      a: "We provide detailed monthly reports with key metrics, insights, and recommendations. You'll have access to real-time dashboards and regular strategy calls to discuss performance."
    },
    {
      q: "Can you help with both B2B and B2C marketing?",
      a: "Absolutely! We have specialized teams for both B2B and B2C marketing, each with expertise in the unique strategies and channels that work best for each audience type."
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section - 100vh */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-blue-900/30 to-purple-900/30" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated Marketing Elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-6xl opacity-20"
          >
            📈
          </motion.div>
        </div>

        <div className="absolute top-32 right-16 hidden lg:block">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-5xl opacity-20"
          >
            📢
          </motion.div>
        </div>

        <div className="absolute bottom-24 left-20 hidden lg:block">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-4xl opacity-20"
          >
            🎯
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-24 hidden lg:block">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 360] }}
            transition={{ y: { repeat: Infinity, duration: 4 }, rotate: { repeat: Infinity, duration: 10 } }}
            className="text-5xl opacity-20"
          >
            📱
          </motion.div>
        </div>

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
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6"
            >
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span className="text-sm sm:text-base text-yellow-400 font-semibold">Results-Driven Digital Marketing</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400/50" />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Drive Growth with
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Data-Driven Marketing
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              We help brands increase visibility, generate quality leads, and grow revenue
              through strategic, data-driven marketing solutions tailored to your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAuditModal(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
              >
                Get Free Marketing Audit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowExpertPopup(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-400 rounded-full text-sm sm:text-base font-semibold hover:bg-yellow-400 hover:text-black transition-all"
              >
                Talk to a Marketing Expert
              </motion.button>
            </div>

            {/* Scroll Indicator */}
            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer mt-7"
              onClick={() => {
                const nextSection = document.querySelector('section:nth-of-type(2)');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400 mb-1">Scroll</span>
                <ChevronDown className="w-5 h-5 text-yellow-400" />
              </div>
            </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all text-center"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-yellow-400 mb-1">{stat.label}</div>
                <p className="text-[10px] sm:text-xs text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-yellow-400">
              Who We Help
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Tailored marketing solutions for businesses at every stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {targetAudience.map((audience, i) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 p-5 sm:p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{audience.title}</h3>
                  <p className="text-[10px] sm:text-xs text-yellow-400/80 font-medium mb-2">{audience.segment}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{audience.desc}</p>

                  <div className="space-y-2 sm:space-y-3">
                    {/* <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-red-400 mb-1">Key Challenges:</p>
                      <div className="flex flex-wrap gap-1">
                        {audience.challenges.map((challenge, j) => (
                          <span key={j} className="text-[8px] sm:text-[10px] bg-red-500/10 text-red-400 px-1.5 sm:px-2 py-0.5 rounded-full">
                            {challenge}
                          </span>
                        ))}
                      </div> */}
                    {/* </div> */}
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-green-400 mb-1">Strategic Solutions:</p>
                      <div className="flex flex-wrap gap-1">
                        {audience.solutions.map((solution, j) => (
                          <span key={j} className="text-[8px] sm:text-[10px] bg-green-500/10 text-green-400 px-1.5 sm:px-2 py-0.5 rounded-full">
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-yellow-400">
              Services We Offer
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Comprehensive marketing solutions to drive your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 sm:p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all"
              >
                <div className="text-yellow-400 mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{service.desc}</p>
                <div className="grid grid-cols-2 gap-1 sm:gap-2">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400">
                      <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-green-400 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* Industry Use Cases */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-yellow-400">
              Industry Success Stories
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Real results across diverse industries
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }}
            className="pb-10"
          >
            {useCases.map((useCase, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all h-full overflow-hidden"
                >
                  <div className="relative h-32 sm:h-40">
                    <img
                      src={useCase.image}
                      alt={useCase.industry}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                      {useCase.icon} {useCase.industry}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-gray-300 mb-2">
                      <span className="font-semibold text-white">Challenge:</span> {useCase.challenge}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3">
                      <span className="font-semibold text-white">Solution:</span> {useCase.solution}
                    </p>
                    <div className="space-y-1">
                      {useCase.results.map((result, j) => (
                        <div key={j} className="flex items-center gap-1 text-[10px] sm:text-xs text-green-400">
                          <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-yellow-400">
              Why Choose Us?
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              What makes us different from other marketing agencies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChooseUs.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 sm:p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all text-center"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{reason.icon}</div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-yellow-400">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center hover:bg-gray-800/50 transition-all gap-2"
                >
                  <h3 className="text-xs sm:text-sm font-semibold text-white pr-2">{faq.q}</h3>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2070')] bg-cover bg-center mix-blend-overlay opacity-30" />

            <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Let's create a data-driven marketing strategy that delivers measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAuditModal(true)}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-gray-900 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transition-all"
                >
                  Get Free Marketing Audit
                </motion.button>
                <StrategyButton />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talk to Expert Popup */}
      <AnimatePresence>
        {showExpertPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowExpertPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl max-w-md w-full border border-yellow-400/30 shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
                <h2 className="text-base sm:text-lg font-bold text-black">Contact Our Marketing Expert</h2>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Please contact us. We will guide you with the best marketing strategy and required information.
                </p>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3 text-sm">
                    <HeadphonesIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">marketing@stackenzo.com</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowExpertPopup(false)}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Marketing Audit Modal */}
      <AnimatePresence>
        {showAuditModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowAuditModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-yellow-400/30 shadow-2xl"
            >
              <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 flex justify-between items-center">
                <h2 className="text-base sm:text-lg font-bold text-black">Free Marketing Audit</h2>
                <button
                  onClick={() => setShowAuditModal(false)}
                  className="text-black hover:text-gray-700 p-1 hover:bg-white/20 rounded-lg transition-all"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <form onSubmit={handleAuditSubmit} className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={auditForm.name}
                    onChange={(e) => setAuditForm({ ...auditForm, name: e.target.value })}
                    className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm placeholder-gray-500 focus:border-yellow-400 outline-none transition-all"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={auditForm.email}
                    onChange={(e) => setAuditForm({ ...auditForm, email: e.target.value })}
                    className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm placeholder-gray-500 focus:border-yellow-400 outline-none transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={auditForm.phone}
                    onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                    className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm placeholder-gray-500 focus:border-yellow-400 outline-none transition-all"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name *"
                    value={auditForm.company}
                    onChange={(e) => setAuditForm({ ...auditForm, company: e.target.value })}
                    className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm placeholder-gray-500 focus:border-yellow-400 outline-none transition-all"
                    required
                  />
                </div>

                <input
                  type="url"
                  placeholder="Website URL"
                  value={auditForm.website}
                  onChange={(e) => setAuditForm({ ...auditForm, website: e.target.value })}
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm placeholder-gray-500 focus:border-yellow-400 outline-none transition-all"
                />

                <select
                  value={auditForm.industry}
                  onChange={(e) => setAuditForm({ ...auditForm, industry: e.target.value })}
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm focus:border-yellow-400 outline-none"
                  required
                >
                  <option value="">Select Industry *</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Technology">Technology</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  placeholder="Current Marketing Efforts"
                  value={auditForm.currentMarketing}
                  onChange={(e) => setAuditForm({ ...auditForm, currentMarketing: e.target.value })}
                  rows="2"
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm placeholder-gray-500 focus:border-yellow-400 outline-none transition-all resize-none"
                />

                <textarea
                  placeholder="Marketing Goals *"
                  value={auditForm.goals}
                  onChange={(e) => setAuditForm({ ...auditForm, goals: e.target.value })}
                  rows="2"
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm placeholder-gray-500 focus:border-yellow-400 outline-none transition-all resize-none"
                  required
                />

                <select
                  value={auditForm.budget}
                  onChange={(e) => setAuditForm({ ...auditForm, budget: e.target.value })}
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-xs sm:text-sm focus:border-yellow-400 outline-none"
                  required
                >
                  <option value="">Monthly Marketing Budget *</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000+">$25,000+</option>
                </select>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Audit'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default DigitalMarketing;