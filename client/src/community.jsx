import { useMemo } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import pic from "./image.png"
import {
  Gamepad2,
  Star,
  Users,
  Trophy,
  Rocket,
  CheckCircle2,
  BookOpen,
  LineChart,
  Medal,
  Brain,
  Cpu,
  Globe,
  MousePointerClick,
  ArrowLeft,
} from "lucide-react";

/**
 * Stackenzo — Gamified Learning Platform (Showcase Page)
 * Tech: React + TailwindCSS + Framer Motion (+ react-countup, lucide-react)
 *
 * Drop this file into your React app (e.g., src/pages/StackenzoGamifiedShowcase.jsx)
 * and route to it. All sections are responsive and animation-ready.
 */
import "./App.css"
const fadeUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, delay },
});

const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Community() {
  const navigate = useNavigate();
  
  const features = useMemo(
    () => [
      {
        icon: Gamepad2,
        title: "Gamified Learning",
        desc: "Levels, badges, streaks, coins, leaderboards — learning that feels like play.",
      },
      {
        icon: BookOpen,
        title: "Adaptive Modules",
        desc: "Quizzes and tasks that adjust to the learner’s performance in real-time.",
      },
      {
        icon: Users,
        title: "Collaboration Rooms",
        desc: "1:1, small groups, or seminar halls with chat, screen share, and whiteboards.",
      },
      {
        icon: LineChart,
        title: "Analytics for Mentors",
        desc: "Dashboards to track progress, engagement, and outcomes instantly.",
      },
      {
        icon: Trophy,
        title: "Rewards Engine",
        desc: "Redeem points for gifts, subscriptions, or exclusive access tiers.",
      },
      {
        icon: Star,
        title: "Ranks & Seasons",
        desc: "Gold, Silver, Bronze tiers with seasonal resets to keep it fresh.",
      },
    ],
    []
  );

  const tech = useMemo(
    () => [
      { icon: Cpu, label: "React.js" },
      { icon: Globe, label: "Tailwind CSS" },
      { icon: Rocket, label: "Framer Motion" },
      { icon: Brain, label: "Node/Express (planned)" },
      { icon: Medal, label: "MongoDB (planned)" },
    ],
    []
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
              <span className="font-bold tracking-wide">Stackenzo</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#overview" className="hover:text-white">Overview</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#ux" className="hover:text-white">UI/UX</a>
            <a href="#tech" className="hover:text-white">Tech</a>
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
          </nav>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-90"
          >
            <MousePointerClick className="h-4 w-4" /> Explore
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36 text-center">
          <motion.h1 {...fadeUp(0)} className="text-4xl md:text-6xl font-extrabold leading-tight">
            Reimagining Learning
            <span className="block bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">through Gamification</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.15)}
            className="mt-5 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            A virtual campus with rooms, mentors, whiteboards, screen sharing, tasks, and rewards — built to make learning addictive and impactful.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-10 flex items-center justify-center gap-4">
            <a href="#features" className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/15">
              Explore Features
            </a>
            <a
              href="#cta"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-90"
            >
              See it in Action
            </a>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fadeUp(0)} className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">About the Project</h2>
            <p className="mt-4 text-slate-300">
              Built by <span className="font-semibold text-white">Stackenzo</span>, this platform blends
              real-time collaboration with a rich gamification engine. Students enter rooms (1, 2, 10-seat, seminar, mentor),
              collaborate via chat, whiteboards, and screen share, complete tasks, and redeem points for tangible rewards.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-fuchsia-400"/> Real-time rooms & presence with chat and voice/video (WebRTC-ready)</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-fuchsia-400"/> Collaborative whiteboard in each room (Fabric/Excalidraw compatible)</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-fuchsia-400"/> Tasks → Points → Ranks → Rewards (Gold/Silver/Bronze)</li>
            </ul>
          </div>
          <motion.div
  className="aspect-video rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-xl flex items-center justify-center"
  initial={{ opacity: 0, scale: 0.92 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <img 
    src={pic} 
    alt="Stackenzo Preview" 
    className="rounded-xl shadow-lg max-h-full max-w-full object-contain" 
  />
</motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-950/40 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold text-center">Key Features</motion.h2>
          <motion.p {...fadeUp(0.1)} className="mt-3 text-center text-slate-300 max-w-3xl mx-auto">
            Everything students and mentors need, crafted with delightful micro‑interactions.
          </motion.p>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                variants={cardVariant}
                whileHover={{ translateY: -4 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <f.icon className="h-6 w-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UI/UX */}
      <section id="ux" className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold text-center">Engaging UI / UX</motion.h2>
        <motion.p {...fadeUp(0.1)} className="mt-3 text-center text-slate-300 max-w-3xl mx-auto">
          Dark theme by default, vibrant progress bars, confetti on level-ups, and buttery‑smooth transitions.
        </motion.p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Dark Mode", "Achievement Badges", "Micro‑interactions"].map((t, i) => (
            <motion.div key={t} {...fadeUp(0.1 + i * 0.1)} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <h4 className="font-semibold">{t}</h4>
              <p className="mt-2 text-sm text-slate-300">Thoughtfully designed to motivate, celebrate, and guide learners.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="bg-slate-950/40 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold text-center">Technology Stack</motion.h2>
          <motion.p {...fadeUp(0.1)} className="mt-3 text-center text-slate-300 max-w-3xl mx-auto">
            Built for speed, extensibility, and real‑time collaboration.
          </motion.p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {tech.map(({ icon: Icon, label }, i) => (
              <motion.div key={label} {...fadeUp(0.05 * i)} className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-center">
                <div className="mx-auto mb-3 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-indigo-300" />
                </div>
                <p className="text-sm text-slate-200 font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div {...fadeUp(0)} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">The Problem</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Low engagement in traditional learning formats.</li>
              <li>Limited real‑time visibility into learner progress.</li>
              <li>Weak connection between classroom and industry skills.</li>
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">Our Solution</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Game loops that reward consistency and mastery.</li>
              <li>Mentor analytics, leaderboards, and adaptive challenges.</li>
              <li>Rooms for collaboration mirroring real project environments.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Impact (Counters) */}
      <section id="impact" className="bg-slate-950/40 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold">Impact</motion.h2>
          <motion.p {...fadeUp(0.1)} className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Early pilots show strong engagement and measurable learning outcomes.
          </motion.p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Engagement Increase", end: 95, suffix: "%" },
              { label: "Challenges Launched", end: 50, suffix: "+" },
              { label: "Active Learners", end: 1000, suffix: "+" },
            ].map((c, i) => (
              <motion.div key={c.label} {...fadeUp(0.05 * i)} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <p className="text-4xl font-extrabold">
                  <CountUp end={c.end} duration={2} />{c.suffix}
                </p>
                <p className="mt-2 text-slate-300">{c.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Screens (placeholders) */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold text-center">Showcase</motion.h2>
        <motion.p {...fadeUp(0.1)} className="mt-3 text-center text-slate-300 max-w-3xl mx-auto">
          A peek at key screens: dashboards, quizzes, leaderboards, and reward center.
        </motion.p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center shadow-lg"
              {...fadeUp(0.05 * i)}
            >
              <div className="text-center">
                <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-400 to-fuchsia-400" />
                <p className="text-sm text-slate-400">Screenshot Placeholder {i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-slate-950/40 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold text-center">Roadmap</motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Phase 1 — Core",
                points: [
                  "Auth, profiles, and presence",
                  "Rooms (1/2/10/seminar/mentor)",
                  "Chat + whiteboard",
                ],
              },
              {
                title: "Phase 2 — Collaboration",
                points: [
                  "Screen share (WebRTC)",
                  "Tasks & adaptive quizzes",
                  "Leaderboards & ranks",
                ],
              },
              {
                title: "Phase 3 — Scale",
                points: [
                  "Rewards marketplace",
                  "Analytics for mentors",
                  "Perf & infra scaling",
                ],
              },
            ].map((col, i) => (
              <motion.div key={col.title} {...fadeUp(0.05 * i)} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <h4 className="font-semibold">{col.title}</h4>
                <ul className="mt-3 space-y-2 text-slate-300">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-fuchsia-400"/> {p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold">
          Powered by <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Stackenzo</span>
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="mt-3 text-slate-300 max-w-2xl mx-auto">
          Bridging education and industry with playful, data‑driven learning experiences.
        </motion.p>
        <motion.div {...fadeUp(0.2)} className="mt-8 flex items-center justify-center gap-4">
          <a href="#" className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-90">Request Demo</a>
          <a href="#" className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/15">View Case Study</a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Stackenzo. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Community;