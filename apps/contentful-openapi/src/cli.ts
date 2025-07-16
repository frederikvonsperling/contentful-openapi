#!/usr/bin/env node
import parser from 'yargs-parser'
import generate from './index'
import fs from 'node:fs'

console.log(`\x1b[34m > [contentful-openapi] \x1b[0m`)

const flags = parser(process.argv.slice(2), {
  string: ['access_token', 'space_id', 'environment_id'],
  default: {
    environment_id: 'master',
  },
})

for (const flag of ['access_token', 'space_id', 'environment_id']) {
  if (!flags[flag]) {
    console.error(`> Error: Missing required argument --${flag}`)
    process.exit(1)
  }
}

async function main() {
  try {
    const url = `https://cdn.contentful.com/spaces/${flags.space_id}/environments/${flags.environment_id}/content_types?access_token=${flags.access_token}`

    console.log(`\x1b[34m > Fetching content types from ${url} \x1b[0m`)

    const response = await fetch(url)
    const content = await response.json()
    const specification = generate(content)

    fs.writeFileSync('./openapi-spec.json', JSON.stringify(specification, null, 2))

    console.log('\x1b[34m > Specification saved to openapi-spec.json \x1b[0m')
  } catch (error) {
    console.error('> Error fetching JSON:', error)
    process.exit(1)
  }
}

main()
