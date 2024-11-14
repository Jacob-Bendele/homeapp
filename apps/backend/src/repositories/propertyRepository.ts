import { Property } from '@monorepo/types/property'
import { Repository } from '@monorepo/types/common'
import DataLoader from '../utilities/dataLoader.js';

export default class PropertyRepository implements Repository<Property> {
    private properties: Property[];

    constructor(initialData: Property[] | DataLoader) {
      if (Array.isArray(initialData)) {
        this.properties = initialData;
      } else {
        throw new Error('Invalid parameter');
      }
    }

    async getById(id: string): Promise<Property | null> {
      return this.properties.find(u => u.id === id) || null;
    }
  
    async create(Property: Omit<Property, 'id'>): Promise<Property> {
      const newProperty = { ...Property, id: Date.now().toString() };
      this.properties.push(newProperty);
      return newProperty;
    }

    async getAll(): Promise<Property[]> {
      return this.properties;
    }

    async update(Property: Property): Promise<Property> {
      return Property
    }

    async delete(id: string): Promise<boolean> {
      return true
    }
}