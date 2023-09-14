enum ResumeType {
  QUANT = 'quant',
  PROJECT = 'project',
  CONSULTING = 'consulting',
  DEFAULT = 'default',
}

const ResumePaths: Record<ResumeType, string> = {
  [ResumeType.QUANT]: '/src/assets/resumes/quant.pdf',
  [ResumeType.PROJECT]: '/src/assets/resumes/projects.pdf',
  [ResumeType.CONSULTING]: '/src/assets/resumes/projects.pdf',
  [ResumeType.DEFAULT]: '/src/assets/resumes/projects.pdf',
};

export { ResumeType, ResumePaths };
