"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Star } from "lucide-react";
import SlideIn from "./transitions/slide-in";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SlideIn direction="up" delay={0.1 + index * 0.1}>
      <Card
        className="overflow-hidden border-none shadow-lg bg-white dark:bg-slate-900 rounded-xl h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {/* Image container with overlay */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.7 : 0,
            }}
          />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-amber-500/90 hover:bg-amber-500 text-white border-none px-2 py-1">
                <Star className="h-3 w-3 mr-1 fill-white" />
                Featured
              </Badge>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge
              className="bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 border-none"
              variant="outline">
              {project.category === "web" && "Web Development"}
              {project.category === "mobile" && "Mobile App"}
              {project.category === "backend" && "Backend"}
              {project.category === "ai" && "AI"}
              {project.category === "data" && "Data"}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 font-normal text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge
                variant="outline"
                className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 font-normal text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-auto">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-lg border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white flex-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1.5" />
                Code
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white flex-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1.5" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </SlideIn>
  );
};

export default ProjectCard;
