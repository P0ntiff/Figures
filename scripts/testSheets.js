require('dotenv').config()

import { updateSheet } from '../lib/update'

updateSheet([{
  range: 'A1',
  values: [['It worked!']]
}])
