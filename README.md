# Portfolio

My personal site: what I build, what I have worked on, and how to reach me.

## Stack

| | |
|---|---|
| Framework | React 19 with TypeScript |
| Build | Vite |
| Styling | Tailwind CSS 4 |
| Checks | oxlint and `tsc` |

Everything that is mine rather than the layout's lives in `src/data`: the
profile, the projects, the roles and the skill groups. Editing the site is
editing those four files.

## Running it

```sh
npm install
npm run dev          # http://localhost:5173
```

```sh
npm run build        # type check and production build into dist/
npm run preview      # serve the built site
npm run lint
```
