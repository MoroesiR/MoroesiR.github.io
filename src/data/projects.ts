export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  repo: string
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
    stack: ['Laravel', 'PHP', 'React', 'TypeScript', 'MySQL', 'Tailwind'],
    repo: 'https://github.com/MoroesiR/CreditHub',
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
    stack: ['C#', 'ASP.NET Core 8', 'Entity Framework', 'SQL Server', 'Razor Pages', 'Chart.js'],
    repo: 'https://github.com/MoroesiR/AssetFlow',
  },
  {
    name: 'Loan Calculator Pro',
    tagline: 'WordPress plugin',
    description:
      'A loan calculator a lending site can drop into a page: monthly payments, total interest, and the full amortisation schedule rather than only the headline figure.',
    highlights: [
      'AJAX endpoints secured with nonce verification and input validation, closed to SQL injection and cross-site scripting.',
      'Every calculation logged, with an admin dashboard showing what visitors are actually pricing.',
      'REST endpoints built to WordPress standards, so other applications can use the calculator.',
    ],
    stack: ['PHP', 'WordPress', 'JavaScript', 'MySQL', 'REST API', 'Chart.js'],
    repo: 'https://github.com/MoroesiR/loan-calculator-pro',
  },
]
