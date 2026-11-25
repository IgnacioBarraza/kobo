import type { ProjectsInterface } from '@components/shared/interfaces'

export const Projects: ProjectsInterface[] = [
  {
    name: 'Hyōsei',
    slug: 'hyosei',
    kind: 'Evaluation Platform',
    year: '2024',
    general_stack: ['Angular', 'Node.js', 'PostgreSQL'],
    stack: [''],
    featured: true,
    status: 'In production'
  },
  {
    name: 'Kōbun',
    slug: 'kobun',
    kind: 'PDF Desktop Utility',
    year: '2026',
    general_stack: ['Python', 'PyPDF2', 'Tkinter'],
    stack: [''],
    featured: true,
    status: 'Available to install'
  },
  {
    name: 'Dotfiles',
    slug: 'dotfiles',
    kind: 'Reproducible Dev Environment',
    year: '2026',
    general_stack: ['Shell', 'Python'],
    stack: [''],
    featured: true,
    status: 'Ready to use'
  }
]
