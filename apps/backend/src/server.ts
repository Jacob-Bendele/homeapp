import fastify, { FastifyInstance } from 'fastify'
import { build } from './app.js'

const server: FastifyInstance = await build({
  logger: {
    level: 'info',
    // transport: process.env.NODE_ENV === 'development'
    //   ? { target: 'pino-pretty' }
    //   : undefined
  }
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
