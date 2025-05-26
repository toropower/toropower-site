'use client';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Toro Power
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
        >
          AI-Powered Data Modernization for Industry Leaders
        </motion.p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-24">
        {[
          { title: "AI & Data Science", desc: "Unlock insights from legacy data with intelligent automation." },
          { title: "System Integration", desc: "Bridge modern AI with traditional infrastructure." },
          { title: "Real-Time Dashboards", desc: "Visualize your operations with dynamic, responsive reporting." },
          { title: "Industry Solutions", desc: "Custom solutions for oil & gas, utilities, agriculture, and more." },
          { title: "Smart Automation", desc: "Streamline business processes with adaptive workflows." },
          { title: "Cloud Migration", desc: "Migrate securely and smartly with AI-assisted tools." }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 p-6 rounded-2xl backdrop-blur shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}