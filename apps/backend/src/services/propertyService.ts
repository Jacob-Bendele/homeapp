import { PropertyRepository, Property } from "@monorepo/types"
export default class PropertyService {
    constructor(private propertyRepository: PropertyRepository) {
      this.propertyRepository = propertyRepository
    }
  
    async getAllpropertys() {
      return this.propertyRepository.getProperties()
    }
  
    async createproperty(propertyData: Property) {
      // Add business logic here
      return this.propertyRepository.create(propertyData)
    }
  
    // Add more methods as needed
  }
  