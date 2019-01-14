import express from 'express'
import logger from 'morgan'

const app = express()
const PORT = process.env.PORT || 3000

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all('*', (request, response) =>
  response.send({
    message: 'Welcome to the API!!!!'
  })
)

/* eslint no-console:0 */
app.listen(PORT, () => console.log(`Server is live on port ${PORT}`))
