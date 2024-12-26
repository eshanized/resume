import React from 'react';
import { Achievement } from '../../types/resume';
import { PlusCircle, Trash2 } from 'lucide-react';

interface AchievementsFormProps {
  achievements: Achievement[];
  setAchievements: (achievements: Achievement[]) => void;
}

export function AchievementsForm({ achievements, setAchievements }: AchievementsFormProps) {
  const addAchievement = () => {
    setAchievements([...achievements, { title: '', description: '', date: '' }]);
  };

  const removeAchievement = (index: number) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  const updateAchievement = (index: number, field: keyof Achievement, value: string) => {
    const newAchievements = [...achievements];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    setAchievements(newAchievements);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Achievements</h2>
        <button
          onClick={addAchievement}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <PlusCircle size={20} /> Add Achievement
        </button>
      </div>
      {achievements.map((achievement, index) => (
        <div key={index} className="p-4 bg-white/40 rounded-lg space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium">Achievement #{index + 1}</h3>
            <button
              onClick={() => removeAchievement(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
          <div className="grid gap-4">
            <input
              type="text"
              value={achievement.title}
              onChange={(e) => updateAchievement(index, 'title', e.target.value)}
              placeholder="Achievement Title"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={achievement.description}
              onChange={(e) => updateAchievement(index, 'description', e.target.value)}
              placeholder="Achievement Description"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
            <input
              type="date"
              value={achievement.date}
              onChange={(e) => updateAchievement(index, 'date', e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}