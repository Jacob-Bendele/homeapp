import { Property, Repository } from '@monorepo/types'
export class MockPropertyRepository implements Repository<Property> {
    constructor(private properties: Property[]) {
      this.properties = properties;
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