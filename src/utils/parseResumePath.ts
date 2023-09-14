import { ResumeType } from '../types/resumeVersions';

function parseResumePath(path: string): ResumeType {
  switch (true) {
    case path.includes('assets/resume'):
      return ResumeType.QUANT;

    case path.includes('src/resume'):
      return ResumeType.PROJECT;

    case path.includes('uploads/resume'):
      return ResumeType.CONSULTING;

    default:
      return ResumeType.DEFAULT; // Return undefined for unrecognized paths
  }
}

export default parseResumePath;
