export interface Lease {
    id: string;
    tenantId: string;
    propertyId: string;
    startDate: Date;
    endDate: Date;
    rentAmount: number;
}
  