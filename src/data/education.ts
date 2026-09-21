export interface Qualification {
  title: string
  institution: string
  period: string
  note?: string
}

export const education: Qualification[] = [
  {
    title: 'Diploma in ICT: Applications Development',
    institution: 'Durban University of Technology',
    period: '2021 to 2023',
    note: 'Took part in a Collaborative Online International Learning project with students in Brazil.',
  },
  {
    title: 'Grade 12',
    institution: 'Tholang Senior Secondary School',
    period: '2016 to 2018',
    note: 'Math Olympiad in Grade 11.',
  },
]

export const certificates: Qualification[] = [
  {
    title: 'Programming for Everybody (Python)',
    institution: 'University of Michigan, on Coursera',
    period: '2023',
  },
  {
    title: 'Python Data Structures',
    institution: 'University of Michigan, on Coursera',
    period: '2023',
  },
  {
    title: 'Cybersecurity Essentials',
    institution: 'Cisco Networking Academy',
    period: '2021',
  },
]
