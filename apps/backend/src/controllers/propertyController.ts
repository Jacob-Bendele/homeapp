import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import PropertyService from '../services/propertyService.js'

export default async function (fastify: FastifyInstance) {
  fastify.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    return 'pong\n'
  })

  fastify.get('/properties', async (request: FastifyRequest, reply: FastifyReply) => {
    const properties = await fastify.propertyService.getAllProperites()
    return properties
  })
}
