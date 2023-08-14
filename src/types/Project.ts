export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  badges?: [string]
}
