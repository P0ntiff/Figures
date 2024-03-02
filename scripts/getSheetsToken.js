require('dotenv').config()

import { createInterface } from 'readline'
import { generateAuthUrl, getToken } from '../lib/googleClient'
import saveEnv from './saveEnv'

const authUrl = generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/spreadsheets']
})

console.log('Authorize Google Sheets by visiting this url:', authUrl)

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter the code from that page here: ', (code) => {
  rl.close()
  getToken(code, (err, token) => {
    if (err) return console.error('Error while trying to retrieve access token', err)

    let vars = {}
    const tokenEnvVars = Object.keys(token).forEach(key => {
      vars[`SHEETS_${key.toUpperCase()}`] = token[key]
    })

    saveEnv(vars)
    console.log(`Token stored in .env.`)
  })
})
