export type BadgeEntry = Record<string, string>;

export interface Info {
  loading: boolean
  about: string | null
  badges: Record<string, BadgeEntry> | object
  error: string | null
}
