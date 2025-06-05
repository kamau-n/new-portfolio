"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code,
  ExternalLink,
  Filter,
  Layers,
  Smartphone,
} from "lucide-react";
import SlideIn from "./transitions/slide-in";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/lib/services";
import { Project } from "@/utils/types";

const categories = [
  { id: "all", label: "All Projects", icon: <Layers className="h-4 w-4" /> },
  { id: "web", label: "Web Development", icon: <Code className="h-4 w-4" /> },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: <Smartphone className="h-4 w-4" />,
  },
  { id: "backend", label: "Backend", icon: <Filter className="h-4 w-4" /> },
] as const;

type Category = (typeof categories)[number]["id"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [showAll, setShowAll] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Limit projects shown initially unless showAll is true
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.filter((project) => project.featured);

  if (loading) {
    return (
      <section
        id="projects\"
        className="py-24 md:py-32 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SlideIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-4">
            <Code className="h-3.5 w-3.5" />
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in web
            development, mobile applications, and backend systems.
          </p>
        </SlideIn>

        {/* Category tabs */}
        <SlideIn direction="up" delay={0.1} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 h-auto transition-all ${
                  activeCategory === category.id
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}>
                <span className="flex items-center gap-1.5">
                  {category.icon}
                  {category.label}
                </span>
              </Button>
            ))}
          </div>
        </SlideIn>

        {/* Projects grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + (showAll ? "-all" : "-featured")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more/less button */}
        {filteredProjects.length > displayedProjects.length ||
        (showAll && filteredProjects.length > 3) ? (
          <SlideIn direction="up" delay={0.3} className="mt-12 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full px-6 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 group">
              {showAll ? "Show Featured Projects" : "View All Projects"}
              <ChevronRight
                className={`h-4 w-4 ml-1 transition-transform ${
                  showAll ? "rotate-90" : "group-hover:translate-x-1"
                }`}
              />
            </Button>
          </SlideIn>
        ) : null}

        {/* Empty state */}
        {displayedProjects.length === 0 && (
          <SlideIn direction="up" delay={0.2}>
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6">
                There are no projects available in this category yet. Please
                check back later or select another category.
              </p>
              <Button
                variant="outline"
                onClick={() => setActiveCategory("all")}
                className="rounded-full border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
                View All Projects
              </Button>
            </div>
          </SlideIn>
        )}
      </div>
    </section>
  );
};

export default Projects;
