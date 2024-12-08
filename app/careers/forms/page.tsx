'use client';

import { useState } from 'react';
import { playfair } from '@/components/layout/fonts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';


const CareerApplicationForm = ({ job }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: 'fresher',
        education: '',
        portfolio: '',
        socialLinks: '',
        interest: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className={`${playfair.className} text-4xl font-bold mb-8 text-red-600`}>
                Apply for (Add title here)
            </h1>
            <p className="text-gray-600 mb-8">Add Description here!</p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdWGV5LEi8t_TvIZbNC814Ar8Rl2x6JMjQDNstEnENvzFK-qg/viewform?embedded=true" width="640" height="585" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    );
};

export default CareerApplicationForm;