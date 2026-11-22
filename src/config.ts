import type { ImageMetadata } from 'astro'

export interface SocialData {
  name: string
  url: string
  icon: string
  ariaLabel: string
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  tagline: string
  authorDescription: string
  avatar?: ImageMetadata
  profileImage?: ImageMetadata
  url: string
  locale: string
  location: string
  email: string
  defaultOgImage: string
  socials: SocialData[]
}

export const siteConfig: SiteConfig = {
  name: 'Ignacio Barraza',
  title: 'Ignacio Barraza | Backend & Full Stack Software Engineer',
  description:
    'Backend and Full Stack Software Engineer from Chile, specializing in TypeScript, Node.js, PostgreSQL, and reliable software architecture.',
  tagline: 'Quiet design. Strong engineering.',
  authorDescription:
    'Software Engineer focused on backend development, full-stack applications, API design, database architecture, and maintainable software systems.',
  url: 'https://codebynacho.com',
  locale: 'en_US',
  location: 'Iquique, Chile',
  email: 'ignacio.barraza.rioja@gmail.com',
  defaultOgImage: '/images/og/default.png',
  socials: []
}
