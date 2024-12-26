import React from 'react';
import { Resume } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, Award, Medal, Heart } from 'lucide-react';

export function ProfessionalTemplate({ resume }: { resume: Resume }) {
  const { personalInfo } = resume;
  
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white">
        <div className="max-w-3xl mx-auto p-8">
          <div className="flex items-center gap-8">
            {personalInfo.profilePicture && (
              <img 
                src={personalInfo.profilePicture} 
                alt={personalInfo.fullName}
                className="w-40 h-40 rounded-full object-cover border-4 border-white/10 shadow-xl"
              />
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold">{personalInfo.fullName}</h1>
              <p className="text-xl text-slate-300 mt-2">{personalInfo.jobTitle}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {personalInfo.email && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-4 h-4" />
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4" />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Professional Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Experience</h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-4">
                <h3 className="text-xl font-semibold text-slate-800">{exp.position}</h3>
                <p className="text-slate-600 font-medium">{exp.company}</p>
                <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </section>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {resume.skills.map((skill, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-800">{skill.name}</span>
                        <span className="text-sm text-slate-600">{skill.level}/5</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full">
                        <div
                          className="h-full rounded-full bg-slate-600"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-4">
                  <h3 className="text-lg font-semibold text-slate-800">{edu.school}</h3>
                  <p className="text-slate-700">{edu.degree}</p>
                  <p className="text-slate-600">{edu.fieldOfStudy}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Certifications</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                {resume.certifications.map((cert, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex items-start gap-3">
                      <Medal className="w-5 h-5 text-slate-700 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-800">{cert.name}</h3>
                        <p className="text-slate-600">{cert.issuer}</p>
                        <p className="text-sm text-gray-500">{cert.date}</p>
                      </div>
                    </div>
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