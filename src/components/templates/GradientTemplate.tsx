import React from 'react';
import { Resume } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, Award, Medal, Heart } from 'lucide-react';

export function GradientTemplate({ resume }: { resume: Resume }) {
  const { personalInfo } = resume;
  
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-8 rounded-t-lg">
        <div className="flex items-center gap-6">
          {personalInfo.profilePicture && (
            <img 
              src={personalInfo.profilePicture} 
              alt={personalInfo.fullName}
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
            />
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
              {personalInfo.fullName}
            </h1>
            <p className="text-xl text-pink-100 mt-1">{personalInfo.jobTitle}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              {personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white/60 p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-purple-800 mb-3">About Me</h2>
              <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Experience</h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="bg-white/60 p-6 rounded-lg shadow-lg backdrop-blur-sm mb-4">
                  <h3 className="text-xl font-semibold text-pink-700">{exp.position}</h3>
                  <p className="text-purple-700 font-medium">{exp.company}</p>
                  <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </section>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Skills</h2>
              <div className="bg-white/60 p-6 rounded-lg shadow-lg backdrop-blur-sm">
                {resume.skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-purple-700 font-medium">{skill.name}</span>
                      <span className="text-pink-600">{skill.level}/5</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="bg-white/60 p-6 rounded-lg shadow-lg backdrop-blur-sm mb-4">
                  <h3 className="text-lg font-semibold text-pink-700">{edu.school}</h3>
                  <p className="text-purple-700">{edu.degree}</p>
                  <p className="text-gray-600">{edu.fieldOfStudy}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.startDate} - {edu.endDate}</span>
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