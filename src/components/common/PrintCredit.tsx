import React from 'react';
import { Github } from 'lucide-react';

export function PrintCredit() {
  return (
    <div className="text-center text-xs text-gray-500 mt-4 print:block hidden">
      Created with Resume Builder by{' '}
      <a
        href="https://github.com/eshanized"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        eshanized
      </a>
    </div>
  );
}