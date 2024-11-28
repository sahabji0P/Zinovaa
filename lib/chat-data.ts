import { VendorFormData, CustomerFormData } from '@/types/forms';

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "What are your business hours?",
    answer: "We're open Monday to Friday, 9 AM - 8 PM, and Saturday to Sunday, 10 AM - 6 PM EST."
  },
  {
    question: "What services do you offer?",
    answer: "We offer curated fashion collections with express delivery (30-60 minutes), personal styling consultations, and hassle-free returns."
  },
  {
    question: "What are your pricing ranges?",
    answer: "Our collections range from affordable everyday wear ($30-100) to premium designer pieces ($100-500+). Express delivery is complimentary on orders over $50."
  },
  {
    question: "How can I become a vendor?",
    answer: "To become a vendor, you'll need to: 1) Complete our vendor registration form 2) Submit required business documents 3) Pass our quality assessment. Our team typically reviews applications within 5-7 business days."
  },
  {
    question: "What career opportunities are available?",
    answer: "We're currently hiring for: \n- Senior Fashion Buyer\n- UI/UX Designer\n- Delivery Operations Manager\n- Customer Experience Specialist\nVisit our careers page for detailed job descriptions and requirements."
  },
  {
    question: "What's the vendor onboarding process?",
    answer: "Our vendor onboarding includes: 1) Application review 2) Quality assessment 3) Contract signing 4) Platform integration 5) Training session. The process typically takes 2-3 weeks."
  }
];

export type ChatMessage = {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  form?: 'vendor' | 'customer' | null;
};

export type ChatStep = {
  id: string;
  message: string;
  type: 'text' | 'email' | 'name' | 'select' | 'form';
  options?: string[];
  form?: 'vendor' | 'customer';
};

export const initialSteps: ChatStep[] = [
  {
    id: 'welcome',
    message: "👋 Hi! How can I help you today?",
    type: 'select',
    options: [
      "I have a question",
      "I want to contact support",
      "I want to become a vendor",
      "I want to know about career opportunities"
    ]
  }
];

export const quickLinks = [
  {
    title: "Vendor Onboarding",
    href: "/vendor",
    description: "Join our marketplace and grow your business"
  },
  {
    title: "Careers at Zinovaa",
    href: "/careers",
    description: "Join our dynamic team"
  },
  {
    title: "Customer Support",
    href: "#support",
    description: "We're here to help"
  },
  {
    title: "About Us",
    href: "#about",
    description: "Our story and mission"
  },
  {
    title: "Privacy Policy",
    href: "#privacy",
    description: "How we protect your data"
  },
  {
    title: "Terms of Service",
    href: "#terms",
    description: "Our service agreement"
  }
];