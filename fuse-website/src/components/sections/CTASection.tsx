"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { WaitingListForm } from "@/components/WaitingListForm";

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-2xl">
        <FadeIn>
          <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-lg p-12 text-center transition-all duration-300 group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                Join the Founding Engineers Program
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Early access to Fuse, direct contact with the founders, and feature priority. Limited to 50 teams.
              </p>

              <WaitingListForm />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
