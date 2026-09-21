export interface Role {
  title: string
  employer: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'Software developer',
    employer: 'Lending sector, South Africa',
    period: 'February 2024 to now',
    points: [
      'Build and maintain a production loan management system running across several branches, from client registration through to collections.',
      'Work to real lending rules rather than invented ones: affordability, interest, initiation and service fees under the National Credit Act, and the reports that have to reconcile with them.',
      'Layered PHP with the SQL kept in repositories and the decisions kept in services, against MySQL, deployed to cPanel hosting.',
      'Fix faults on live data, where a wrong figure is somebody’s loan account rather than a failing test.',
    ],
  },
]
