"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Zap, Github, Twitter, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span>NextStart</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com" 
              target="_blank"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800">
                Ready for OpenNext
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent pb-2"
            >
              Deploy faster, <br /> scale better.
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              A premium boilerplate designed for the modern web. Built with Next.js 15, Tailwind CSS v4, and optimized for instant deployments.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="#"
                className="group h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#"
                className="h-12 px-8 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-900 dark:text-slate-200 font-medium flex items-center gap-2 transition-colors"
              >
                View Documentation
              </Link>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: Rocket,
                title: "Instant Deploy",
                desc: "Optimized configurations for OpenNext and Cloudflare Pages mean zero-config deployments."
              },
              {
                icon: Code2,
                title: "Type Safe",
                desc: "Built with TypeScript from the ground up. Catch errors early and code with confidence."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Powered by the latest Next.js features including Server Components and Streaming."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="border-t border-slate-200 dark:border-slate-800 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why developers choose us?</h2>
                <div className="space-y-4">
                  {[
                    "Zero configuration required",
                    "Edge-ready by default",
                    "Best-in-class performance",
                    "Beautiful default components"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl"></div>
                 <div className="relative p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-slate-400">// Deploy in seconds</div>
                      <div className="flex gap-2">
                        <span className="text-purple-400">npx</span>
                        <span>open-next deploy</span>
                      </div>
                      <div className="text-green-400 pt-2">➜  Deploying to Edge...</div>
                      <div className="text-green-400">➜  Build Complete (890ms)</div>
                      <div className="text-blue-400">➜  https://my-app.pages.dev</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-slate-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} My App. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
