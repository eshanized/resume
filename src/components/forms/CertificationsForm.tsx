import React from 'react';
import { Certification } from '../../types/resume';
import { PlusCircle, Trash2 } from 'lucide-react';

interface CertificationsFormProps {
  certifications: Certification[];
  setCertifications: (certifications: Certification[]) => void;
}

export function CertificationsForm({ certifications, setCertifications }: CertificationsFormProps) {
  const addCertification = () => {
    setCertifications([...certifications, { name: '', issuer: '', date: '' }]);
  };

  const removeCertification = (index: number) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  const updateCertification = (index: number, field: keyof Certification, value: string) => {
    const newCertifications = [...certifications];
    newCertifications[index] = { ...newCertifications[index], [field]: value };
    setCertifications(newCertifications);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>
        <button
          onClick={addCertification}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <PlusCircle size={20} /> Add Certification
        </button>
      </div>
      {certifications.map((cert, index) => (
        <div key={index} className="p-4 bg-white/40 rounded-lg space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium">Certification #{index + 1}</h3>
            <button
              onClick={() => removeCertification(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
          <div className="grid gap-4">
            <input
              type="text"
              value={cert.name}
              onChange={(e) => updateCertification(index, 'name', e.target.value)}
              placeholder="Certification Name"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={cert.issuer}
              onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
              placeholder="Issuing Organization"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                value={cert.date}
                onChange={(e) => updateCertification(index, 'date', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={cert.expiryDate}
                onChange={(e) => updateCertification(index, 'expiryDate', e.target.value)}
                placeholder="Expiry Date (Optional)"
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="url"
              value={cert.credentialUrl}
              onChange={(e) => updateCertification(index, 'credentialUrl', e.target.value)}
              placeholder="Credential URL (Optional)"
              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}