export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  featured: boolean;
  liveUrl: string;
  category: "mobile" | "web" | "backend";
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
    featured: true,
  },
  //   {
  //     id: 2,
  //     title: "Maven Mentorship",
  //     description:
  //       "Built a mentorship platform to connect professionals and mentees, facilitating knowledge sharing and career growth.",
  //     technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  //     githubUrl: "https://github.com/jameskuria/maven-mentorship",
  //     liveUrl: "https://mavenmentorship.org/",
  //     category: "web",
  //   },
  {
    id: 3,
    title: "Ecommerce Website",
    description:
      "Created a scalable solution for stock tracking, with real-time updates and comprehensive reporting features.",
    technologies: ["React Native", "MongoDB", "Express"],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FScreenshot%20from%202025-04-16%2018-55-45.png?alt=media&token=d9abd45d-6f59-46c0-88e2-7f6db9e3dcf9",
    githubUrl: "https://github.com",
    liveUrl: "https://store.kamauharrison.co.ke",
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
      "https://firebasestorage.googleapis.com/v0/b/ecomerce-site-d6b4a.appspot.com/o/assets%2FScreenshot%20from%202025-04-16%2018-56-35.png?alt=media",
    githubUrl: "https://github.com/kamau-n/portfolio",
    liveUrl: "https://kamauharrison.co.ke",
    category: "web",
    featured: true,
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
];

export const skills: Skill[] = [
  // Languages
  { name: "Java", icon: "coffee", category: "languages" },
  { name: "JavaScript", icon: "file-code", category: "languages" },
  { name: "TypeScript", icon: "code", category: "languages" },
  { name: "HTML", icon: "file-code", category: "languages" },
  { name: "CSS", icon: "paintbrush", category: "languages" },

  // Frameworks/Tools
  { name: "React.js", icon: "component", category: "frameworks" },
  { name: "Next.js", icon: "server", category: "frameworks" },
  { name: "React Native", icon: "smartphone", category: "frameworks" },
  { name: "Spring Boot", icon: "server", category: "frameworks" },
  { name: "Node.js", icon: "server", category: "frameworks" },
  { name: "TailwindCSS", icon: "paintbrush", category: "frameworks" },
  { name: "Nginx", icon: "server", category: "frameworks" },

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

  // APIs
  { name: "REST", icon: "network", category: "apis" },
  { name: "GraphQL", icon: "network", category: "apis" },

  // Collaboration
  { name: "Jira", icon: "trello", category: "collaboration" },
  { name: "Agile Methodologies", icon: "users", category: "collaboration" },
];

export const experience = [
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
