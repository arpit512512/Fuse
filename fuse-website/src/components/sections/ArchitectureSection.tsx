"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { LineChart, Brain, Rocket, ArrowRight } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-gray-400 rounded-full" />
              Architecture
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Architecture of{" "}
              <span className="text-gray-600">
                Attention
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Fuse hunts for context in the deepest corners of your systems, understands your workflows by watching how you work, 
              and proposes intelligent actions while keeping you in control.
            </p>
          </FadeIn>
        </div>

        {/* Process Flow */}
        <FadeIn delay={0.6} className="mb-20">
          <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-8 transition-colors duration-300">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <motion.div 
                className="flex items-center gap-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <span className="text-gray-700 font-bold">1</span>
                </div>
                <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200">Perception</span>
              </motion.div>
              
              <ArrowRight className="w-6 h-6 text-gray-400" />
              
              <motion.div 
                className="flex items-center gap-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <span className="text-gray-700 font-bold">2</span>
                </div>
                <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200">Planning</span>
              </motion.div>
              
              <ArrowRight className="w-6 h-6 text-gray-400" />
              
              <motion.div 
                className="flex items-center gap-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <span className="text-gray-700 font-bold">3</span>
                </div>
                <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200">Action</span>
              </motion.div>
              
              <ArrowRight className="w-6 h-6 text-gray-400" />
              
              <motion.div 
                className="flex items-center gap-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <span className="text-gray-700 font-bold">4</span>
                </div>
                <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200">Reflection</span>
              </motion.div>
            </div>
          </div>
        </FadeIn>

        {/* MVP Visual Examples */}
        <FadeIn delay={0.8} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/fuse-images/fuse-mvp-proto-chat.png" 
                alt="Fuse Chat Interface"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Intelligent Assistant</h4>
                <p className="text-sm text-gray-600">Context analysis and conversation</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/fuse-images/fuse-mvp-proto-plan-suggestion.png" 
                alt="Fuse Plan Suggestion"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Strategy Planning</h4>
                <p className="text-sm text-gray-600">Automated incident resolution plans</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/fuse-images/fuse-mvp-proto-all.png" 
                alt="Fuse Complete Interface"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Complete Workflow</h4>
                <p className="text-sm text-gray-600">End-to-end incident management</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Animated Flow Diagram */}
        <div className="relative py-16">
          {/* Background Flow Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-32 opacity-20" viewBox="0 0 800 128">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <motion.path
                d="M100,64 Q400,20 700,64"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>
          </div>

          {/* Flow Stages */}
          <div className="relative flex items-center justify-center space-x-16 lg:space-x-24">
            {/* Perception */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <LineChart className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
                
                {/* Subtle glow effect */}
                <motion.div 
                  className="absolute inset-0 w-20 h-20 bg-blue-100 rounded-full mx-auto opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Perception
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-600 max-w-xs leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Hunts through GitHub commits, Buildkite logs, Datadog traces, and Slack conversations to understand the full context of every issue.
              </motion.p>
            </motion.div>

            {/* Planning */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Brain className="w-8 h-8 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                </motion.div>
                
                {/* Subtle glow effect */}
                <motion.div 
                  className="absolute inset-0 w-20 h-20 bg-purple-100 rounded-full mx-auto opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Planning
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-600 max-w-xs leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                Learns your team's patterns by watching how you work, then proposes intelligent solutions that match your workflow and coding style.
              </motion.p>
            </motion.div>

            {/* Action */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Rocket className="w-8 h-8 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
                </motion.div>
                
                {/* Subtle glow effect */}
                <motion.div 
                  className="absolute inset-0 w-20 h-20 bg-green-100 rounded-full mx-auto opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
              
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                Action
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-600 max-w-xs leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                Executes actions with your approval, following your team's processes and maintaining full visibility into every change.
              </motion.p>
            </motion.div>
          </div>

          {/* Mobile Stack */}
          <div className="lg:hidden mt-16 space-y-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <LineChart className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Perception</h3>
              <p className="text-sm text-gray-600">
                Hunts through GitHub commits, Buildkite logs, Datadog traces, and Slack conversations to understand the full context of every issue.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Brain className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-sm text-gray-600">
                Learns your team's patterns by watching how you work, then proposes intelligent solutions that match your workflow and coding style.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Rocket className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Action</h3>
              <p className="text-sm text-gray-600">
                Executes actions with your approval, following your team's processes and maintaining full visibility into every change.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={1} className="text-center mt-20">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to see Fuse in action?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the private beta and experience the future of engineering.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Request Early Access
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}