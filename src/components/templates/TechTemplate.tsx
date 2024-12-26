import React from 'react';
import { Resume } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, Award, Medal, Heart, Terminal } from 'lucide-react';

export function TechTemplate({ resume }: { resume: Resume }) {
  const { personalInfo } = resume;
  
  return (
    <div className="max-w-4xl mx-auto bg-gray-900 text-indigo-300">
      <div className="border-b border-gray-800">
        <div className="p-8">
          <div className="flex items-center gap-6">
            {personalInfo.profilePicture && (
              <img 
                src={personalInfo.profilePicture} 
                alt={personalInfo.fullName}
                className="w-32 h-32 rounded-lg object-cover border-2 border-indigo-500"
              />
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-indigo-400">{personalInfo.fullName}</h1>
              <p className="text-xl text-indigo-300 mt-1">{personalInfo.jobTitle}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                {personalInfo.github && (
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" 
                     className="text-indigo-400 hover:text-indigo-300">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                     className="text-indigo-400 hover:text-indigo-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-indigo-400">Experience</h2>
              </div>
              {resume.experience.map((exp, index) => (
                <div key={index} className="mb-6 bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-300">{exp.position}</h3>
                  <p className="text-indigo-400 font-medium">{exp.company}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-indigo-400">Projects & Achievements</h2>
              </div>
              <div className="grid gap-6">
                {resume.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-indigo-300">{achievement.title}</h3>
                    <p className="text-gray-400 mt-2">{achievement.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-indigo-400">Tech Stack</h2>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                {resume.skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-indigo-300 font-medium">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}/5</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6">
                <Medal className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-indigo-400">Certifications</h2>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                {resume.certifications.map((cert, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h3 className="text-indigo-300 font-medium">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.date}</p>
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