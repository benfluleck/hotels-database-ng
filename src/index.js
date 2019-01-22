import express from 'express'
import setGlobalMiddleware from './middleware/global'

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

setGlobalMiddleware(app)

app.all('*', (request, response) =>
  response.send({
    message: 'Welcome to the API!!!!'
  })
)

/* eslint no-console:0 */
app.listen(PORT, () => console.log(`Server is live on port ${PORT}`))
