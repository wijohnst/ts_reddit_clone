import { Request, Response } from 'express'

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Home Rout Working')
})

app.listen(PORT, () => {
  console.log('Server has started...')
})
