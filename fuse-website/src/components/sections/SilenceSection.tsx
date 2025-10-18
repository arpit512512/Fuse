"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

export function SilenceSection() {
  return (
    <section className="grid-bg py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Automate the Meaningless
              </h2>
              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <p><span className="text-gray-900 font-semibold">Context hunting.</span> Workflow learning. Intelligent execution.</p>
                <p>Understanding that evolves with your team.</p>
                <p>
                  <span className="text-gray-900 font-semibold">Fuse learns how you work</span> — 
                  then proposes solutions that feel natural.
                </p>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-3 cursor-pointer group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-gray-400 group-hover:bg-gray-600 rounded-full mt-2 transition-colors duration-200"></div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">Hunts through commits, logs, traces, and conversations for complete context</span>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3 cursor-pointer group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-gray-400 group-hover:bg-gray-600 rounded-full mt-2 transition-colors duration-200"></div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">Learns your team's patterns by watching how you solve problems</span>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3 cursor-pointer group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-gray-400 group-hover:bg-gray-600 rounded-full mt-2 transition-colors duration-200"></div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">Proposes solutions that match your workflow and coding style</span>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <img 
                src="/fuse-images/fuse-mvp-proto-all.png" 
                alt="Fuse MVP - Complete Workflow"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
