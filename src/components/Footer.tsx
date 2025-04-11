"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import SlideIn from "./transitions/slide-in";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hovered, setHovered] = useState(false);

  // Navigation links
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  // Social links
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-8 -left-24 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-emerald-100/30 to-teal-100/30 dark:from-emerald-900/10 dark:to-teal-900/10 blur-3xl" />
        <div className="absolute -top-8 -right-24 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-emerald-100/20 to-teal-100/20 dark:from-emerald-900/5 dark:to-teal-900/5 blur-3xl" />
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <SlideIn
            direction="up"
            className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold">
                HK
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Harrison Kamau
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 text-center md:text-left">
              Building elegant digital experiences with modern technologies and
              clean code.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  aria-label={link.label}>
                  <link.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </SlideIn>

          {/* Navigation links */}
          <SlideIn
            direction="up"
            delay={0.1}
            className="flex flex-col items-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SlideIn>

          {/* Newsletter/Contact */}
          <SlideIn
            direction="up"
            delay={0.2}
            className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Get in touch
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 text-center md:text-right">
              Have a project in mind? Let's collaborate and build something
              amazing together.
            </p>
            <Button
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }>
              Contact Me
            </Button>
          </SlideIn>
        </div>

        {/* Bottom section with copyright */}
        <div className="py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <SlideIn direction="up" delay={0.3}>
            <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center">
              &copy; {currentYear} Harrison Kamau. All rights reserved. Made
              with
              <motion.span
                animate={{ scale: hovered ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="inline-flex mx-1 text-red-500">
                <Heart className="h-3 w-3 fill-current" />
              </motion.span>
              in Nairobi, Kenya
            </p>
          </SlideIn>

          <SlideIn direction="up" delay={0.4} className="mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full p-2 h-auto text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400"
              onClick={scrollToTop}
              aria-label="Scroll to top">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </SlideIn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
