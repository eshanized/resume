import React from 'react';
import { Resume } from '../../types/resume';

export function MinimalTemplate({ resume }: { resume: Resume }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-light text-gray-900">{resume.personalInfo.fullName}</h1>
        <div className="mt-2 text-gray-600 text-sm">
          <p>{resume.personalInfo.email} • {resume.personalInfo.phone} • {resume.personalInfo.location}</p>
        </div>
        <p className="mt-4 text-gray-700">{resume.personalInfo.summary}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 uppercase tracking-wider mb-4">Experience</h2>
        {resume.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
              <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">{exp.company}</p>
            <p className="text-gray-600 text-sm">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 uppercase tracking-wider mb-4">Education</h2>
        {resume.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-medium text-gray-900">{edu.school}</h3>
              <span className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</span>
            </div>
            <p className="text-gray-700 text-sm">{edu.degree} in {edu.fieldOfStudy}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-medium text-gray-900 uppercase tracking-wider mb-4">Skills</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {resume.skills.map((skill, index) => (
            <span key={index} className="text-gray-700 text-sm">
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}