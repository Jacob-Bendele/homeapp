export interface MaintenanceRequest {
    id: string;
    propertyId: string;
    tenantId: string;
    description: string;
    status: MaintenanceType;
    createdAt: Date;
}

type MaintenanceType = 'pending' | 'in-progress' | 'completed';