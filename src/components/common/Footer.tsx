// import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-4 px-8 text-center text-gray-600 bg-white/50 backdrop-blur-sm mt-8">
      <a
        href="https://github.com/eshanized"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Github className="w-4 h-4" />
        <span>Created by eshanized with ❤️</span>
      </a>
    </footer>
  );
}