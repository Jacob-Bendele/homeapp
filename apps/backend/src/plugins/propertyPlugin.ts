// src/plugins/userPlugin.ts
import { FastifyPluginAsync } from 'fastify';
import config from '../config/index.js';
import MockPropertyRepository from '../repositories/mockPropertyRepository.js';             
import DataLoader from '../utilities/dataLoader.js';
import PropertyRepository from '../repositories/propertyRepository.js';
import PropertyService from '../services/propertyService.js';

export const createPropertyPlugin = (useRealRepository: boolean): FastifyPluginAsync => async (fastify) => {
    fastify.log.info("config ", config.mockData)
    const propertyRepository = useRealRepository ? new PropertyRepository([]) : new MockPropertyRepository(new DataLoader(`${config.mockData}properties.json`));
    const propertyService = new PropertyService(propertyRepository);

    fastify.decorate('propertyService', propertyService);
};