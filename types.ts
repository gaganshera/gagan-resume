
export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Award {
  title: string;
  year: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  about: string;
  profileImage: string;
  experience: Experience[];
  education: {
    school: string;
    degree: string;
    period: string;
    highlights: string[];
  };
  skills: SkillCategory[];
  awards: Award[];
  certifications: Certification[];
}
