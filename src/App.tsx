import { useState } from 'react';
import { Resume, TemplateType } from './types/resume';
import { ResumeForm } from './components/ResumeForm';
import { ModernTemplate } from './components/templates/ModernTemplate';
import { ClassicTemplate } from './components/templates/ClassicTemplate';
import { MinimalTemplate } from './components/templates/MinimalTemplate';
import { VibrantTemplate } from './components/templates/VibrantTemplate';
import { GradientTemplate } from './components/templates/GradientTemplate';
import { CreativeTemplate } from './components/templates/CreativeTemplate';
import { ElegantTemplate } from './components/templates/ElegantTemplate';
import { TechTemplate } from './components/templates/TechTemplate';
import { ProfessionalTemplate } from './components/templates/ProfessionalTemplate';
import { FileText, Download, FileOutput } from 'lucide-react';
import { Footer } from './components/common/Footer';
import { PrintCredit } from './components/common/PrintCredit';
import { initialResume } from './constants/initialState';
import { exportToWord } from './utils/wordExport';

export default function App() {
  const [resume, setResume] = useState<Resume>(initialResume);
  const [template, setTemplate] = useState<TemplateType>('tech');

  const TemplateComponent = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    minimal: MinimalTemplate,
    vibrant: VibrantTemplate,
    gradient: GradientTemplate,
    creative: CreativeTemplate,
    elegant: ElegantTemplate,
    tech: TechTemplate,
    professional: ProfessionalTemplate,
  }[template];

  const handleWordExport = async () => {
    await exportToWord(resume);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
          </div>
          <p className="text-gray-600">Create your professional resume with our beautiful templates</p>
          <div className="text-sm text-gray-500 mt-1">Version 1.0.0</div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/30 rounded-xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Template</h2>
              <div className="grid grid-cols-3 gap-2">
                {(['modern', 'classic', 'minimal', 'vibrant', 'gradient', 'creative', 'elegant', 'tech', 'professional'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTemplate(t)}
                    className={`px-3 py-2 rounded-lg capitalize text-sm ${
                      template === t
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/50 text-gray-700 hover:bg-white/70'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            
            <ResumeForm resume={resume} setResume={setResume} />
          </div>

          <div className="lg:sticky lg:top-8 space-y-4">
            <div className="flex justify-end gap-4">
              <button
                onClick={handleWordExport}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FileOutput size={20} />
                Export to Word
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={20} />
                Download PDF
              </button>
            </div>
            <div className="preview-wrapper overflow-auto rounded-xl shadow-xl">
              <TemplateComponent resume={resume} />
              <PrintCredit />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}