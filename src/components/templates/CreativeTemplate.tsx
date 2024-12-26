import React from 'react';
import { Resume } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, Award, Medal, Heart } from 'lucide-react';

export function CreativeTemplate({ resume }: { resume: Resume }) {
  const { personalInfo } = resume;
  
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform -skew-y-6 origin-top-left" />
        <div className="relative z-10 p-8 pt-16">
          <div className="flex items-center gap-6">
            {personalInfo.profilePicture && (
              <img 
                src={personalInfo.profilePicture} 
                alt={personalInfo.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
              />
            )}
            <div className="flex-1 text-white">
              <h1 className="text-4xl font-bold">{personalInfo.fullName}</h1>
              <p className="text-xl text-emerald-100 mt-1">{personalInfo.jobTitle}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                {personalInfo.email && (
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-emerald-200">
                    <Mail className="w-4 h-4" />
                    <span>{personalInfo.email}</span>
                  </a>
                )}
                {personalInfo.phone && (
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-emerald-200">
                    <Phone className="w-4 h-4" />
                    <span>{personalInfo.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <section className="bg-white/70 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Professional Journey</h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="mb-6 relative pl-4 border-l-2 border-emerald-300">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500" />
                  <h3 className="text-xl font-semibold text-emerald-700">{exp.position}</h3>
                  <p className="text-teal-600 font-medium">{exp.company}</p>
                  <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </section>

            <section className="bg-white/70 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Education & Learning</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="text-lg font-semibold text-emerald-700">{edu.school}</h3>
                  <p className="text-teal-600">{edu.degree} in {edu.fieldOfStudy}</p>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="md:col-span-4 space-y-8">
            <section className="bg-white/70 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Expertise</h2>
              <div className="space-y-4">
                {resume.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-emerald-700 font-medium">{skill.name}</span>
                      <span className="text-teal-600">{skill.level}/5</span>
                    </div>
                    <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/70 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Certifications</h2>
              {resume.certifications.map((cert, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-start gap-2">
                    <Medal className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-emerald-700">{cert.name}</h3>
                      <p className="text-teal-600 text-sm">{cert.issuer}</p>
                      <p className="text-gray-600 text-sm">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}