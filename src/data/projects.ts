import type { ProjectsInterface } from '@components/shared/interfaces'

export const Projects: ProjectsInterface[] = [
  {
    name: 'Hyōsei',
    slug: 'hyosei',
    kind: 'Evaluation Platform',
    year: '2024',
    general_stack: ['Angular', 'Node.js', 'PostgreSQL'],
    stack: [
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'TypeORM',
      'Zod',
      'JWT',
      'ExcelJS',
      'Angular',
      'PrimeNG',
      'Tailwind CSS',
      'Docker',
      'Railway',
      'Vercel'
    ],
    featured: true,
    status: 'In production',
    overview:
      'A multi-tenant platform for running project expos: organizers set up events and projects, evaluators and visitors score them from their phones, and results are ready the moment voting closes. It ran Universidad de Tarapacá’s Expo Ciencias 2025.',
    problem: [
      'Expo scoring was done on paper forms and consolidated by hand afterwards, which was slow and error-prone, and kept results from being available on the day.',
      'Some events need two kinds of scoring at once: a public vote open to any visitor, and an evaluator-only rubric that must stay restricted.',
      'The whole load lands in a few hours of a single day, so the system has to hold up during peaks without anyone on hand to fix things mid-event.'
    ],
    approach: [
      'Hexagonal architecture: the domain and its services depend only on ports, with TypeORM and Express kept as adapters at the edges.',
      'Validation with Zod at the domain boundary, so invalid data is rejected before it reaches the business rules.',
      'Layered security: one API key per tenant, JWT authentication and role-based authorization (Admin, Staff, Evaluator, Visitor), plus event-level rules for public versus evaluator-only scoring.'
    ],
    implementation: [
      'REST API in Node.js, Express and TypeScript over a 17-table PostgreSQL schema managed entirely through TypeORM migrations.',
      'Passwords hashed with bcrypt, rate limiting on the API, and centralized error handling.',
      'Results exported as multi-sheet Excel reports, built from parallel queries.',
      'Angular client with PrimeNG and Tailwind CSS, designed mobile-first for scoring from a phone. API on Railway, client on Vercel.'
    ],
    outcome: [
      '740+ users submitted 1,600+ project evaluations during Expo Ciencias 2025, all in one day.',
      'It held a peak of 40+ evaluations per minute.',
      'Organizers got consolidated results and Excel reports as soon as scoring closed, with no manual tallying.'
    ]
  },
  {
    name: 'Kōbun',
    slug: 'kobun',
    kind: 'PDF Desktop Utility',
    year: '2026',
    general_stack: ['Python', 'PySide6', 'PyMuPDF'],
    stack: [
      'Python',
      'PySide6 (Qt)',
      'PyMuPDF',
      'pytest',
      'GitHub Actions',
      'python-semantic-release',
      'PyInstaller',
      'Inno Setup'
    ],
    featured: true,
    status: 'Available to install',
    overview:
      'A desktop utility for Windows and Linux that pulls what you need out of a PDF without touching the original: page ranges, including discontinuous ones like 1-5,10-15,20, into a new file, or the figures of those pages into a folder.',
    problem: [
      'PDF viewers handle this badly. Taking three chapters out of a 600-page book, or every figure in a chapter, ends up as a repetitive manual job of screenshots or several separate exports.',
      'Charts drawn with vector lines and fills are not images inside the PDF, so regular extraction tools miss them entirely.'
    ],
    approach: [
      'Layered architecture inspired by Domain-Driven Design, where the domain knows neither Qt nor PyMuPDF.',
      'Immutable value objects validated on construction: overlapping or adjacent ranges are merged into a canonical form, and two selections covering the same pages are equal.',
      'Explicit domain exceptions: no PyMuPDF error ever escapes the repository, and the UI only talks to a viewmodel, never to the use cases directly.'
    ],
    implementation: [
      '8,700 lines of code backed by 9,400 lines of tests. 609 of them run with no dependencies installed, and CI fails if that ever stops being true, which keeps the domain framework-free.',
      'Vector figures are cropped from the region they occupy on the page, with axis labels kept in and page borders, rules and body text left out. Stored images are exported without lossy re-encoding.',
      'Page preview that follows the selection, a live page count while typing, and long operations on a worker thread so the window never freezes.',
      'Releases from GitHub Actions: Linux and Windows builds, semantic versioning derived from Conventional Commits, and an automatic changelog.'
    ],
    outcome: [
      'Published as a portable Windows .exe, a Windows installer and a Linux .deb that adds it to the application menu.',
      'Ten light and dark themes with contrast checked by tests, plus a persistent history of the last 50 exports.'
    ]
  },
  {
    name: 'Dotfiles',
    slug: 'dotfiles',
    kind: 'Reproducible Dev Environment',
    year: '2026',
    general_stack: ['Shell', 'Python'],
    stack: [
      'Bash',
      'ZSH',
      'Python',
      'ShellCheck',
      'GitHub Actions',
      'Docker Compose',
      'Kitty',
      'Alacritty',
      'Starship',
      'KDE Plasma'
    ],
    featured: true,
    status: 'Ready to use',
    overview:
      'My personal dotfiles plus an automated installer that turns a fresh Ubuntu 26.04 LTS install into a terminal-first full stack development environment, with themes shared across the terminal, the prompt and the desktop.',
    problem: [
      'Setting up a new machine by hand meant hours of repeated steps, and the result was never quite the same twice.',
      'Installing language runtimes from apt pins versions that individual projects cannot change.',
      'Visual configs drift apart over time: the terminal, the prompt and the desktop end up with slightly different colours.'
    ],
    approach: [
      'Everything opt-in: applications, languages and the desktop are picked from multi-select menus, so nothing lands on the machine just because it was on a list.',
      'Runtimes through version managers (nvm, SDKMAN, pipx), so each project can pin its own version.',
      'A single source of truth for colours: the terminal palettes generate the KDE colour schemes, and CI fails if anything drifts.'
    ],
    implementation: [
      '~6,000 lines of shell and ~1,100 of Python, with a --dry-run mode and a guard that refuses to run outside the supported Ubuntu version.',
      'Database servers (PostgreSQL, Redis, MongoDB) run in a Docker Compose stack bound to 127.0.0.1, enforced by CI, while only the clients are installed on the host.',
      'A validation suite that runs locally and in GitHub Actions: shell syntax, ShellCheck, config parsing, theme symlinks, identical palettes across both terminals, and a minimum 4.5:1 contrast for every colour.'
    ],
    outcome: [
      'A new machine is ready for development in a single run, which ends with a summary of the few steps that still need a human, such as the SSH key ready to paste into GitHub.',
      'Three Japanese-inspired themes, switchable with a single symlink, kept consistent between Kitty, Alacritty, Starship and KDE Plasma.'
    ]
  }
]
