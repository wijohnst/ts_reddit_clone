import express, { Express, Request, Response } from 'express'

const app: Express = express()
import cors from 'cors'
const PORT: number = 8000

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Home Rout Working')
})

app.listen(PORT, () => {
  console.log('Server has started...')
})
