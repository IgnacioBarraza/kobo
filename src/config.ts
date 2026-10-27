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
  location: string
  email: string
}

export const siteConfig: SiteConfig = {
  name: 'Ignacio Barraza',
  title: 'Ignacio Barraza — Backend Software Engineer',
  url: 'https://codebynacho.com',
  description:
    'Backend & Full Stack Software Engineer from Chile, specializing in TypeScript, Node.js, PostgreSQL, and scalable backend systems. Building reliable applications, APIs, and digital products with a focus on clean architecture, maintainability, and real-world impact.',
  tagline: 'Building Applications and Systems That Endure',
  authorDescription:
    'I’m a software engineer passionate about building reliable software and solving complex problems through technology. I specialize in backend development and full-stack applications, designing APIs, database architectures, and scalable systems using modern technologies. I value clean code, maintainable architectures, and continuous learning, turning ideas into practical digital products that make a difference.',
  location: 'Iquique, Chile',
  email: 'ignacio.barraza.rioja@gmail.com'
}
