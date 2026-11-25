import type { LinkInterface } from '@components/shared/interfaces'
import { Site } from './kobo'

export const MediaLinks: LinkInterface[] = [
  {
    label: 'LinkedIn',
    href: Site.linkedin
  },
  {
    label: 'GitHub',
    href: Site.github
  }
]

export const NavLinks: LinkInterface[] = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Expertise', href: '/expertise/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' }
]
