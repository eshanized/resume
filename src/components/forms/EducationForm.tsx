import React from 'react';
import { Education } from '../../types/resume';
import { PlusCircle, Trash2, Plus, Minus } from 'lucide-react';

interface EducationFormProps {
  education: Education[];
  setEducation: (education: Education[]) => void;
}

export function EducationForm({ education, setEducation }: EducationFormProps) {
  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        gpa: '',
        honors: [],
        activities: [],
        description: '',
        location: '',
        thesis: '',
        advisors: [],
        relevantCourses: [],
      },
    ]);
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const updateEducation = (index: number, field: keyof Education, value: any) => {
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setEducation(newEducation);
  };

  const addArrayItem = (index: number, field: 'honors' | 'activities' | 'advisors' | 'relevantCourses') => {
    const newEducation = [...education];
    newEducation[index][field] = [...newEducation[index][field], ''];
    setEducation(newEducation);
  };

  const removeArrayItem = (index: number, field: 'honors' | 'activities' | 'advisors' | 'relevantCourses', itemIndex: number) => {
    const newEducation = [...education];
    newEducation[index][field] = newEducation[index][field].filter((_, i) => i !== itemIndex);
    setEducation(newEducation);
  };

  const updateArrayItem = (
    index: number,
    field: 'honors' | 'activities' | 'advisors' | 'relevantCourses',
    itemIndex: number,
    value: string
  ) => {
    const newEducation = [...education];
    newEducation[index][field][itemIndex] = value;
    setEducation(newEducation);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Education</h2>
        <button
          onClick={addEducation}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <PlusCircle size={20} /> Add Education
        </button>
      </div>
      {education.map((edu, index) => (
        <div key={index} className="p-4 bg-white/40 rounded-lg space-y-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Education #{index + 1}</h3>
            <button
              onClick={() => removeEducation(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={edu.school}
              onChange={(e) => updateEducation(index, 'school', e.target.value)}
              placeholder="School"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={edu.location}
              onChange={(e) => updateEducation(index, 'location', e.target.value)}
              placeholder="Location"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => updateEducation(index, 'degree', e.target.value)}
              placeholder="Degree"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={edu.fieldOfStudy}
              onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
              placeholder="Field of Study"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                value={edu.startDate}
                onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={edu.endDate}
                onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              value={edu.gpa}
              onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
              placeholder="GPA"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-4">
            <textarea
              value={edu.description}
              onChange={(e) => updateEducation(index, 'description', e.target.value)}
              placeholder="Description"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />

            <input
              type="text"
              value={edu.thesis}
              onChange={(e) => updateEducation(index, 'thesis', e.target.value)}
              placeholder="Thesis Title (Optional)"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Honors */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">Honors & Awards</label>
                <button
                  type="button"
                  onClick={() => addArrayItem(index, 'honors')}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Plus size={16} />
                </button>
              </div>
              {edu.honors.map((honor, honorIndex) => (
                <div key={honorIndex} className="flex gap-2">
                  <input
                    type="text"
                    value={honor}
                    onChange={(e) => updateArrayItem(index, 'honors', honorIndex, e.target.value)}
                    placeholder="Honor or Award"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, 'honors', honorIndex)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Minus size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Activities */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">Activities & Societies</label>
                <button
                  type="button"
                  onClick={() => addArrayItem(index, 'activities')}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Plus size={16} />
                </button>
              </div>
              {edu.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="flex gap-2">
                  <input
                    type="text"
                    value={activity}
                    onChange={(e) => updateArrayItem(index, 'activities', activityIndex, e.target.value)}
                    placeholder="Activity"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, 'activities', activityIndex)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Minus size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Advisors */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">Academic Advisors</label>
                <button
                  type="button"
                  onClick={() => addArrayItem(index, 'advisors')}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Plus size={16} />
                </button>
              </div>
              {edu.advisors?.map((advisor, advisorIndex) => (
                <div key={advisorIndex} className="flex gap-2">
                  <input
                    type="text"
                    value={advisor}
                    onChange={(e) => updateArrayItem(index, 'advisors', advisorIndex, e.target.value)}
                    placeholder="Advisor Name"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, 'advisors', advisorIndex)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Minus size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Relevant Courses */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">Relevant Courses</label>
                <button
                  type="button"
                  onClick={() => addArrayItem(index, 'relevantCourses')}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Plus size={16} />
                </button>
              </div>
              {edu.relevantCourses.map((course, courseIndex) => (
                <div key={courseIndex} className="flex gap-2">
                  <input
                    type="text"
                    value={course}
                    onChange={(e) => updateArrayItem(index, 'relevantCourses', courseIndex, e.target.value)}
                    placeholder="Course Name"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem(index, 'relevantCourses', courseIndex)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Minus size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}