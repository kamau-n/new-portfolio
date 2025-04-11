"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Database,
  Server,
  Smartphone,
  Code,
  Paintbrush,
  Coffee,
  Network,
  GitMerge,
  Flame,
  GitBranch,
  Container,
  Cloud,
  RefreshCcw,
  TestTube,
  FileCode,
  Terminal,
  Component,
  Users,
  Trello,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";
import SlideIn from "./transitions/slide-in";

// Sample skills data - replace with your actual data
const skills = [
  {
    category: "languages",
    name: "JavaScript",
    icon: "code",
    level: 90,
    featured: true,
  },
  {
    category: "languages",
    name: "TypeScript",
    icon: "file-code",
    level: 85,
    featured: true,
  },
  {
    category: "languages",
    name: "Python",
    icon: "terminal",
    level: 80,
    featured: false,
  },
  {
    category: "languages",
    name: "HTML/CSS",
    icon: "paintbrush",
    level: 95,
    featured: false,
  },
  {
    category: "languages",
    name: "SQL",
    icon: "database",
    level: 75,
    featured: false,
  },
  {
    category: "frameworks",
    name: "React",
    icon: "component",
    level: 95,
    featured: true,
  },
  {
    category: "frameworks",
    name: "Next.js",
    icon: "server",
    level: 90,
    featured: true,
  },
  {
    category: "frameworks",
    name: "Node.js",
    icon: "server",
    level: 85,
    featured: true,
  },
  {
    category: "frameworks",
    name: "Express",
    icon: "server",
    level: 80,
    featured: false,
  },
  {
    category: "frameworks",
    name: "Tailwind CSS",
    icon: "paintbrush",
    level: 90,
    featured: true,
  },
  {
    category: "frameworks",
    name: "Redux",
    icon: "refresh-ccw",
    level: 85,
    featured: false,
  },
  {
    category: "frameworks",
    name: "React Native",
    icon: "smartphone",
    level: 75,
    featured: false,
  },
  {
    category: "databases",
    name: "MongoDB",
    icon: "database",
    level: 85,
    featured: true,
  },
  {
    category: "databases",
    name: "PostgreSQL",
    icon: "database",
    level: 80,
    featured: false,
  },
  {
    category: "databases",
    name: "Firebase",
    icon: "flame",
    level: 85,
    featured: true,
  },
  {
    category: "databases",
    name: "Redis",
    icon: "database",
    level: 70,
    featured: false,
  },
  {
    category: "devops",
    name: "Docker",
    icon: "container",
    level: 75,
    featured: false,
  },
  {
    category: "devops",
    name: "Git",
    icon: "git-branch",
    level: 90,
    featured: true,
  },
  {
    category: "devops",
    name: "CI/CD",
    icon: "git-merge",
    level: 80,
    featured: false,
  },
  {
    category: "devops",
    name: "AWS",
    icon: "cloud",
    level: 70,
    featured: false,
  },
  {
    category: "apis",
    name: "RESTful APIs",
    icon: "network",
    level: 90,
    featured: true,
  },
  {
    category: "apis",
    name: "GraphQL",
    icon: "network",
    level: 80,
    featured: false,
  },
  {
    category: "collaboration",
    name: "Agile",
    icon: "refresh-ccw",
    level: 85,
    featured: false,
  },
  {
    category: "collaboration",
    name: "Jira",
    icon: "trello",
    level: 80,
    featured: false,
  },
  {
    category: "collaboration",
    name: "GitHub",
    icon: "git-branch",
    level: 90,
    featured: true,
  },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "database":
      return <Database className="h-4 w-4" />;
    case "server":
      return <Server className="h-4 w-4" />;
    case "smartphone":
      return <Smartphone className="h-4 w-4" />;
    case "code":
      return <Code className="h-4 w-4" />;
    case "paintbrush":
      return <Paintbrush className="h-4 w-4" />;
    case "coffee":
      return <Coffee className="h-4 w-4" />;
    case "network":
      return <Network className="h-4 w-4" />;
    case "git-merge":
      return <GitMerge className="h-4 w-4" />;
    case "flame":
      return <Flame className="h-4 w-4" />;
    case "git-branch":
      return <GitBranch className="h-4 w-4" />;
    case "container":
      return <Container className="h-4 w-4" />;
    case "cloud":
      return <Cloud className="h-4 w-4" />;
    case "refresh-ccw":
      return <RefreshCcw className="h-4 w-4" />;
    case "test-tube":
      return <TestTube className="h-4 w-4" />;
    case "file-code":
      return <FileCode className="h-4 w-4" />;
    case "terminal":
      return <Terminal className="h-4 w-4" />;
    case "component":
      return <Component className="h-4 w-4" />;
    case "users":
      return <Users className="h-4 w-4" />;
    case "trello":
      return <Trello className="h-4 w-4" />;
    default:
      return <Code className="h-4 w-4" />;
  }
};

const categories = [
  { id: "featured", label: "Featured", icon: <Star className="h-4 w-4" /> },
  { id: "languages", label: "Languages", icon: <Code className="h-4 w-4" /> },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    icon: <Component className="h-4 w-4" />,
  },
  {
    id: "databases",
    label: "Databases",
    icon: <Database className="h-4 w-4" />,
  },
  { id: "devops", label: "DevOps", icon: <Cloud className="h-4 w-4" /> },
  { id: "apis", label: "APIs", icon: <Network className="h-4 w-4" /> },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: <Users className="h-4 w-4" />,
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "featured"
      ? skills.filter((skill) => skill.featured)
      : skills.filter((skill) => skill.category === activeCategory);

  // Sort skills by level (highest first)
  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]"></div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={containerRef}>
        <SlideIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-4">
            <Zap className="h-3.5 w-3.5" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies
            I work with to build modern, efficient, and scalable applications.
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
                onClick={() => setActiveCategory(category.id)}
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

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {sortedSkills.map((skill, index) => (
            <SlideIn
              key={`${skill.category}-${skill.name}`}
              direction="up"
              delay={0.2 + index * 0.05}>
              <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-slate-900 hover:shadow-lg transition-all duration-300">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
                        {getIcon(skill.icon)}
                      </div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                    {skill.featured && (
                      <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-100 dark:border-amber-800/50">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Skill level indicator */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">
                        Proficiency
                      </span>
                      <span className="font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </SlideIn>
          ))}
        </div>

        {/* Empty state */}
        {sortedSkills.length === 0 && (
          <SlideIn direction="up" delay={0.2}>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No skills found</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md">
                There are no skills available in this category yet. Please check
                back later or select another category.
              </p>
            </div>
          </SlideIn>
        )}

        {/* View all button - only show if we're in featured mode and there are more skills */}
        {activeCategory === "featured" &&
          skills.length > sortedSkills.length && (
            <SlideIn direction="up" delay={0.3} className="mt-10 text-center">
              <Button
                variant="outline"
                onClick={() => setActiveCategory("languages")}
                className="rounded-full px-6 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 group">
                View all skills
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SlideIn>
          )}
      </div>
    </section>
  );
};

export default Skills;
