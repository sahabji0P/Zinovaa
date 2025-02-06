"use client";

import { playfair } from "@/components/layout/fonts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Award, Building2, Clock, Send, Shield, Trash2, Upload } from "lucide-react";
import { useState } from "react";

interface VendorForm {
    brandName: string;
    name: string;
    designation: string;
    phone: string;
    email: string;
    businessType: string;
    otherBusinessType?: string;
    yearEstablished: string;
    city: string;
    state: string;
    country: string;
    productTypes: string;
    priceMin: string;
    priceMax: string;
    customization: boolean;
    inventory: 'ready-to-ship' | 'made-to-order' | 'both';
    fastDelivery: boolean;
    hasLogo: boolean;
    instagram: string;
    facebook: string;
    otherPlatforms: string;
    comments: string;
}

export default function VendorApplication() {
    const [formData, setFormData] = useState<VendorForm>({
        brandName: '',
        name: '',
        designation: '',
        phone: '',
        email: '',
        businessType: '',
        yearEstablished: '',
        city: '',
        state: '',
        country: '',
        productTypes: '',
        priceMin: '',
        priceMax: '',
        customization: false,
        inventory: 'ready-to-ship',
        fastDelivery: false,
        hasLogo: false,
        instagram: '',
        facebook: '',
        otherPlatforms: '',
        comments: ''
    });

    const [uploadedFiles, setUploadedFiles] = useState<{
        productCatalog: File | null;
        businessRegistration: File | null;
    }>({
        productCatalog: null,
        businessRegistration: null,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "productCatalog" | "businessRegistration") => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedFiles((prev) => ({ ...prev, [field]: file }));
        }
    };

    const removeFile = (field: "productCatalog" | "businessRegistration") => {
        setUploadedFiles((prev) => ({ ...prev, [field]: null }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const requirements = [
        {
            icon: Shield,
            title: "Business Registration",
            description: "Valid business registration and tax documents"
        },
        {
            icon: Award,
            title: "Quality Standards",
            description: "Meet our product quality and authenticity standards"
        },
        {
            icon: Clock,
            title: "Delivery Commitment",
            description: "Ability to fulfill orders within our delivery timeframe"
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-10 px-4 flex items-center justify-center">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 bg-white rounded-2xl shadow-xl p-8"
                >
                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Building2 className="w-16 h-16 text-red-600 mx-auto" />
                        </motion.div>

                        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold text-gray-800`}>
                            Partner with Zinovaa
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join our fashion revolution! Let&apos;s create something extraordinary together.
                            Fill out this form to begin our partnership journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {requirements.map((req, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <req.icon className="w-12 h-12 text-red-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                                <p className="text-gray-600">{req.description}</p>
                            </motion.div>
                        ))}

                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="space-y-12 mt-8">
                        {/* Basic Information */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className={`${playfair.className} text-2xl font-bold text-gray-800`}>
                                Basic Information
                            </h2>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="brandName">Brand Name</Label>
                                    <Input
                                        id="brandName"
                                        value={formData.brandName}
                                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                                        placeholder="Your brand name"
                                        className="border-2"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your full name"
                                        className="border-2"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="designation">Designation</Label>
                                    <Input
                                        id="designation"
                                        value={formData.designation}
                                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                        placeholder="e.g., Owner, Manager"
                                        className="border-2"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Contact Number</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="Your phone number"
                                        className="border-2"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="you@example.com"
                                        className="border-2"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="yearEstablished">Year of Establishment</Label>
                                    <Input
                                        id="yearEstablished"
                                        type="number"
                                        value={formData.yearEstablished}
                                        onChange={(e) => setFormData({ ...formData, yearEstablished: e.target.value })}
                                        placeholder="YYYY"
                                        className="border-2"
                                        required
                                    />
                                </div>
                            </div>
                        </motion.section>

                        {/* Business Details */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <h2 className={`${playfair.className} text-2xl font-bold text-gray-800`}>
                                Business Details
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Business Type</Label>
                                    <Select
                                        onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                                    >
                                        <SelectTrigger className="border-2">
                                            <SelectValue placeholder="Select business type" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="manufacturer">Manufacturer</SelectItem>
                                            <SelectItem value="retailer">Retailer</SelectItem>
                                            <SelectItem value="distributor">Distributor</SelectItem>
                                            <SelectItem value="wholesaler">Wholesaler</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {formData.businessType === 'other' && (
                                    <div className="space-y-2">
                                        <Label htmlFor="otherBusinessType">Please specify</Label>
                                        <Input
                                            id="otherBusinessType"
                                            value={formData.otherBusinessType}
                                            onChange={(e) => setFormData({ ...formData, otherBusinessType: e.target.value })}
                                            className="border-2"
                                        />
                                    </div>
                                )}

                                <div className="grid gap-6 sm:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            className="border-2"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="state">State</Label>
                                        <Input
                                            id="state"
                                            value={formData.state}
                                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                            className="border-2"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="country">Country</Label>
                                        <Input
                                            id="country"
                                            value={formData.country}
                                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                            className="border-2"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Product Details & Customization */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h2 className={`${playfair.className} text-2xl font-bold text-gray-800`}>
                                Product Details & Customization
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="productTypes">Types of Products Offered</Label>
                                    <Input
                                        id="productTypes"
                                        value={formData.productTypes}
                                        onChange={(e) => setFormData({ ...formData, productTypes: e.target.value })}
                                        placeholder="e.g., Men's Clothing, Women's Clothing, Accessories"
                                        className="border-2"
                                        required
                                    />
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="priceMin">Minimum Price Range</Label>
                                        <Input
                                            id="priceMin"
                                            type="number"
                                            value={formData.priceMin}
                                            onChange={(e) => setFormData({ ...formData, priceMin: e.target.value })}
                                            className="border-2"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="priceMax">Maximum Price Range</Label>
                                        <Input
                                            id="priceMax"
                                            type="number"
                                            value={formData.priceMax}
                                            onChange={(e) => setFormData({ ...formData, priceMax: e.target.value })}
                                            className="border-2"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Label>Do you offer customization?</Label>
                                    <RadioGroup
                                        defaultValue="no"
                                        onValueChange={(value) => setFormData({ ...formData, customization: value === 'yes' })}
                                        className="flex space-x-8"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="customization-yes" />
                                            <Label htmlFor="customization-yes">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="customization-no" />
                                            <Label htmlFor="customization-no">No</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </motion.section>

                        {/* Inventory and Delivery */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-6"
                        >
                            <h2 className={`${playfair.className} text-2xl font-bold text-gray-800`}>
                                Inventory and Delivery
                            </h2>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Label>Current Inventory Availability</Label>
                                    <RadioGroup
                                        defaultValue="ready-to-ship"
                                        onValueChange={(value) => setFormData({ ...formData, inventory: value as 'ready-to-ship' | 'made-to-order' | 'both' })}
                                        className="flex flex-col space-y-4"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="ready-to-ship" id="ready-to-ship" />
                                            <Label htmlFor="ready-to-ship">Ready-to-ship</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="made-to-order" id="made-to-order" />
                                            <Label htmlFor="made-to-order">Made-to-order</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="both" id="both" />
                                            <Label htmlFor="both">Both</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-4">
                                    <Label>Can you provide same-day or 30-minute delivery in our operational areas?</Label>
                                    <RadioGroup
                                        defaultValue="no"
                                        onValueChange={(value) => setFormData({ ...formData, fastDelivery: value === 'yes' })}
                                        className="flex space-x-8"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="delivery-yes" />
                                            <Label htmlFor="delivery-yes">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="delivery-no" />
                                            <Label htmlFor="delivery-no">No</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </motion.section>
                        {/* Marketing and Branding Section */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className={`${playfair.className} text-2xl font-bold text-gray-800`}>
                                Marketing and Branding
                            </h2>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Label>Do you have a logo and product images ready for listing?</Label>
                                    <RadioGroup
                                        defaultValue="no"
                                        onValueChange={(value) => setFormData({ ...formData, hasLogo: value === 'yes' })}
                                        className="flex space-x-8"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="logo-yes" />
                                            <Label htmlFor="logo-yes">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="logo-no" />
                                            <Label htmlFor="logo-no">No</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="instagram">Instagram Handle</Label>
                                        <Input
                                            id="instagram"
                                            value={formData.instagram}
                                            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                            placeholder="@yourbrand"
                                            className="border-2"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="facebook">Facebook Handle</Label>
                                        <Input
                                            id="facebook"
                                            value={formData.facebook}
                                            onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                                            placeholder="@yourbrand"
                                            className="border-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Other Platforms Section */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="space-y-6"
                        >
                            <h2 className={`${playfair.className} text-2xl font-bold text-gray-800`}>
                                Other Platforms
                            </h2>

                            <div className="space-y-2">
                                <Label htmlFor="otherPlatforms">Are you currently listed on other platforms? If yes, please specify:</Label>
                                <Textarea
                                    id="otherPlatforms"
                                    value={formData.otherPlatforms}
                                    onChange={(e) => setFormData({ ...formData, otherPlatforms: e.target.value })}
                                    placeholder="Please list any other platforms where your products are currently available..."
                                    className="border-2 min-h-[100px]"
                                />
                            </div>
                        </motion.section>

                        {/* Upload Section */}

                        {/* Upload Section */}

                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl font-bold text-gray-800">Upload Documents</h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {/* Product Catalog */}
                                <div className="space-y-2">
                                    <Label htmlFor="productCatalog">Product Catalog</Label>
                                    {!uploadedFiles.productCatalog ? (
                                        <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                                            <Input
                                                id="productCatalog"
                                                type="file"
                                                accept=".pdf, image/*"
                                                onChange={(e) => handleFileChange(e, "productCatalog")}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="productCatalog"
                                                className="block text-gray-600 text-sm cursor-pointer"
                                            >
                                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                Click to upload!
                                                <br />
                                                <span className="text-sm">(Images or PDF, max 10MB)</span>
                                            </label>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <p className="text-sm text-gray-800 truncate">
                                                {uploadedFiles.productCatalog.name}
                                            </p>
                                            <div className="flex gap-2">
                                                <label htmlFor="productCatalog" className="text-blue-500 cursor-pointer">
                                                    Edit
                                                </label>
                                                <Trash2
                                                    className="w-5 h-5 text-red-500 cursor-pointer"
                                                    onClick={() => removeFile("productCatalog")}
                                                />
                                                <Input
                                                    id="productCatalog"
                                                    type="file"
                                                    accept=".pdf, image/*"
                                                    onChange={(e) => handleFileChange(e, "productCatalog")}
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                    )}

                                </div>

                                {/* Business Registration */}
                                <div className="space-y-2">
                                    <Label htmlFor="businessRegistration">Business Registration</Label>
                                    {!uploadedFiles.businessRegistration ? (
                                        <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                                            <Input
                                                id="businessRegistration"
                                                type="file"
                                                accept=".pdf, image/*"
                                                onChange={(e) => handleFileChange(e, "businessRegistration")}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="businessRegistration"
                                                className="block text-gray-600 text-sm cursor-pointer"
                                            >
                                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                Click to upload!
                                                <br />
                                                <span className="text-sm">(Images or PDF, max 5MB)</span>
                                            </label>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <p className="text-sm text-gray-800 truncate">
                                                {uploadedFiles.businessRegistration.name}
                                            </p>
                                            <div className="flex gap-2">
                                                <label htmlFor="businessRegistration" className="text-blue-500 cursor-pointer">
                                                    Edit
                                                </label>
                                                <Trash2
                                                    className="w-5 h-5 text-red-500 cursor-pointer"
                                                    onClick={() => removeFile("businessRegistration")}
                                                />
                                                <Input
                                                    id="businessRegistration"
                                                    type="file"
                                                    accept=".pdf, image/*"
                                                    onChange={(e) => handleFileChange(e, "businessRegistration")}
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Note Section */}
                            <div className="mt-4 text-sm text-gray-600 border-t pt-4">
                                If you want to share more documents for verification, please email us at{" "}
                                <a
                                    href="mailto:zinovaa.in@gmail.com"
                                    className="text-red-600 underline hover:text-red-700 font-semibold"
                                >
                                    zinovaa.in@gmail.com
                                </a>.
                            </div>
                        </motion.section>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex justify-center pt-6"
                        >
                            <Button
                                type="submit"
                                className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-6 flex items-center gap-2"
                            >
                                Submit Application
                                <Send className="w-5 h-5" />
                            </Button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}