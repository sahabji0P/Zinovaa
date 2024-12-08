import { Job } from "@/types/careers";

export const jobOpenings: Job[] = [
  {
    id: "senior-fashion-buyer",
    title: "Senior Fashion Buyer",
    department: "Merchandising",
    location: "Style City, ST",
    type: "Full-time",
    description: "Lead our fashion buying strategy and curate trendsetting collections that define the Zinovaa style.",
    requirements: [
      "5+ years buying experience",
      "Fashion market expertise",
      "Trend forecasting",
      "Negotiation skills",
      "Budget management"
    ],
    questions: [
      "What's your experience in trend forecasting?",
      "How do you approach vendor negotiations?",
      "Tell us about a successful collection you curated",
      "How do you balance trends with commercial viability?"
    ]
  },
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
    id: "delivery-ops-manager",
    title: "Delivery Operations Manager",
    department: "Operations",
    location: "Style City, ST",
    type: "Full-time",
    description: "Optimize our delivery network to maintain our promise of 30-60 minute fashion delivery.",
    requirements: [
      "4+ years logistics experience",
      "Team management",
      "Data analysis",
      "Process optimization",
      "Crisis management"
    ],
    questions: [
      "How do you handle delivery optimization?",
      "Tell us about a successful logistics improvement",
      "How do you manage team performance?",
      "What's your approach to crisis management?"
    ]
  }
];