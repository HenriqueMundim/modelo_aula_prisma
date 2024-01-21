import express, { Express, Request, Response } from 'express'


const app: Express = express()

app.use(express.json())

app.get('/teste', async (req: Request, res: Response) => {

})

app.post('/teste', async (req: Request, res: Response) => {

})

app.put('/teste/:id', async (req: Request, res: Response) => {

})

app.delete('/teste/:id', async (req: Request, res: Response) => {

})


app.listen(3000)