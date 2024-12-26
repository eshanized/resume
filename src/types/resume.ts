export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  profilePicture: string;
}

export interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: string[];
  activities: string[];
  description: string;
  location: string;
  thesis?: string;
  advisors?: string[];
  relevantCourses: string[];
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialUrl?: string;
}

export interface Hobby {
  name: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Resume {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  achievements: Achievement[];
  certifications: Certification[];
  hobbies: Hobby[];
}

export type TemplateType = 'modern' | 'classic' | 'minimal' | 'vibrant' | 'gradient' | 'creative' | 'elegant' | 'tech' | 'professional';