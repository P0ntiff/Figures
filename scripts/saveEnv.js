import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { parse } from 'dotenv'
const envPath = resolve(__dirname, '../.env')

export default function(vars) {
  let current
  try {
    current = parse(readFileSync(envPath))
  } catch (e) {
    current = {}
  }
  Object.assign(current, vars)
  const serlized = Object.keys(current)
    .map(key => `${key}=${current[key]}`)
    .join(`\n`)
  writeFileSync(envPath, serlized)
}
