import {
  Briefcase,
  Code,
  Github,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  Mail,
  MapPin,
  Server,
  ShoppingBag,
  Cpu,
  Database,
  Cloud,
  Layers,
  Container,
  GitMerge,
  Terminal,
  BrainCircuit,
  Phone,
  MonitorSmartphone,
  ShieldCheck,
  Zap,
  Award,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navigation = [
  { name: "Summary", href: "#summary" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sharath-kumar-a-b333421b7/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/sharath-a-kumar", icon: Github },
  { name: "Email", url: "mailto:SharathKumar3113@gmail.com", icon: Mail },
];

export const skills = {
  "Languages & Frameworks": [
    { name: "JavaScript (ES6+)", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Zap },
    { name: "React.js", icon: Code },
    { name: "Java", icon: Code },
  ],
  "Cloud & DevOps": [
    { name: "AWS (EC2, S3, RDS, Lambda)", icon: Cloud },
    { name: "Docker", icon: Container },
    { name: "CI/CD (GitLab, Jenkins)", icon: GitMerge },
    { name: "CloudFront", icon: Cloud },
  ],
  "Databases": [
    { name: "MySQL", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Schema Design", icon: Layers },
    { name: "Query Optimization", icon: Zap },
  ],
  "Contact Center Tech": [
    { name: "Genesys Cloud", icon: BrainCircuit },
    { name: "IVR Architect", icon: Phone },
    { name: "Integrations & OAuth", icon: ShieldCheck },
  ],
  "Tools & Methodologies": [
    { name: "Git & GitLab", icon: GitMerge },
    { name: "Postman", icon: Terminal },
    { name: "Jira", icon: Layers },
    { name: "Agile/Scrum", icon: Briefcase },
    { name: "TDD", icon: ShieldCheck },
  ],
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Bizzhub Workspaces",
    period: "Nov 2024 – Present",
    icon: Briefcase,
    description: [
      "Architected a responsive coworking management platform using React.js, implementing reusable component architecture that improved UI engagement by 20% and reduced page load times by 25%.",
      "Developed secure RESTful APIs with Node.js and Express.js, implementing authentication middleware that reduced backend response latency by 15% while serving 500+ daily active users.",
      "Redesigned MySQL database schema and optimized complex queries with indexing strategies, achieving 40% faster data retrieval speeds.",
      "Implemented GitLab CI/CD pipelines for automated testing and deployment, reducing code integration time by 30% while collaborating with cross-functional teams in Agile sprints.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Skylux Inc",
    period: "Nov 2023 – Oct 2024",
    icon: Briefcase,
    description: [
      "Spearheaded Genesys Cloud integration, redesigning IVR call flows and routing logic that improved call handling efficiency by 30% and reduced average wait times for 5,000+ monthly calls.",
      "Delivered 3 production-ready SaaS applications ahead of schedule using React.js, Node.js, and PostgreSQL, featuring real-time dashboards and analytics modules.",
      "Architected RESTful APIs with 99.9% uptime, implementing comprehensive API testing with Postman and automated test suites.",
      "Introduced CI/CD pipelines using Jenkins and automation tools that accelerated development velocity by 40%, reducing deployment time from hours to minutes.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "LTIMindtree",
    period: "Feb 2023 – May 2023",
    icon: Briefcase,
    description: [
      "Contributed to the development of enterprise web applications using Java, HTML, CSS, and SQL, resolving critical bugs and enhancing user interface functionality.",
      "Collaborated with senior developers to implement new features, gaining hands-on experience in full-stack development methodologies.",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Voicemail Application",
    type: "Client Project",
    icon: Phone,
    description: "Developed a Visual Voicemail solution integrated with Genesys Cloud, processing over 10,000 voicemails monthly.",
    impact: "Achieved 95% transcription accuracy through advanced speech-to-text algorithms and ensured HIPAA compliance for sensitive healthcare data.",
    technologies: ["Genesys Cloud", "React.js", "Node.js", "MongoDB", "Speech Recognition"],
    imageUrl: "/vvm.png",
    aiHint: "healthcare app"
  },
  {
    title: "Pet Adoption Platform",
    type: "Personal Project",
    icon: HeartHandshake,
    description: "Led full-stack development of a comprehensive pet adoption platform, facilitating over 500 successful adoptions within six months.",
    impact: "Optimized PostgreSQL database queries and implemented efficient indexing strategies, reducing page load times by 40%.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "RESTful APIs"],
    imageUrl: "/pet.png",
    aiHint: "pet adoption"
  },
  {
    title: "Food Delivery Management System",
    type: "Personal Project",
    icon: ShoppingBag,
    description: "Created a responsive food delivery platform capable of handling 1,000+ daily orders with integrated user authentication and Stripe payment processing.",
    impact: "Developed a comprehensive admin panel with real-time order tracking, reducing order processing time by 25%.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Stripe API", "WebSocket"],
    imageUrl: "/tomato.png",
    aiHint: "food delivery"
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Global Academy of Technology",
    period: "2019 – 2023",
    result: "CGPA: 8.5/10.0",
    icon: GraduationCap,
  },
];

export const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    icon: Award,
  },
  {
    name: "AWS Fundamentals",
    issuer: "Self-Directed",
    icon: Cloud,
  },
  {
    name: "Introduction to Programming Using Python",
    issuer: "Coursera", // Assuming Coursera or similar based on typical course names, but keeping generic if unknown
    icon: Code,
  },
  {
    name: "Developer Virtual Experience Program",
    issuer: "Accenture",
    icon: Briefcase,
  },
];