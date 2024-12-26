import React from 'react';
import { Resume } from '../../types/resume';

export function ClassicTemplate({ resume }: { resume: Resume }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-lg">
      <header className="border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-900">{resume.personalInfo.fullName}</h1>
        <div className="mt-2 text-gray-700">
          <p>{resume.personalInfo.email} • {resume.personalInfo.phone}</p>
          <p>{resume.personalInfo.location}</p>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional Summary</h2>
        <p className="text-gray-700">{resume.personalInfo.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h2>
        {resume.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="text-gray-600 italic">{exp.startDate} - {exp.endDate}</p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
        {resume.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{edu.school}</h3>
            <p className="text-gray-700">{edu.degree} in {edu.fieldOfStudy}</p>
            <p className="text-gray-600 italic">{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}