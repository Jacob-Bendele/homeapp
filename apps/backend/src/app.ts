import Fastify from 'fastify'

export async function build(opts = {}) {
  const app = Fastify(opts)

  // Register plugins
  // await app.register(envPlugin)

  // Register routes
  app.register(userRoutes, { prefix: '/api/users' })

  return app
}
