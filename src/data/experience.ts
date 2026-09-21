export interface Role {
  title: string
  employer: string
  location: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'Junior software developer',
    employer: 'Future Pro Technology',
    location: 'Durban, KwaZulu-Natal',
    period: 'February 2024 to now',
    points: [
      'Maintain and extend a loan management platform used daily by consultants, vetting, quality control, auditors, collections and HR, with role based workflows and live sync between departments.',
      'Integrated the Nupay and Nedbank PayShap APIs for debit order mandates, loan disbursements, recruiter commissions and client refunds, with error handling and transaction logging so a failed payment can be traced afterwards.',
      'Built the REST endpoints the parts of the system talk to each other through: mandate checks, settlement processing and data exchange across companies.',
      'Built a client verification flow that automates employment checks, mandate validation and document processing, taking a large part of the manual vetting away.',
      'Added an audit trail that records every change to a file as it moves between departments, from capture through vetting, quality control, payment and auditor review.',
      'Built a query management system for client requests such as banking detail changes, refunds and contact updates, with status tracking and routing to the department that handles them.',
      'Indexed the slow MySQL queries and brought page load times down noticeably, and cleaned up a legacy PHP codebase: better structure, SQL injection gaps closed, input validation added.',
    ],
  },
]
