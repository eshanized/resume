const summaries: Record<string, string[]> = {
  developer: [
    "Innovative software developer with a passion for creating efficient, scalable solutions. Experienced in full-stack development with a strong foundation in modern programming languages and frameworks. Committed to writing clean, maintainable code and staying current with emerging technologies.",
    "Results-driven software developer combining technical expertise with strong problem-solving abilities. Proven track record of delivering high-quality applications while adhering to best practices and industry standards. Experienced in agile development methodologies and cross-functional team collaboration.",
    "Detail-oriented software developer with expertise in building robust applications. Skilled in translating business requirements into technical solutions while ensuring optimal performance and user experience. Strong advocate for code quality and continuous improvement."
  ],
  designer: [
    "Creative UI/UX designer with a keen eye for detail and a user-centered approach. Experienced in creating intuitive, accessible interfaces that enhance user engagement and satisfaction. Proficient in modern design tools and principles.",
    "Innovative digital designer specializing in creating visually compelling and functional user experiences. Combines artistic vision with technical expertise to deliver designs that exceed client expectations. Strong background in user research and iterative design processes.",
    "Forward-thinking designer with a passion for creating beautiful, user-friendly interfaces. Experienced in working with cross-functional teams to deliver cohesive design solutions. Strong foundation in design principles and modern design systems."
  ],
  manager: [
    "Dynamic project manager with proven success in leading cross-functional teams and delivering complex projects on time and within budget. Skilled in stakeholder management, risk mitigation, and resource optimization.",
    "Results-oriented manager with extensive experience in team leadership and strategic planning. Proven track record of improving operational efficiency and fostering a positive work environment. Strong focus on team development and organizational growth.",
    "Experienced manager with a track record of successful project delivery and team leadership. Skilled in strategic planning, process improvement, and change management. Strong communicator with expertise in stakeholder management."
  ]
};

const defaultSummaries = [
  "Dedicated professional with a strong track record of success in delivering results. Combines technical expertise with excellent communication skills to drive project success. Committed to continuous learning and professional growth.",
  "Results-driven professional with expertise in implementing innovative solutions. Strong analytical and problem-solving abilities combined with excellent interpersonal skills. Proven ability to work effectively in fast-paced environments.",
  "Experienced professional with a proven track record of success. Skilled in project management, team collaboration, and strategic planning. Strong focus on achieving organizational goals while maintaining high quality standards."
];

export async function generateSummary(jobTitle: string): Promise<string> {
  const lowerTitle = jobTitle.toLowerCase();
  let relevantSummaries = defaultSummaries;

  // Match job title with available templates
  for (const [key, summaryList] of Object.entries(summaries)) {
    if (lowerTitle.includes(key)) {
      relevantSummaries = summaryList;
      break;
    }
  }

  // Randomly select a summary from the relevant list
  const randomIndex = Math.floor(Math.random() * relevantSummaries.length);
  return relevantSummaries[randomIndex];
}