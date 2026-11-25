import type { icons } from '@lucide/astro'

export interface LinkInterface {
  href: string
  label: string
}

export interface SectionHeaderInterface {
  label: string
  title?: string
  action?: LinkInterface
}

export interface CurrentlyInterface {
  label: string
  values: string[]
}

export interface ExperienceEntryInterface {
  period: string
  role: string
  company: string
  desc?: string
  stack?: string[]
}

export interface PrinciplesInterface {
  item: string
  name: string
  description: string
  divider: boolean
}

export interface ProjectRowInterface {
  name: string
  kind: string
  stack: string[]
  year: string
  slug: string
}

export interface ProjectsInterface extends ProjectRowInterface {
  general_stack: string[]
  featured: boolean
  status: string
}

export interface NavLinkInterface {
  link: LinkInterface
  currentPath: string
}

export interface CopyEmailInterface {
  label: string
  email: string
  copiedLabel: string
}

export interface IconButtonInterface {
  icon: keyof typeof icons
  size: number
}
