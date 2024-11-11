import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default function (fastify: FastifyInstance) {
  fastify.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    return 'pong\n'
  })
}
