export interface BadgeEntry {
  id: string
  title: string
  url: string
  category: string
}

export interface Info {
  loading: boolean
  about: string | null
  badges: Record<string, BadgeEntry> | object
  error: string | null
}
