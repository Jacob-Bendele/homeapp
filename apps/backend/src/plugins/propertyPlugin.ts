import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import config from '../config/index.js';
import path from 'path';
import MockPropertyRepository from '../repositories/mockPropertyRepository.js';             
import DataLoader from '../utilities/dataLoader.js';
import PropertyRepository from '../repositories/propertyRepository.js';
import PropertyService from '../services/propertyService.js';

// declaration mergin as recommend by fastify docs fro typescript plugins
declare module 'fastify' {
    interface FastifyInstance {
        propertyService: PropertyService;
    }
}

export const createPropertyPlugin = (useRealRepository: boolean): FastifyPluginAsync => fp(async (fastify) => {
    const testPath = path.join(process.cwd(), config.mockData, 'properties.json')
    fastify.log.info(`config ${testPath}`)
    fastify.log.info(`cwd ${process.cwd()}`)
    const propertyRepository = useRealRepository ? new PropertyRepository([]) : new MockPropertyRepository(new DataLoader(testPath));
    const propertyService = new PropertyService(propertyRepository);

    fastify.decorate('propertyService', propertyService);
});