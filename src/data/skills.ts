export interface SkillGroup {
  heading: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    heading: 'Languages',
    items: ['PHP', 'JavaScript and TypeScript', 'C#', 'Python', 'SQL'],
  },
  {
    heading: 'Frameworks and libraries',
    items: ['Laravel', 'ASP.NET Core', 'React', 'WordPress', 'jQuery and AJAX', 'Tailwind CSS'],
  },
  {
    heading: 'Databases',
    items: ['MySQL and MariaDB', 'SQL Server', 'Entity Framework Core'],
  },
  {
    heading: 'APIs and integration',
    items: [
      'REST API design and consumption',
      'Payment gateways: Nupay, Nedbank PayShap',
      'JSON and XML data handling',
    ],
  },
  {
    heading: 'Tools',
    items: ['Git and GitHub', 'Visual Studio and VS Code', 'Postman', 'Swagger', 'GitHub Actions'],
  },
  {
    heading: 'Learning now',
    items: ['Docker'],
  },
]
