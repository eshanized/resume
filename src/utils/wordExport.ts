import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { Resume } from '../types/resume';

export async function exportToWord(resume: Resume) {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: resume.personalInfo.fullName,
              bold: true,
              size: 32,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: resume.personalInfo.jobTitle,
              size: 24,
              color: '666666',
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `${resume.personalInfo.email} | ${resume.personalInfo.phone} | ${resume.personalInfo.location}`,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          children: [new TextRun({ text: '\n' })],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Professional Summary',
              bold: true,
              size: 24,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: resume.personalInfo.summary,
              size: 20,
            }),
          ],
        }),
        // Experience Section
        ...resume.experience.flatMap(exp => [
          new Paragraph({
            children: [
              new TextRun({
                text: '\nExperience',
                bold: true,
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: exp.position,
                bold: true,
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${exp.company} (${exp.startDate} - ${exp.endDate})`,
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: exp.description,
                size: 20,
              }),
            ],
          }),
        ]),
        // Education Section
        ...resume.education.flatMap(edu => [
          new Paragraph({
            children: [
              new TextRun({
                text: '\nEducation',
                bold: true,
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: edu.school,
                bold: true,
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${edu.degree} in ${edu.fieldOfStudy}`,
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${edu.startDate} - ${edu.endDate}`,
                size: 20,
              }),
            ],
          }),
        ]),
      ],
    }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${resume.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.docx`);
}