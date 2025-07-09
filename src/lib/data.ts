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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// --- STEP 1: REMOVE THE IMAGE IMPORTS ---
// import healthcareVoicemailImage from "@/assets/vvm.png";
// import petAdoptionImage from "@/assets/pet.png";
// import foodDeliveryImage from "@/assets/tomato.png";


export const navigation = [
  { name: "Summary", href: "#summary" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sharath-kumar-a-b333421b7/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/Sharath-A", icon: Github },
  { name: "Email", url: "mailto:SharathKumar3113@gmail.com", icon: Mail },
];

export const skills = {
  "Programming Languages": [
    { name: "JavaScript (ES6+)", icon: Code },
    { name: "Java", icon: Code },
  ],
  "Frontend": [
    { name: "React.js", icon: Code },
    { name: "HTML5 & CSS3", icon: Code },
    { name: "Responsive Design", icon: MonitorSmartphone },
  ],
  "Backend": [
    { name: "Node.js & Express.js", icon: Server },
    { name: "RESTful APIs", icon: Zap },
  ],
  "Databases": [
    { name: "MySQL", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
  ],
  "Cloud & DevOps": [
    { name: "AWS (EC2, S3, RDS)", icon: Cloud },
    { name: "Docker", icon: Container },
    { name: "GitLab & CI/CD", icon: GitMerge },
  ],
  "Other": [
    { name: "Genesys Cloud", icon: BrainCircuit },
    { name: "Git", icon: GitMerge },
    { name: "Postman", icon: Terminal },
  ],
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Bizzhub Workspaces",
    period: "Nov 2024 – Present",
    icon: Briefcase,
    description: [
      "Led the design and development of scalable web applications for coworking spaces, significantly enhancing user experience and streamlining operational workflows.",
      "Developed responsive, high-performance front-end interfaces using React.js and JavaScript, achieving a 20% increase in user interaction rates.",
      "Designed and implemented secure RESTful APIs and backend services with Node.js and Express.js, optimizing system performance by 15%.",
      "Managed and optimized MySQL database schemas and queries, improving data retrieval efficiency through advanced indexing techniques.",
      "Utilized GitLab for version control and CI/CD pipelines for seamless collaboration.",
      "Deployed applications on AWS infrastructure, leveraging EC2, Docker, CloudFront, S3, and RDS."
    ],
  },
  {
    role: "Software Engineer",
    company: "Skylux Telelink Pvt Ltd",
    period: "Nov 2023 – Nov 2024",
    icon: Briefcase,
    description: [
      "Spearheaded Genesys Cloud implementation, configuring advanced user permissions, integrations, and IVR Flow architectures, resulting in a 30% improvement in call handling efficiency.",
      "Architected and deployed three full-stack SaaS applications using React.js, Node.js, and PostgreSQL, delivering projects ahead of schedule.",
      "Conducted comprehensive API testing with Postman, ensuring 99.9% system uptime and seamless third-party integrations.",
      "Introduced innovative technologies and development practices, strengthening the company’s competitive edge."
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "LTIMindtree",
    period: "Feb 2023 – Apr 2023",
    icon: Briefcase,
    description: [
      "Contributed to the development of enterprise web applications using Java, HTML, CSS, and SQL.",
      "Resolved critical bugs and enhanced user interface functionality.",
      "Collaborated with senior developers to implement new features, gaining hands-on experience in full-stack development methodologies.",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Voicemail Application",
    type: "Client Project",
    icon: Phone,
    description: "Developed a Visual Voicemail solution integrated with Genesys Cloud, successfully processing over 10,000 voicemails monthly.",
    impact: "Achieved 95% transcription accuracy and ensured HIPAA compliance for sensitive healthcare data.",
    technologies: ["Genesys Cloud", "React.js", "Node.js", "MongoDB", "Speech Recognition"],
    // --- STEP 2: USE A STRING PATH STARTING WITH '/' ---
    imageUrl: "/vvm.png",
    aiHint: "healthcare app"
  },
  {
    title: "Pet Adoption Platform",
    type: "Personal Project",
    icon: HeartHandshake,
    description: "Led full-stack development of a comprehensive pet adoption platform, facilitating over 500 successful adoptions within six months.",
    impact: "Optimized PostgreSQL queries, reducing page load times by 40% and significantly improving user engagement.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "RESTful APIs"],
    // --- STEP 2: USE A STRING PATH STARTING WITH '/' ---
    imageUrl: "/pet.png",
    aiHint: "pet adoption"
  },
  {
    title: "Food Delivery Management System",
    type: "Personal Project",
    icon: ShoppingBag,
    description: "Created a responsive food delivery platform capable of handling 1,000+ daily orders with integrated Stripe payment processing.",
    impact: "Developed a real-time admin panel, reducing order processing time by 25% and ensuring secure payment workflows.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Stripe API", "WebSocket"],
    // --- STEP 2: USE A STRING PATH STARTING WITH '/' ---
    imageUrl: "/tomato.png",
    aiHint: "food delivery"
  },
];

export const education = [
    {
        degree: "Bachelor of Engineering in Electronics and Communication",
        institution: "Global Academy of Technology, Bengaluru",
        period: "2019 – 2023",
        result: "CGPA: 8.5/10.0",
        icon: GraduationCap,
    },
    {
        degree: "Pre-University College (PCMC)",
        institution: "RNS Pre-University College, Bengaluru",
        period: "2017 – 2019",
        result: "Percentage: 82.33%",
        icon: GraduationCap,
    },
    {
        degree: "SSLC",
        institution: "Saroja Memorial English School, Bengaluru",
        period: "2017",
        result: "Percentage: 86.56%",
        icon: GraduationCap,
    },
]