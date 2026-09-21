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
      'Check-out and check-in against a named employee and department, with expected return dates and overdue warnings.',
      'Maintenance scheduling with history, and status that moves between available, out and under maintenance.',
      'A dashboard of live counts and asset value by category.',
    ],
    stack: ['C#', 'ASP.NET Core MVC', 'Entity Framework', 'SQL Server'],
    repo: 'https://github.com/MoroesiR/AssetFlow',
  },
  {
    name: 'Loan Calculator Pro',
    tagline: 'WordPress plugin',
    description:
      'A loan calculator that a lending site can drop into a page: instalments, full amortisation schedules, and an admin area to set the products it prices.',
    highlights: [
      'Exposes its own REST API, so the calculator can be used outside the page it ships with.',
      'Generates the full amortisation schedule rather than only the monthly figure.',
    ],
    stack: ['PHP', 'WordPress', 'REST API', 'JavaScript'],
    repo: 'https://github.com/MoroesiR/loan-calculator-pro',
  },
]
