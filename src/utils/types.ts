export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  featured: boolean;
  liveUrl: string;
  category: "mobile" | "web" | "backend" | "data" | "ai";
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  featured: boolean;
  level: number;
  category:
    | "languages"
    | "frameworks"
    | "databases"
    | "devops"
    | "apis"
    | "collaboration";
}
