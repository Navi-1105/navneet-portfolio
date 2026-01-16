// data/content.ts

export interface Project {
  slug: string;
  title: string;
  tech: string[];
  description: string; // Short description for the card
  longDescription: string; // Detailed intro for the page
  challenge?: string;
  solution?: string;
  features?: string[];
  link?: string; // GitHub or Live link
  image: string; // Image path for project card
  video?: string; // Optional video preview path
}

export const personalInfo = {
  name: "Navneet Kaur",
  role: "Full-Stack Developer | ML Enthusiast",
  bio: "I'm a full-stack developer and data science practitioner who builds end-to-end systems — from robust backend APIs to real-time dashboards. I focus on practical engineering: clean architecture, performance, and extracting real insight from data.",
  email: "somalnavneetkaur@gmail.com",
  linkedin: "https://www.linkedin.com/in/navneet-kaur-3697a6290/",
  github: "https://github.com/Navi-1105/",
  location: "Fatehgarh Sahib, Punjab"
};

export const skills = {
  "Languages": ["Java (Basics)", "Python", "SQL", "C++ (DSA)","HTML", "CSS", "JavaScript"],
  "Frameworks": ["React.js", "Express.js", "Node.js", "Flask"],
  "Data & AI": ["Pandas", "NumPy", "Scikit-Learn", "NLP", "Generative AI", "OCR","PyTorch (Basics)"],
  "Databases": ["MySQL", "MongoDB"],
  "Tools": ["Git", "GitHub", "Tableau", "Streamlit", "Azure AI"]
};

export const experiences = [
  {
    company: "Prasunset Company",
    role: "Web Development & AI Intern",
    period: "Mar 2025 – Jun 2025",
    description: "Developed an end-to-end AI-based Political Speech Analyzer to detect bias using NLP techniques. Achieved 85% accuracy in sentiment classification on 500+ speeches.",
    tech: ["Python", "NLP", "Streamlit", "Sentiment Analysis"]
  },
  {
    company: "Remark Skill Education",
    role: "Generative AI & ML Intern",
    period: "Aug 2025 – Sep 2025",
    description: "Collaborated to develop a Retail Price Optimization model using Machine Learning. Implemented data-driven algorithms to predict pricing trends.",
    tech: ["Python", "Machine Learning", "Scikit-Learn"]
  },
  {
    company: "BCG (Virtual)",
    role: "Virtual Data Scientist",
    period: "May 2025",
    description: "Constructed a Random Forest model with 85% accuracy to identify key churn drivers, supporting a 20% reduction in customer churn.",
    tech: ["Python", "Random Forest", "Tableau", "Data Analysis"]
  }
];

export const projects: Project[] = [
  {
    slug: "job-offer-letter-analyzer",
    title: "Job Offer Letter Analyzer",
    tech: ["Python", "Flask", "NLP", "OCR", "Automation"],
    description: "Automated the extraction of salary components and legal clauses from PDF offer letters. Built a Flask web server to parse unstructured text.",
    longDescription: "A sophisticated tool designed to simplify the hiring process by automatically extracting and verifying critical data points from unstructured PDF offer letters. This system eliminates manual data entry errors and speeds up candidate onboarding.",
    challenge: "Parsing diverse PDF layouts and extracting unstructured text data accurately without relying on rigid templates.",
    solution: "Utilized OCR for text extraction and NLP Named Entity Recognition (NER) to semantically identify salary figures, joining dates, and clause entities regardless of document format.",
    features: [
      "90% extraction accuracy via custom NLP pipeline",
      "Automated verification of legal clauses",
      "RESTful API integration for HR portals",
      "Support for multiple PDF formats"
    ],
    link: "https://github.com/Navi-1105/",
    image: "/projects/job-analyzer.png",
    video: "/projects/job-analyzer.mp4"
  },
  {
    slug: "real-time-analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    tech: ["React.js", "Node.js", "Express.js", "WebSockets"],
    description: "Engineered a dynamic dashboard to visualize complex datasets. Implemented WebSocket connections to deliver live data updates with sub-second latency.",
    longDescription: "A high-performance analytics platform built for decision-makers who need instant visibility into their data. The system aggregates streams of data and visualizes them instantly using interactive charts.",
    challenge: "Handling high-frequency data updates without causing UI lag or browser freezing.",
    solution: "Implemented WebSockets for bi-directional communication and optimized React state management to only re-render changed components, ensuring a smooth 60fps experience.",
    features: [
      "Sub-second data latency",
      "Interactive data filtering and drill-downs",
      "Responsive design for mobile monitoring",
      "Scalable backend architecture"
    ],
    link: "https://github.com/Navi-1105/",
    image: "/projects/dashboard.png",
    video: "/projects/dashboard-demo.mp4"
  },
  {
    slug: "smart-inventory-system",
    title: "Smart Inventory System",
    tech: ["Java", "Spring Boot", "MySQL", "Microservices"],
    description: "Architected a scalable inventory management backend using Spring Boot. Optimized MySQL database schemas to handle high-volume transactions.",
    longDescription: "An enterprise-grade inventory management backend designed to handle complex stock logic across multiple warehouses. It ensures data consistency and provides powerful APIs for frontend integration.",
    challenge: "Maintaining data integrity during concurrent high-volume transactions and complex stock movements.",
    solution: "Designed a normalized MySQL schema and utilized Spring Boot's transaction management to ensure ACID properties were maintained across all operations.",
    features: [
      "30% improvement in query performance",
      "RESTful Microservices architecture",
      "Role-based access control (RBAC)",
      "Automated stock level alerts"
    ],
    link: "https://github.com/Navi-1105/",
    image: "/projects/inventory.png",
    video: "/projects/inventory.mp4"
  }
];

