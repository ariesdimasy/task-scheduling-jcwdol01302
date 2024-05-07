import express, { Request, Response } from 'express'
import { scheduleTask } from './crons/scheduleTask'
import exampleQueue from './queues/queue'

import todoRoute from "./routers/todoRoute"

const app = express()
const port = 3002

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send({
        hello: 'world'
    })
})

app.use("/todos", todoRoute)

scheduleTask()

app.get('/enqueue', async (req: Request, res: Response) => {
    await exampleQueue.add('exampleJob', { data: 'some data' })
    res.send('Job Enqueue')
})

app.listen(port, () => {
    console.log("server running at port =", port)
})