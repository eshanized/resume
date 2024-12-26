import { Resume } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, Award, Medal, Heart } from 'lucide-react';

export function VibrantTemplate({ resume }: { resume: Resume }) {
  const { personalInfo } = resume;
  
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 rounded-t-lg">
        <div className="flex items-center gap-6">
          {personalInfo.profilePicture && (
            <img 
              src={personalInfo.profilePicture} 
              alt={personalInfo.fullName}
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
            />
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-bold">{personalInfo.fullName}</h1>
            <p className="text-xl text-blue-100 mt-1">{personalInfo.jobTitle}</p>
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
            <div className="flex gap-4 mt-4">
              {personalInfo.website && (
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-100 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-blue-100 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                   className="text-blue-100 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {personalInfo.summary && (
          <section className="mb-8 bg-white/60 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">About Me</h2>
            <p className="text-slate-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Experience</h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="bg-white/60 p-4 rounded-lg backdrop-blur-sm mb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-semibold text-blue-900">{exp.position}</h3>
                    <div className="flex items-center text-sm text-slate-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>
                  <p className="text-blue-800 font-medium mb-2">{exp.company}</p>
                  <p className="text-slate-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Achievements</h2>
              {resume.achievements.map((achievement, index) => (
                <div key={index} className="bg-white/60 p-4 rounded-lg backdrop-blur-sm mb-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">{achievement.title}</h3>
                      <p className="text-slate-600 text-sm mt-1">{achievement.description}</p>
                      <div className="flex items-center text-sm text-slate-500 mt-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="bg-white/60 p-4 rounded-lg backdrop-blur-sm mb-4">
                  <h3 className="text-lg font-semibold text-blue-900">{edu.school}</h3>
                  <p className="text-blue-800">{edu.degree} in {edu.fieldOfStudy}</p>
                  <div className="flex items-center text-sm text-slate-600 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Certifications</h2>
              {resume.certifications.map((cert, index) => (
                <div key={index} className="bg-white/60 p-4 rounded-lg backdrop-blur-sm mb-4">
                  <div className="flex items-start gap-3">
                    <Medal className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">{cert.name}</h3>
                      <p className="text-blue-800">{cert.issuer}</p>
                      <div className="flex items-center text-sm text-slate-600 mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{cert.date}{cert.expiryDate ? ` - ${cert.expiryDate}` : ''}</span>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 mt-1 inline-block"
                        >
                          View Credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Skills</h2>
              <div className="bg-white/60 p-4 rounded-lg backdrop-blur-sm">
                <div className="grid gap-3">
                  {resume.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-blue-900 font-medium">{skill.name}</span>
                        <span className="text-sm text-blue-700">{skill.level}/5</span>
                      </div>
                      <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transition-all duration-300"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Hobbies & Interests</h2>
              <div className="bg-white/60 p-4 rounded-lg backdrop-blur-sm">
                <div className="grid gap-4">
                  {resume.hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-blue-900 font-medium">{hobby.name}</h3>
                        {hobby.description && (
                          <p className="text-slate-600 text-sm mt-1">{hobby.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}