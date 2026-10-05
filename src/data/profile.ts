export const profile = {
  name: 'Moroesi Ramodupi',
  role: 'Software developer',
  location: 'Durban, South Africa',
  availability: 'Open to roles across South Africa, on site or remote',
  // Phone number stays on the CV, off the page.
  emails: ['moroesiramodupi@gmail.com', 'mavundlamoroesi@gmail.com'],
  portrait: '/portrait.jpg',
  cv: '/moroesi-ramodupi-cv.pdf',
  github: 'https://github.com/MoroesiR',
  linkedin: 'https://www.linkedin.com/in/moroesi-ramodupi-654a4b25a',
  headline: 'I build the systems that lend money and keep track of it.',
  summary: [
    'Two and a half years on a production loan management platform used every day by consultants, vetting, quality control, collections, auditors and HR, each with their own workflow and their own view of the same file.',
    'Not all of it is one stack. Some of the systems I work on are PHP and MySQL, others are C# on .NET with React in front, and the integrations run through both: Nupay debit order mandates and Nedbank PayShap payments, where a failure has to be traceable afterwards.',
    'The part I enjoy is the part nobody demos. Anyone can show the happy path on a screen. What matters is what the system can tell you at half past four when a debit order came back unpaid and somebody has to explain why.',
  ],
  openTo:
    'Looking for backend, full stack or fintech work. Durban based and happy on site, open to hybrid anywhere in South Africa, and set up to work remotely. Picking up Docker at the moment, and building CreditHub in Laravel in my own time.',
}

export const facts = [
  { value: '2 yrs 8 mo', label: 'on a lending platform in production, not a demo' },
  { value: '2 gateways', label: 'Nupay and Nedbank PayShap, integrated end to end' },
  { value: '6 departments', label: 'working one file, each with their own view of it' },
]
