import React from 'react';
import { Resume } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, Award, Medal, Heart } from 'lucide-react';

export function ElegantTemplate({ resume }: { resume: Resume }) {
  const { personalInfo } = resume;
  
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold">{personalInfo.fullName}</h1>
          <p className="text-2xl text-amber-200 mt-2 font-serif">{personalInfo.jobTitle}</p>
          <div className="flex justify-center gap-6 mt-6">
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-amber-100 hover:text-white">
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </a>
            )}
            {personalInfo.phone && (
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-amber-100 hover:text-white">
                <Phone className="w-5 h-5" />
                <span>{personalInfo.phone}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        <section className="mb-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed font-serif">{personalInfo.summary}</p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 text-center">Experience</h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute top-0 -left-4 h-full w-0.5 bg-amber-200" />
                <div className="absolute top-2 -left-6 w-4 h-4 rounded-full border-2 border-amber-400 bg-white" />
                <h3 className="text-xl font-semibold text-amber-800">{exp.position}</h3>
                <p className="text-orange-700 font-medium">{exp.company}</p>
                <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </section>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 text-center">Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-6 text-center">
                  <h3 className="text-xl font-semibold text-amber-800">{edu.school}</h3>
                  <p className="text-orange-700">{edu.degree}</p>
                  <p className="text-gray-600">{edu.fieldOfStudy}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 text-center">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {resume.skills.map((skill, index) => (
                  <div key={index} className="text-center">
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}