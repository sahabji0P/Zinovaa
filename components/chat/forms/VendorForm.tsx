"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { VendorFormData } from '@/types/forms';

interface VendorFormProps {
  onSubmit: (data: VendorFormData) => void;
  onCancel: () => void;
}

export function VendorForm({ onSubmit, onCancel }: VendorFormProps) {
  const [formData, setFormData] = useState<VendorFormData>({
    companyName: '',
    contactPerson: '',
    businessEmail: '',
    phone: '',
    businessType: '',
    productCategories: [],
    documents: [],
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="contactPerson">Contact Person</Label>
        <Input
          id="contactPerson"
          value={formData.contactPerson}
          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="businessEmail">Business Email</Label>
        <Input
          id="businessEmail"
          type="email"
          value={formData.businessEmail}
          onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="businessType">Business Type</Label>
        <Input
          id="businessType"
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="documents">Company Documents</Label>
        <Input
          id="documents"
          type="file"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            setFormData({ ...formData, documents: files });
          }}
          className="mt-1"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.acceptTerms}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, acceptTerms: checked as boolean })
          }
          required
        />
        <Label htmlFor="terms" className="text-sm">
          I agree to the terms and conditions
        </Label>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Submit Application</Button>
      </div>
    </form>
  );
}