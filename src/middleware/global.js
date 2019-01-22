import express from 'express'
import logger from 'morgan'

const setGlobalMiddleware = app => {
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
}

export default setGlobalMiddleware
