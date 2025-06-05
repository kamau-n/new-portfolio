import { useState, useEffect, useRef } from "react";
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
import { getSkills } from "@/lib/services";
import { Skill } from "@/utils/types";

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

const getIcon = (iconName: string) => {
  const icons = {
    database: Database,
    server: Server,
    smartphone: Smartphone,
    code: Code,
    paintbrush: Paintbrush,
    coffee: Coffee,
    network: Network,
    "git-merge": GitMerge,
    flame: Flame,
    "git-branch": GitBranch,
    container: Container,
    cloud: Cloud,
    "refresh-ccw": RefreshCcw,
    "test-tube": TestTube,
    "file-code": FileCode,
    terminal: Terminal,
    component: Component,
    users: Users,
    trello: Trello,
  };

  const Icon = icons[iconName as keyof typeof icons] || Code;
  return <Icon className="h-4 w-4" />;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsData = await getSkills();
        setSkills(skillsData);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "featured"
      ? skills.filter((skill) => skill.featured)
      : skills.filter((skill) => skill.category === activeCategory);

  // Sort skills by level (highest first)
  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);

  if (loading) {
    return (
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
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
            <SlideIn key={skill.id} direction="up" delay={0.2 + index * 0.05}>
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
