"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
  { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
  {
    id: "projects",
    label: "Projects",
    icon: <Briefcase className="h-4 w-4" />,
  },
  { id: "skills", label: "Skills", icon: <Code className="h-4 w-4" /> },
  { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for progress bar
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sections = navItems.map((item) => item.id);

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section with smooth behavior
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="fixed top-2 left-0 right-0    z-50">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "rounded-xl backdrop-blur-lg border border-slate-200/20",
            "bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/30",
            "px-4 py-3 md:px-6"
          )}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 font-display">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold">
                HK
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Harrison Kamau
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={cn(
                    "relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5",
                    activeSection === item.id
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  )}>
                  {item.icon}
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}

              <Button
                size="sm"
                className="ml-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white">
                <a href="https://drive.google.com/file/d/1ZliBtdOI1Ok0lIzNdGDwRG3kK_GbnWFa/view?usp=drive_link">
                  Resume
                </a>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="text-slate-700 dark:text-slate-200">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                    transition={{ duration: 0.2 }}>
                    {isOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden mt-2">
                <div className="py-2 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={cn(
                        "w-full px-4 py-3 flex items-center gap-3 rounded-lg text-left",
                        activeSection === item.id
                          ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800/50"
                      )}>
                      <div
                        className={cn(
                          "p-2 rounded-md",
                          activeSection === item.id
                            ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        )}>
                        {item.icon}
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {item.id === "home" && "Welcome"}
                          {item.id === "about" && "My story"}
                          {item.id === "projects" && "My work"}
                          {item.id === "skills" && "My expertise"}
                          {item.id === "contact" && "Get in touch"}
                        </span>
                      </div>
                    </motion.button>
                  ))}

                  <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-700">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500">
                      <a href="https://drive.google.com/file/d/1ZliBtdOI1Ok0lIzNdGDwRG3kK_GbnWFa/view?usp=drive_link">
                        {" "}
                        Download Resume{" "}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
