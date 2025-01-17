import { Property } from '@monorepo/types/property'
import { Repository } from '@monorepo/types/common'

export default class PropertyService {
    constructor(private propertyRepository: Repository<Property>) {
      this.propertyRepository = propertyRepository
    }
  
    async getAllProperites() {
      return this.propertyRepository.getAll()
    }
  
    async createProperty(propertyData: Property) {
      // Add business logic here
      return this.propertyRepository.create(propertyData)
    }
  
    // Add more methods as needed
  }
  