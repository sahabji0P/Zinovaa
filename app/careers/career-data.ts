import { Job } from "@/types/careers";

export const jobOpenings: Job[] = [
 
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful and intuitive digital experiences that make fashion discovery a joy for our customers.",
    requirements: [
      "3+ years UX experience",
      "E-commerce portfolio",
      "Figma expertise",
      "User research",
      "Design systems"
    ],
    questions: [
      "How do you approach e-commerce UX?",
      "Tell us about a challenging design problem you solved",
      "How do you incorporate user feedback?",
      "What's your experience with design systems?"
    ]
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    department: "Marketing & Communications",
    location: "Remote",
    type: "Full-time",
    description: "Manage our social media presence and create engaging content that resonates with our audience.",
    requirements: [
      "2+ years social media experience",
      "Content creation",
      "Community management",
      "Analytics",
      "Copywriting"
    ],
    questions: [
      "How do you approach social media strategy?",
      "Tell us about a successful campaign you ran",
      "How do you handle negative feedback?",
      "What's your experience with analytics?"
    ]
  }
];