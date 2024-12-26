import React from 'react';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { EducationForm } from './forms/EducationForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { SkillsForm } from './forms/SkillsForm';
import { AchievementsForm } from './forms/AchievementsForm';
import { CertificationsForm } from './forms/CertificationsForm';
import { HobbiesForm } from './forms/HobbiesForm';
import { Resume } from '../types/resume';

interface ResumeFormProps {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export function ResumeForm({ resume, setResume }: ResumeFormProps) {
  return (
    <div className="space-y-6 p-6 backdrop-blur-lg bg-white/30 rounded-xl shadow-xl">
      <PersonalInfoForm
        personalInfo={resume.personalInfo}
        setPersonalInfo={(info) => setResume({ ...resume, personalInfo: info })}
      />
      <EducationForm
        education={resume.education}
        setEducation={(edu) => setResume({ ...resume, education: edu })}
      />
      <ExperienceForm
        experience={resume.experience}
        setExperience={(exp) => setResume({ ...resume, experience: exp })}
      />
      <SkillsForm
        skills={resume.skills}
        setSkills={(skills) => setResume({ ...resume, skills: skills })}
      />
      <AchievementsForm
        achievements={resume.achievements}
        setAchievements={(achievements) => setResume({ ...resume, achievements })}
      />
      <CertificationsForm
        certifications={resume.certifications}
        setCertifications={(certifications) => setResume({ ...resume, certifications })}
      />
      <HobbiesForm
        hobbies={resume.hobbies}
        setHobbies={(hobbies) => setResume({ ...resume, hobbies })}
      />
    </div>
  );
}