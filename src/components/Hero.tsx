"use client";

import { useState, useEffect } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MousePointer,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SlideIn from "./transitions/slide-in";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position for the spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const nameText = "Harrison Kamau";
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-[90vh] w-full flex items-center justify-center relative overflow-hidden py-20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-300/20 to-teal-300/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-400/10 to-teal-400/10 blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]" />

        {/* Spotlight effect */}
        {isHovering && (
          <div
            className="pointer-events-none absolute inset-0 z-10 transition duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 236, 184, 0.06), transparent 40%)`,
            }}
          />
        )}
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <SlideIn direction="up" className="mb-6">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={0.1} className="mb-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="block text-slate-600 dark:text-slate-300 mb-2">
                Hello, I'm
              </span>
              <div className="relative">
                <div className="flex justify-center overflow-hidden">
                  {nameText.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className={cn(
                        "inline-block",
                        letter === " " ? "w-4" : "",
                        "bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"
                      )}>
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white dark:bg-slate-900"
                />
              </div>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.2} className="mb-8">
            <div className="relative">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                A{" "}
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  software engineer
                </span>{" "}
                crafting elegant digital experiences with modern technologies.
                Specializing in
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {" "}
                  full-stack development
                </span>{" "}
                and creating solutions that blend form and function.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -right-4 top-0 text-emerald-500 dark:text-emerald-400 hidden md:block">
                <MousePointer className="h-4 w-4" />
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-slate-400">
                  <path
                    d="M19 4C19 12 31 12 31 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="2 3"
                  />
                </svg>
              </motion.div>
            </div>
          </SlideIn>

          <SlideIn
            direction="up"
            delay={0.3}
            className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="rounded-lg font-medium px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300">
              Explore My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="rounded-lg font-medium px-6 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300">
              Get In Touch
            </Button>
          </SlideIn>

          {/* Social links */}
          <SlideIn direction="up" delay={0.4} className="mb-16">
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm hover:shadow transition-all duration-300"
                  aria-label={link.label}>
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </SlideIn>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.button
              onClick={() => scrollToSection("about")}
              aria-label="Scroll down"
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-500 dark:text-slate-500 dark:hover:text-emerald-400 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}>
              <span className="text-xs font-medium uppercase tracking-wider">
                Scroll
              </span>
              <ArrowDown className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
