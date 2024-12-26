import React from 'react';
import { Globe, Linkedin, Github } from 'lucide-react';

interface SocialLinksProps {
  website: string;
  linkedin: string;
  github: string;
  onChange: (field: string, value: string) => void;
}

export function SocialLinks({ website, linkedin, github, onChange }: SocialLinksProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="relative">
        <Globe className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <input
          type="url"
          value={website}
          onChange={(e) => onChange('website', e.target.value)}
          placeholder="Website"
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="relative">
        <Linkedin className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <input
          type="url"
          value={linkedin}
          onChange={(e) => onChange('linkedin', e.target.value)}
          placeholder="LinkedIn URL"
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="relative">
        <Github className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <input
          type="url"
          value={github}
          onChange={(e) => onChange('github', e.target.value)}
          placeholder="GitHub URL"
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}