import React from 'react';
import { Skill } from '../../types/resume';
import { PlusCircle, Trash2 } from 'lucide-react';

interface SkillsFormProps {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}

export function SkillsForm({ skills, setSkills }: SkillsFormProps) {
  const addSkill = () => {
    setSkills([...skills, { name: '', level: 3 }]);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const updateSkill = (index: number, field: keyof Skill, value: string | number) => {
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setSkills(newSkills);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
        <button
          onClick={addSkill}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <PlusCircle size={20} /> Add Skill
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 bg-white/40 p-3 rounded-lg">
            <input
              type="text"
              value={skill.name}
              onChange={(e) => updateSkill(index, 'name', e.target.value)}
              placeholder="Skill name"
              className="flex-1 px-3 py-1 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="range"
              min="1"
              max="5"
              value={skill.level}
              onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
              className="w-24"
            />
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}