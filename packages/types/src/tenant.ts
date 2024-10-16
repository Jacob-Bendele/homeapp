export interface Tenant {
    id: string;
    userId: string; // Reference to the User associated with this tenant
    propertyId: string; // Reference to the Property they're renting
    leaseStartDate: Date;
    leaseEndDate: Date;
    // Add other tenant-specific information
}
  