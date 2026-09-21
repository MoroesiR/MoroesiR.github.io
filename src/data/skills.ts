export interface SkillGroup {
  heading: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    heading: 'Server side',
    items: ['PHP', 'Laravel', 'Layered PHP without a framework', 'REST APIs', 'MySQL and MariaDB'],
  },
  {
    heading: 'Browser side',
    items: ['TypeScript', 'React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    heading: 'Also worked in',
    items: ['C# and ASP.NET Core', 'WordPress plugin development', 'SQL Server'],
  },
  {
    heading: 'How I work',
    items: ['Git and GitHub Actions', 'Pest and PHPUnit', 'Role based access control', 'Audit trails and reporting'],
  },
]
