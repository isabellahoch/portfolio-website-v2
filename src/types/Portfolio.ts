import type { Project } from './Project';

export interface Portfolio {
  loading: boolean
  projects: Project[]
  error: string | null
}
