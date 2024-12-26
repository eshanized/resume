import React from 'react';
import { Experience } from '../../types/resume';
import { PlusCircle, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  experience: Experience[];
  setExperience: (experience: Experience[]) => void;
}

export function ExperienceForm({ experience, setExperience }: ExperienceFormProps) {
  const addExperience = () => {
    setExperience([
      ...experience,
      { company: '', position: '', startDate: '', endDate: '', description: '' },
    ]);
  };

  const removeExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const updateExperience = (index: number, field: keyof Experience, value: string) => {
    const newExperience = [...experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setExperience(newExperience);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <PlusCircle size={20} /> Add Experience
        </button>
      </div>
      {experience.map((exp, index) => (
        <div key={index} className="p-4 bg-white/40 rounded-lg space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium">Experience #{index + 1}</h3>
            <button
              onClick={() => removeExperience(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={exp.company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
              placeholder="Company"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={exp.position}
              onChange={(e) => updateExperience(index, 'position', e.target.value)}
              placeholder="Position"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={exp.endDate}
                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <textarea
            value={exp.description}
            onChange={(e) => updateExperience(index, 'description', e.target.value)}
            placeholder="Job Description"
            className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
        </div>
      ))}
    </div>
  );
}