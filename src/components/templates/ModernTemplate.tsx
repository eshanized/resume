import React from 'react';
import { Resume } from '../../types/resume';
import { Globe, Linkedin, Github } from 'lucide-react';

export function ModernTemplate({ resume }: { resume: Resume }) {
  const { personalInfo } = resume;
  
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-lg">
      <header className="flex items-center gap-6 mb-8">
        {personalInfo.profilePicture && (
          <img 
            src={personalInfo.profilePicture} 
            alt={personalInfo.fullName}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{personalInfo.fullName}</h1>
          <p className="text-xl text-gray-600 mt-1">{personalInfo.jobTitle}</p>
          <div className="text-gray-600 mt-2">
            <p>{personalInfo.email} | {personalInfo.phone}</p>
            <p>{personalInfo.location}</p>
          </div>
          <div className="flex gap-4 mt-3">
            {personalInfo.website && (
              <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Globe className="w-5 h-5" />
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h2>
        <p className="text-gray-700">{personalInfo.summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
        {resume.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-medium text-gray-800">{exp.position}</h3>
              <span className="text-gray-600">{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="text-gray-600 mt-2">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        {resume.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-medium text-gray-800">{edu.school}</h3>
              <span className="text-gray-600">{edu.startDate} - {edu.endDate}</span>
            </div>
            <p className="text-gray-700">{edu.degree} in {edu.fieldOfStudy}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {resume.skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="font-medium text-gray-800">{skill.name}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}