
export type FAQ = {
  question: string;
  answer: string;
  links?: {
    title: string;
    url: string;
  }[];
}

export const faqs: FAQ[] = [
  {
    question: "What are your business hours?",
    answer: "We’re always open—24/7, 365 days. Fashion never sleeps, and neither do we! 🌙✨"
  },
  {
    question: "What services do you offer?",
    answer: "We’re your plug for curated fashion delivered in 30-60 mins, personal styling tips, and returns so easy you won’t break a sweat. 💅🚀"
  },
  {
    question: "What are your pricing ranges?",
    answer: "We’ve got something for everyone—whether you’re after budget-friendly fits or premium designer drips. But one thing stays the same: top-tier quality, no matter the tag. 🛍️✨"
  },

  {
    question: "How can I become a vendor?",
    answer: "Wanna join the squad? 1) Fill out our vendor form, 2) Show us your docs, and 3) Pass the vibe (quality) check. We’ll hit you up in 5-7 biz days. 📑✨",
    links: [
      { title: "Vendor Onboarding", url: "/vendor" }
    ]
  },
  {
    question: "What career opportunities are available?",
    answer: "We’re hiring! Roles: \n- Senior Fashion Buyer 👗🛍️\n- UI/UX Designer 🎨✨\n- Delivery Ops Manager 🚛⚡\n- Customer Experience Specialist 💬❤️\nHit our careers page to apply!",
    links: [
      { title: "Careers at Zinovaa", url: "/careers" }
    ]
  },
  {
    question: "What's the vendor onboarding process?",
    answer: "It’s simple: 1) We review your app, 2) Check your quality game, 3) Sign the dotted line, 4) Integrate you into the fam, 5) Quick training sesh. Done in 2-3 weeks! 🚀👔"
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
  // {
  //   title: "Customer Support",
  //   href: "#support",
  //   description: "We're here to help"
  // },
  // {
  //   title: "About Us",
  //   href: "#about",
  //   description: "Our story and mission"
  // },
  // {
  //   title: "Privacy Policy",
  //   href: "#privacy",
  //   description: "How we protect your data"
  // },
  // {
  //   title: "Terms of Service",
  //   href: "#terms",
  //   description: "Our service agreement"
  // }
];