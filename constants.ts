
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Gaganjot Singh",
  title: "Principal Architect",
  location: "New Delhi, India",
  email: "gagan.shera@gmail.com",
  phone: "+91-9990831154",
  profileImage: "/profile-pic.jpg",
  about: "Senior Technical Architect with {years}+ years of experience leading large-scale microservices platforms in telecom and energy automation domains. Expert in Node.js, TypeScript, AWS, Docker and Kubernetes. Proven leadership in architecting high-performance, cloud-native systems with a focus on scalability, reliability, performance, and distributed infrastructure using AI tools.",
  experience: [
    {
      company: "Nagarro India",
      role: "Principal Engineer",
      period: "2018 - PRESENT",
      highlights: [
        "Leading technology and managing customer journey designs for a global energy automation leader, with deep expertise in large-scale microservices architecture.",
        "Led architecture and end-to-end development of a 100+ microservices based event-driven orchestrated system powering a global telecom provider.",
        "Collaborated cross-functionally with product and client teams, driving performance, scalability, and security enhancements in a cloud-native environment.",
        "Led the development and delivery of a high-volume logistics CRM system for a Hong Kong-based startup, managing a 6-member team."
      ]
    },
    {
      company: "CarDekho",
      role: "Senior Software Engineer",
      period: "2015 - 2018",
      highlights: [
        "Built and optimized the core backend engine for a leading Indian insurance platform, driving end-to-end motor policy processing.",
        "Designed and developed a Chrome extension to automate manual insurance operations, eliminating data entry tasks and streamlining workflows.",
        "Spearheaded the design and development of high-availability vehicle data APIs, scaling the system from PHP to Node.js with MongoDB integration."
      ]
    },
    {
      company: "Xicom Technologies Ltd.",
      role: "Senior Software Engineer",
      period: "2014 - 2015",
      highlights: [
        "Specialized in full-stack development and complex architectural patterns for international clients."
      ]
    },
    {
      company: "Enbake Consulting",
      role: "Software Engineer",
      period: "2012 - 2014",
      highlights: [
        "Focused on agile software delivery and modular backend services."
      ]
    }
  ],
  education: {
    school: "KIIT College of Engineering",
    degree: "Bachelor of Technology (B.Tech) - CSE",
    period: "2007 - 2011",
    highlights: ["First Division Honors"]
  },
  skills: [
    {
      category: "Programming Languages",
      skills: ["Node.js", "TypeScript", "JavaScript"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Express.js", "Nest.js", "Fastify", "Docker", "K8s", "AWS", "Camunda BPM", "GCP", "Jenkins", "Openshift", "Prometheus", "New Relic", "n8n", "Dynatrace", "SonarQube"]
    },
    {
      category: "API & Middleware",
      skills: ["RabbitMQ", "Microservices", "Kafka"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "MariaDB", "Redis", "PostgreSQL", "RDS"]
    },
    {
      category: "Domains & Standards",
      skills: ["Telecom", "Insurance", "Logistics", "IoT", "BPMN"]
    }
  ],
  awards: [
    { title: "Winner Hacktelligence Gen AI Hackathon", year: "2024" },
    { title: "Winner The Singularity AI Hackathon Nagarro", year: "2023" },
    { title: "The Brightest Mind Award - Nagarro", year: "2020-2024 (5 consecutive years)" },
    { title: "Girnarsoft Innovative Award", year: "2018" },
    { title: "Letter of Appreciation from CEO - CarDekho", year: "2017" },
    { title: "Star Performer Award - CarDekho", year: "2016" }
  ],
  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
    { name: "Nagarro Certified Scrum Master", issuer: "Nagarro" }
  ]
};
