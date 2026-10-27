export const profile = {
  name: 'Moroesi Ramodupi',
  role: 'Software developer',
  location: 'Durban, South Africa',
  availability: 'Open to remote or Durban hybrid',
  // Phone number stays on the CV, off the page.
  emails: ['moroesiramodupi@gmail.com'],
  portrait: '/portrait.jpg',
  cv: '/moroesi-ramodupi-cv.pdf',
  github: 'https://github.com/MoroesiR',
  linkedin: 'https://www.linkedin.com/in/moroesi-ramodupi-654a4b25a',
  headline: 'I build the systems that lend money and keep track of it.',
  summary: [
    'Since February 2024 I have worked on internal loan management systems for 12 companies, where consultants, vetting, quality control, pay master, auditors, collections and HR each work the same file from their own view. A new company means a new system to build.',
    'Not all of it is one stack. Some of the systems I work on are PHP and MySQL, others are C# on .NET with React in front, and the integrations run through both: Nupay debit order mandates and Nedbank PayShap payments, built so a payment can be retried without being paid twice, and traced afterwards.',
    'The part I enjoy is the part nobody demos. Anyone can show the happy path on a screen. What matters is what the system can tell you at half past four when a debit order came back unpaid and somebody has to explain why.',
  ],
  openTo:
    'Looking for a backend or fintech role where I can keep building toward senior engineering. Durban based, open to remote work or a hybrid role in Durban. At work I am one of two developers moving our systems onto AWS, and in my own time I build CreditHub in Laravel.',
}

const STARTED = new Date(2024, 1)

function tenure(): string {
  const now = new Date()
  const months =
    (now.getFullYear() - STARTED.getFullYear()) * 12 + (now.getMonth() - STARTED.getMonth())
  const years = Math.floor(months / 12)
  const rest = months % 12

  return rest === 0 ? `${years} yrs` : `${years} yrs ${rest} mo`
}

export const facts = [
  { value: tenure(), label: 'on a lending platform in production, not a demo' },
  { value: '2 gateways', label: 'Nupay and Nedbank PayShap, integrated end to end' },
  { value: '7 departments', label: 'working one file, each with their own view of it' },
]
