// File: src/data/learnMoreContent.ts

export interface VendorRequirements {
    vendorOnboarding: {
      requiredFields: string[];
      documentVerification: string[];
      eligibilityCriteria: string[];
    };
    locationRequirements: {
      deliverySpeedUSP: string;
      locationCoverage: string[];
      minimumCoverageRadius: number; // in kilometers
    };
  }
  
  export interface ReturnPolicy {
    nonReturnable: {
      priceThreshold: number;
      conditions: string[];
    };
    returnable: {
      timeframe: number; // days
      conditions: string[];
      exceptions: string[];
    };
    refundPolicy: {
      refundMethod: string[];
      processingTime: number; // days
    };
  }
  
  export interface CustomerService {
    supportChannels: string[];
    responseTimeframe: string;
    assistanceTypes: string[];
  }
  
  export const learnMoreContent = {
    vendorOnboarding: {
      requiredFields: [
        "Company Name",
        "Contact Person Name",
        "Business Email",
        "Phone Number",
        "Business Type",
        "Product Categories"
      ],
      documentVerification: [
        "Business Registration Certificate",
        "GST/Tax ID",
        "Bank Account Details",
        "Product Quality Certification",
        "Authorized Signatory ID Proof"
      ],
      eligibilityCriteria: [
        "Minimum 1 year in business",
        "Quality product standards",
        "Ability to fulfill rapid delivery requirements",
        "Transparent pricing",
        "Commitment to customer satisfaction"
      ]
    },
    locationRequirements: {
      deliverySpeedUSP: "30-Minute Rapid Delivery Guaranteed",
      locationCoverage: [
        "Urban City Centers",
        "Metropolitan Areas",
        "Major Commercial Zones"
      ],
      minimumCoverageRadius: 15 // kilometers
    },
    returnPolicy: {
      nonReturnable: {
        priceThreshold: 299,
        conditions: [
          "Products under ₹399",
          "Intimates & Innerwear",
          "Customized/Personalized Items",
          "Hygiene Products",
          "Accessories under ₹349"
        ]
      },
      returnable: {
        timeframe: 1, // days
        conditions: [
          "Zinovaa Approved Products Only",
          "Product must be unworn",
          "Original tags intact",
          "Original packaging preserved",
          "No visible wear or damage"
        ],
        exceptions: [
          "Sale/Discounted Items",
          "Clearance Products"
        ]
      },
      refundPolicy: {
        refundMethod: [
          "Original Payment Method",
          "Store Credit",
          "Gift Card"
        ],
        processingTime: '2-3' // days
      }
    },
    customerService: {
      supportChannels: [
        "24/7 Live Chat",
        "Email Support",
        "WhatsApp Helpline",
        "Instagram DM",
        "Phone Support"
      ],
      responseTimeframe: "Within 2 Hours, Guaranteed 🚀",
      assistanceTypes: [
        "Product Queries",
        "Sizing Help",
        "Style Recommendations",
        "Order Tracking",
        "Return & Refund Support",
        "Personalized Styling Consultation"
      ]
    }
  };
  
  export const learnMorePageContent = {
    heroSection: {
      title: "Behind the Scenes at Zinovaa: Transparency is Our Vibe 💯",
      subtitle: "Get the 411 on how we roll, why we're different, and our promise to you! 🔥"
    },
    sections: [
      {
        title: "Vendor Vibes: How We Curate Coolness 🛍️",
        description: "We don't just pick vendors. We partner with game-changers who get our vision of rapid, awesome fashion delivery!"
      },
      {
        title: "Return Policy: No Stress, No Mess 🔄",
        description: "Didn't love it? No worries! We've got a super clear, drama-free return process that respects both your time and style."
      },
      {
        title: "Customer Support: We've Got Your Back 24/7 🤝",
        description: "Need help? We're not just a support team. We're your fashion BFFs, ready to solve any style emergency!"
      }
    ]
  };