import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const page = resolve(root, 'dist/index.html')
const server = resolve(root, 'dist-ssr/entry-server.js')

const { render } = await import(pathToFileURL(server).href)
const html = readFileSync(page, 'utf8')

if (!html.includes('<div id="root"></div>')) {
  throw new Error('Could not find the root div in dist/index.html')
}

writeFileSync(page, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log('Prerendered dist/index.html')
