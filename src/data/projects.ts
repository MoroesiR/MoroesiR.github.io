export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  repo: string
  demo?: string
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    name: 'CreditHub',
    tagline: 'Multi-role loan management system',
    description:
      'A complete lending pipeline for a small lender: register the client, work out what they can afford, decide the application, sign the agreement, pay the money out, and collect it back, with recruiter commission priced and paid alongside it.',
    highlights: [
      'Six roles, and no role holds more than one of the four permissions that move a loan forward. The permission is declared on the route, not checked in the interface.',
      'Priced on reducing balance, with National Credit Act fee caps and payments applied in the statutory order of interest, then fees, then capital.',
      'Every state change is written to an append-only audit trail, so any file can be explained after the fact.',
      'Tests over the money paths, formatting and type checks on both applications, all of it run by CI on every push.',
    ],
    stack: ['Laravel', 'PHP 8.4', 'React 19', 'TypeScript', 'MySQL', 'Tailwind', 'Pest', 'GitHub Actions'],
    repo: 'https://github.com/MoroesiR/CreditHub',
    demo: 'https://credithub-demo.onrender.com',
    image: '/shots/credithub-dashboard.png',
    imageAlt: 'The CreditHub dashboard, showing totals for clients, applications and disbursements',
  },
  {
    name: 'AssetFlow',
    tagline: 'IT asset management',
    description:
      'A register for company equipment: what is owned, who has it, and what condition it is in. Built after watching an IT department track laptops and projectors on a spreadsheet.',
    highlights: [
      'The full asset lifecycle: automated status tracking, duplicate serial numbers refused, and availability that updates as equipment moves.',
      'Checkout against a named employee and department, with overdue indicators and a condition assessment when equipment comes back.',
      'A dashboard of asset value by category, checkout trends and maintenance schedules, with CSV export.',
      'A REST API documented with Swagger, so other systems can read the register.',
    ],
    stack: ['C#', 'ASP.NET Core 10', 'Entity Framework', 'SQL Server', 'Razor Pages', 'Chart.js'],
    repo: 'https://github.com/MoroesiR/AssetFlow',
    image: '/shots/assetflow-dashboard.png',
    imageAlt: 'The AssetFlow dashboard, showing asset counts, value by category and checkout trends',
  },
]
