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
      'Maintain and extend the internal loan management systems used by 12 companies, each on its own database schema, and set up a new system each time a company is brought on, with role based workflows for consultants, vetting, quality control, pay master, auditors, collections and HR.',
      'Work across both stacks the business runs on: PHP with MySQL on some of the systems, C# on .NET with React on others.',
      'Integrated the Nupay and Nedbank PayShap APIs for debit order mandates, loan disbursements, recruiter commissions and client refunds, with error handling and transaction logging so any issue can be traced afterwards.',
      'Made payments safe to retry. A mandate request is sent once, and a mandate left behind by a timeout is recovered instead of duplicated. A refund the bank has not confirmed is held so it is never paid twice, and every payout carries a company specific statement reference so finance can reconcile it.',
      'One of two developers, working with an external AWS consultant, moving these systems from shared hosting onto AWS. Built the health check for the load balancer and CodeDeploy, a container runner for background workers and scheduled jobs, and S3 document storage, and moved every secret out of the code into environment configuration, working toward automated releases in place of a manual copy onto one server.',
      'Built the REST endpoints the systems talk to each other through: mandate checks, settlement processing and data exchange across companies.',
      'Built a client verification flow that automates employment checks, mandate validation and document processing, with bank specific account rules and duplicate ID checks, taking a large part of the manual vetting away.',
      'Added an audit trail that records every change to a file as it moves between departments, from the consultant through vetting, quality control, payment and auditor review, plus a handover trail of who held each file and for how long.',
      'Built a query management system for client requests such as banking detail changes, refunds, settlements and cancellations, with status tracking and routing to the department that handles them.',
      'Indexed the slow MySQL queries and brought page load times down noticeably, and cleaned up legacy PHP and C# code: better structure, SQL injection gaps closed, input validation added, all through code review with senior developers, Git branching and a standards check in CI.',
    ],
  },
]
