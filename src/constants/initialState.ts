import { Resume } from '../types/resume';

export const initialResume: Resume = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: '',
    profilePicture: '',
  },
  education: [],
  experience: [],
  skills: [],
  achievements: [],
  certifications: [],
  hobbies: [],
};