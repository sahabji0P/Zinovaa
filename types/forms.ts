export interface VendorFormData {
  companyName: string;
  contactPerson: string;
  businessEmail: string;
  phone: string;
  businessType: string;
  productCategories: string[];
  documents: File[];
  acceptTerms: boolean;
}

export interface CustomerFormData {
  name: string;
  email: string;
  phone: string;
  issueCategory: string;
  message: string;
  attachment?: File;
}