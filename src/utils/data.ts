export interface Project {
  id: number;
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
  name: string;
  icon: string;
  category:
    | "languages"
    | "frameworks"
    | "databases"
    | "devops"
    | "apis"
    | "collaboration";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "School Management System",
    description:
      "This is a system that allows users to run all  school operations smoothly, it encompassed all of the crud operations .",
    technologies: ["React.js", "Spring Boot", "Next js"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FScreenshot%20from%202025-04-16%2019-03-25.png?alt=media&token=34c7f132-4fdb-424b-8033-02971555b39a",
    githubUrl: "https://github.com/kamau-n/school",
    liveUrl: "https://school.kamauharrison.co.ke",
    category: "web",
    featured: false,
  },
  {
    id: 2,
    title: "Service Connect",
    description:
      "This is an application that assist service provider and service seekers connnect.",
    technologies: ["React Native", "Firebase", "Expo 53", "Typescript"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FWhatsApp%20Image%202025-05-08%20at%2011.16.37%20PM.jpeg?alt=media&token=861b87de-296e-4dee-9beb-a48563b9f394",
    githubUrl: "https://github.com/kamau-n/service-app",
    liveUrl: "kamauharrison.co.ke/",
    category: "mobile",
    featured: false,
  },
    {
    id: 8,
    title: "Content Genie",
    description:
      "This is an  AI content agent that analyzes, optimizes, and improves your website content for better SEO, readability, and user engagement..",
    technologies: ["Open AI", "Firebase", "Next", "Typescript"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FScreenshot%20from%202025-05-27%2011-53-56.png?alt=media&token=ba39eb96-90fd-4685-a4aa-7408faea29d3",
    githubUrl: "/https://github.com/kamau-n/content-genie-ai-agent",
    liveUrl: "https://www.contentgenie.kamauharrison.co.ke/",
    category: "ai",
    featured: true,
  },
  {
    id: 3,
    title: "Estore",
    description:
      "This is a online eccomerce application for selling products , basically it is an online store.",
    technologies: ["Next", "Springboot", "Tailwinf","Shadcn"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FScreenshot%20from%202025-06-26%2018-59-39.png?alt=media&token=2b664af9-72c3-4ce5-a825-087d9dcb499d",
    githubUrl: "https://github.com/kamau-n",
    liveUrl: "https://estore.kamauharrison.co.ke",
    category: "mobile",
    featured: false,
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "Showcased technical skills and projects using modern web technologies for an optimized user experience.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FScreenshot%20from%202025-04-16%2018-56-35.png?alt=media&token=d5d06d85-0c0e-4e4b-b8e1-da8e4860b8e9",
    githubUrl: "https://github.com/kamau-n/portfolio",
    liveUrl: "https://kamauharrison.co.ke",
    category: "web",
    featured: false,
  },
  {
    id: 5,
    title: "Financing Tracking  Mobile App",
    description:
      "Designed a money transfer app with secure transactions, enabling seamless payments and transfers.",
    technologies: ["React Native", "Firebase", "Redux"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FWhatsApp%20Image%202025-04-16%20at%206.45.46%20PM.jpeg?alt=media",
    githubUrl: "https://github.com/kamau-n/financeApp",
    liveUrl: "/downloads",
    category: "mobile",
    featured: true,
  },

  {
    id: 6,
    title: "Bancassurance System Integration",
    description:
      "Integrated LDAP authentication, payment gateways, and core banking solutions, enhancing transaction efficiency for clients like I&M Bank.",
    technologies: ["Java", "Spring Boot", "MPESA", "RESTful APIs"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    githubUrl: "https://github.com/jameskuria/bancassurance-system",
    liveUrl: "http://mpawaapp.stima-sacco.com/",
    category: "backend",
    featured: false,
  },
    {
    id: 7,
    title: "Kenya Trails",
    description:
      "This is a site which event planner and adventures meeet and plan events, it automate the whole process of creating , booking and paying for events such as hiking,travels etc.",
    technologies: ["Next", "Typescript", "Tailwind", "Shadcn"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FScreenshot%20from%202025-05-12%2005-21-23.png?alt=media&token=8529d67a-50aa-46c1-b9d8-9dd985bde587",
    githubUrl: "https://github.com/kamau-n/kenya-trails",
    liveUrl: "https://kenyatrails.co.ke",
    category: "web",
    featured: true,
  },
  {
    id: 9,
    title: "Reviewly",
    description:
      "This is a site that helps small/local businesses generate and share custom Google review links (with optional QR codes, email templates, and tracking), so they can get more positive reviews.",
    technologies: ["Next", "Typescript", "Springboot","Tailwind", "Shadcn","Paystack"],
    imageUrl:"https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FScreenshot%20from%202025-06-05%2018-04-56.png?alt=media&token=746c8b7d-ad7a-4720-8a3b-c7a66c2fd44f",
    githubUrl: "https://github.com/kamau-n/reviewly",
    liveUrl: "https://reviewly.kamauharrison.co.ke",
    category: "web",
    featured: true,
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "Java", icon: "coffee", category: "languages" },
  { name: "JavaScript", icon: "file-code", category: "languages" },
  { name: "TypeScript", icon: "code", category: "languages" },
  { name: "HTML", icon: "file-code", category: "languages" },
  { name: "CSS", icon: "paintbrush", category: "languages" },
  { name: "Golang", icon: "paintbrush", category: "languages" },
    { name: "PHP", icon: "paintbrush", category: "languages" },
  

  // Frameworks/Tools
  { name: "React.js", icon: "component", category: "frameworks" },
  { name: "Next.js", icon: "server", category: "frameworks" },
  { name: "React Native", icon: "smartphone", category: "frameworks" },
  { name: "Spring Boot", icon: "server", category: "frameworks" },
  { name: "Node.js", icon: "server", category: "frameworks" },
  { name: "TailwindCSS", icon: "paintbrush", category: "frameworks" },
  { name: "Nginx", icon: "server", category: "frameworks" },
    { name: "Gin", icon: "server", category: "frameworks" },
    { name: "Angular", icon: "server", category: "frameworks" },
  

  // Databases
  { name: "MSSQL", icon: "database", category: "databases" },
  { name: "PostgreSQL", icon: "database", category: "databases" },
  { name: "MySQL", icon: "database", category: "databases" },
  { name: "MongoDB", icon: "database", category: "databases" },
  { name: "Firebase", icon: "flame", category: "databases" },
  

  // DevOps
  { name: "Git", icon: "git-branch", category: "devops" },
  { name: "GitHub", icon: "git-merge", category: "devops" },
  { name: "Jenkins", icon: "refresh-ccw", category: "devops" },
  { name: "GitHub Actions", icon: "git-merge", category: "devops" },
  { name: "Linux Administration", icon: "terminal", category: "devops" },
   { name: "Docker", icon: "docker", category: "devops" },
     { name: "Kurbenetes", icon: "docker", category: "devops" },
  
  

  // APIs
  { name: "REST", icon: "network", category: "apis" },
  { name: "GraphQL", icon: "network", category: "apis" },

  // Collaboration
  { name: "Jira", icon: "trello", category: "collaboration" },
  { name: "Agile Methodologies", icon: "users", category: "collaboration" },
];

export const experience = [
  {
    title:"Software Engineer",
    company:"Freelance",
      period:"April 2025 - Present",
    description:"Worked with both local and international clients, by assisting them turn their ideas into products, applicatons ,AI agents.",
  },
  {
    title: "Software Engineer",
    company: "Rensoft Solutions Ltd, Nairobi, Kenya",
    period: "Mar 2024 - Mar 2025",
    description:
      "Spearheaded integration of bancassurance systems with LDAP authentication and payment gateways (MPESA, EFT, RTGS), enhancing transaction efficiency for clients like I&M Bank across four countries. Developed RESTful APIs and GraphQL services to connect core insurance systems with client portals and mobile apps.",
  },
  {
    title: "Software Engineer - Internship",
    company: "Rensoft Solutions Ltd, Nairobi, Kenya",
    period: "Sep 2023 - Feb 2024",
    description:
      "Designed and launched the Mpawa Insurance Portal with React.js and Spring Boot, enabling policy booking and payments via MPESA, increasing customer satisfaction by 30%. Built microservices for bancassurance APIs, facilitating third-party integrations with Faulu Microfinance.",
  },
];
