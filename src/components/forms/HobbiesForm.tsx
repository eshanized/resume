import React from 'react';
import { Hobby } from '../../types/resume';
import { PlusCircle, Trash2 } from 'lucide-react';

interface HobbiesFormProps {
  hobbies: Hobby[];
  setHobbies: (hobbies: Hobby[]) => void;
}

export function HobbiesForm({ hobbies, setHobbies }: HobbiesFormProps) {
  const addHobby = () => {
    setHobbies([...hobbies, { name: '', description: '' }]);
  };

  const removeHobby = (index: number) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  const updateHobby = (index: number, field: keyof Hobby, value: string) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = { ...newHobbies[index], [field]: value };
    setHobbies(newHobbies);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Hobbies & Interests</h2>
        <button
          onClick={addHobby}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <PlusCircle size={20} /> Add Hobby
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => (
          <div key={index} className="p-4 bg-white/40 rounded-lg space-y-3">
            <div className="flex justify-between">
              <input
                type="text"
                value={hobby.name}
                onChange={(e) => updateHobby(index, 'name', e.target.value)}
                placeholder="Hobby Name"
                className="flex-1 px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => removeHobby(index)}
                className="ml-2 text-red-500 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
            <textarea
              value={hobby.description}
              onChange={(e) => updateHobby(index, 'description', e.target.value)}
              placeholder="Description (Optional)"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}