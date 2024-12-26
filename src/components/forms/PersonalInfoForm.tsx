import React from 'react';
import { PersonalInfo } from '../../types/resume';
import { ImageUpload } from './ImageUpload';
import { SocialLinks } from './SocialLinks';
import { Wand2 } from 'lucide-react';
import { generateSummary } from '../../utils/summaryGenerator';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: (info: PersonalInfo) => void;
}

export function PersonalInfoForm({ personalInfo, setPersonalInfo }: PersonalInfoFormProps) {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo({ ...personalInfo, [field]: value });
  };

  const handleGenerateSummary = async () => {
    if (!personalInfo.jobTitle) {
      alert('Please enter a job title first');
      return;
    }
    
    const summary = await generateSummary(personalInfo.jobTitle);
    handleChange('summary', summary);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <ImageUpload
          value={personalInfo.profilePicture}
          onChange={(value) => handleChange('profilePicture', value)}
        />

        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={personalInfo.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={personalInfo.jobTitle}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              placeholder="Job Title"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              value={personalInfo.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              value={personalInfo.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="Phone"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={personalInfo.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="Location"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <SocialLinks
            website={personalInfo.website}
            linkedin={personalInfo.linkedin}
            github={personalInfo.github}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700">Professional Summary</label>
          <button
            onClick={handleGenerateSummary}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Wand2 className="w-4 h-4" />
            Generate Summary
          </button>
        </div>
        <textarea
          value={personalInfo.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
          placeholder="Professional Summary"
          className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />
      </div>
    </div>
  );
}