export interface Course {
  id: string;
  title: string;
  category: "Tech" | "Safety" | "Government";
  description: string;
  fullDescription: string;
  duration: string;
  students: number;
  requirements: string[];
  modules: string[];
  benefits: string[];
  available: boolean;
  featured: boolean;
  image: string;
}

export const courses: Course[] = [
  {
    id: "graphics-design",
    title: "Graphics Design",
    category: "Tech",
    description:
      "Master visual communication through comprehensive graphics design training.",
    fullDescription:
      "Our Graphics Design course covers everything from basic design principles to advanced digital design techniques. Students learn industry-standard software including Adobe Photoshop, Illustrator, and InDesign.",
    duration: "6 months",
    students: 150,
    requirements: [
      "Basic computer knowledge",
      "Creative mindset",
      "High school diploma",
    ],
    modules: [
      "Design Fundamentals",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Brand Identity",
      "Print Design",
      "Digital Marketing Design",
    ],
    benefits: [
      "Industry certification",
      "Portfolio development",
      "Job placement assistance",
      "Freelancing opportunities",
    ],
    available: true,
    featured: true,
    image: "/images/motionMedia.jpg",
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "Tech",
    description:
      "Build modern websites and web applications with latest technologies.",
    fullDescription:
      "Comprehensive web development program covering HTML, CSS, JavaScript, React, and backend technologies. Perfect for aspiring web developers.",
    duration: "8 months",
    students: 200,
    requirements: [
      "Basic computer knowledge",
      "Logical thinking",
      "English proficiency",
    ],
    modules: [
      "HTML/CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Database Design",
      "Project Development",
    ],
    benefits: [
      "Full-stack development skills",
      "Real project experience",
      "Industry mentorship",
      "High earning potential",
    ],
    available: true,
    featured: true,
    image: "/images/web-development.jpg",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Tech",
    description: "Learn modern marketing strategies for the digital age.",
    fullDescription:
      "Master digital marketing techniques including SEO, social media marketing, content marketing, and paid advertising campaigns.",
    duration: "4 months",
    students: 180,
    requirements: [
      "Basic internet knowledge",
      "Communication skills",
      "Marketing interest",
    ],
    modules: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Creation",
      "Google Ads",
      "Analytics",
      "Email Marketing",
    ],
    benefits: [
      "Google certifications",
      "Campaign management skills",
      "Freelancing opportunities",
      "Business growth knowledge",
    ],
    available: true,
    featured: true,
    image: "/images/digital-marketing.jpg",
  },
  {
    id: "iosh-safety",
    title: "IOSH Safety Course",
    category: "Safety",
    description: "International occupational safety and health certification.",
    fullDescription:
      "IOSH (Institution of Occupational Safety and Health) certified course providing comprehensive safety training for workplace environments.",
    duration: "3 months",
    students: 120,
    requirements: [
      "Working experience preferred",
      "Basic English",
      "Safety interest",
    ],
    modules: [
      "Risk Assessment",
      "Accident Investigation",
      "Safety Management",
      "Legal Requirements",
      "Emergency Procedures",
    ],
    benefits: [
      "International certification",
      "Career advancement",
      "Safety expertise",
      "Higher salary prospects",
    ],
    available: true,
    featured: true,
    image: "/images/iosh.jpg",
  },
  {
    id: "nebosh-safety",
    title: "NEBOSH Safety Course",
    category: "Safety",
    description:
      "National Examination Board in Occupational Safety and Health certification.",
    fullDescription:
      "NEBOSH certification course designed for safety professionals and managers. Internationally recognized qualification.",
    duration: "4 months",
    students: 90,
    requirements: [
      "Work experience",
      "English proficiency",
      "Educational background",
    ],
    modules: [
      "Health & Safety Management",
      "Risk Control",
      "Workplace Hazards",
      "Incident Investigation",
      "Safety Culture",
    ],
    benefits: [
      "Global recognition",
      "Professional status",
      "Leadership skills",
      "Career progression",
    ],
    available: true,
    featured: true,
    image: "/images/nebosh.jpg",
  },
  {
    id: "computer-applications",
    title: "Certificate in Computer Applications",
    category: "Tech",
    description:
      "Gain practical computer skills for office, design, and daily digital tasks.",
    fullDescription:
      "This certificate course covers essential computer applications, including Microsoft Office (Word, Excel, PowerPoint), CorelDRAW for graphic design, English and Urdu typing, email management, Windows operating system usage, and internet basics. Ideal for students, office workers, and beginners aiming to become computer literate.",
    duration: "7 months",
    students: 80,
    requirements: [
      "Basic reading and writing skills",
      "Eagerness to learn computer operations",
    ],
    modules: [
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "CorelDRAW",
      "English Typing",
      "Urdu Typing",
      "Email & Internet",
      "Windows Operating System",
      "File & Folder Management",
    ],
    benefits: [
      "Practical computer proficiency",
      "Office and administrative skills",
      "Graphic design fundamentals",
      "Typing speed and accuracy",
      "Improved employability in offices and businesses",
    ],
    available: true,
    featured: true,
    image: "/images/computerApplication.jpg",
  },

  {
    id: "dae-electrical",
    title: "DAE Electrical Engineering",
    category: "Government",
    description: "Diploma of Associate Engineering in Electrical Engineering.",
    fullDescription:
      "Government-approved DAE program in Electrical Engineering. Currently not available due to policy changes.",
    duration: "3 years",
    students: 500,
    requirements: ["Matriculation", "Science subjects", "Government approval"],
    modules: [
      "Circuit Analysis",
      "Power Systems",
      "Electronics",
      "Electrical Machines",
      "Control Systems",
    ],
    benefits: [
      "Government recognition",
      "Technical expertise",
      "Industry employment",
      "Further studies eligibility",
    ],
    available: false,
    featured: false,
    image: "/images/psda.png",
  },
  {
    id: "dae-mechanical",
    title: "DAE Mechanical Engineering",
    category: "Government",
    description: "Diploma of Associate Engineering in Mechanical Engineering.",
    fullDescription:
      "Government-approved DAE program in Mechanical Engineering. Currently suspended pending approvals.",
    duration: "3 years",
    students: 450,
    requirements: [
      "Matriculation",
      "Physics & Mathematics",
      "Government approval",
    ],
    modules: [
      "Thermodynamics",
      "Mechanics",
      "Manufacturing",
      "Materials Science",
      "Machine Design",
    ],
    benefits: [
      "Technical diploma",
      "Government job eligibility",
      "Industrial skills",
      "Professional development",
    ],
    available: false,
    featured: false,
    image: "/images/psda.png",
  },
];

export const getFeaturedCourses = () =>
  courses.filter((course) => course.featured && course.available);
export const getAvailableCourses = () =>
  courses.filter((course) => course.available);
export const getCoursesByCategory = (category: string) =>
  courses.filter((course) => course.category === category);
export const getCourseById = (id: string) =>
  courses.find((course) => course.id === id);
