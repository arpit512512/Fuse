"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Brain, Rocket, ArrowRight } from "lucide-react";

export function ArchitectureSection() {
  const agents = [
    {
      title: "Perception Agents",
      description: "Stream live context from GitHub, Buildkite, Datadog, Slack, Docs.",
      icon: LineChart,
      color: "border-gray-200",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
      gradient: "from-gray-500 to-gray-600"
    },
    {
      title: "Planner Agent", 
      description: "Reasons over signals and proposes safe, explainable next steps.",
      icon: Brain,
      color: "border-gray-200",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
      gradient: "from-gray-500 to-gray-600"
    },
    {
      title: "Action Agent",
      description: "Executes verified actions with human-in-loop control.",
      icon: Rocket,
      color: "border-gray-200",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
      gradient: "from-gray-500 to-gray-600"
    }
  ];

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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fuse isn't a chatbot. It's a system that learns how you work — and works with you.
            </p>
          </FadeIn>
        </div>

        {/* Process Flow */}
        <FadeIn delay={0.6} className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-bold">1</span>
                </div>
                <span className="text-gray-700 font-medium">Perception</span>
              </div>
              
              <ArrowRight className="w-6 h-6 text-gray-400" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-bold">2</span>
                </div>
                <span className="text-gray-700 font-medium">Planning</span>
              </div>
              
              <ArrowRight className="w-6 h-6 text-gray-400" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-bold">3</span>
                </div>
                <span className="text-gray-700 font-medium">Action</span>
              </div>
              
              <ArrowRight className="w-6 h-6 text-gray-400" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-bold">4</span>
                </div>
                <span className="text-gray-700 font-medium">Reflection</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <FadeIn key={agent.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className={`relative overflow-hidden border-2 ${agent.color} hover:shadow-xl transition-all duration-300 h-full`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${agent.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                      <agent.icon className={`w-8 h-8 ${agent.iconColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {agent.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {agent.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-gray-500">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300`}></div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
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