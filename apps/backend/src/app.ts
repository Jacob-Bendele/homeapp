import config from './config/index.js'
import Fastify from 'fastify'

import { createPropertyPlugin } from './plugins/propertyPlugin.js'

import propertyRoutes from './controllers/propertyController.js'

export async function build(opts = {}) {
  const app = Fastify(opts)
  const useRealRepository = config.isProduction;

  // Register plugins
  await app.register(createPropertyPlugin(useRealRepository));

  // Register routes
  app.register(propertyRoutes)

  return app
}
