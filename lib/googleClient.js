import { google } from 'googleapis'

export default new google.auth.OAuth2(
  process.env.SHEETS_CLIENT_ID,
  process.env.SHEETS_CLIENT_SECRET,
  process.env.SHEETS_REDIRECT_URI
)
