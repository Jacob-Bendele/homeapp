import type { ImageInfo } from "./imageInfo";
import type { Money } from "./money"


export interface Property {
    id: string;
    name: string;
    address: GeneralizedAddress;
    type: PropertyType;
    ownerIds: string[];
    images: ImageInfo[];
    maintenanceRequestIds?: string[];
    occupantIds?: string[];
    occupancyStatus: OccupancyStatus;
    rentalAmount?: Money;
    subUnits?: SubUnit[];

}

export interface SubUnit {
    id: string;
    type: SubUnitType;
    number: string;

}


export enum SubUnitType {
    Apartment,
    Office,
    RetailSpace
}

export interface PropertySnapshot {
    id: number;
    propertyId: number;
    snapshotDate: Date;
    rentalPrice: number;
    occupancyRate: number;
    grossRentalYield: number;
    capRate: number;
    cashFlow: number;
  }

export interface GeneralizedAddress {
    streetAddress?: string; // Full street address
    city?: string;          // City name
    state?: string;         // State or region
    postalCode?: string;    // Postal or ZIP code
    country?: string;       // Country name
    additionalInfo?: string; // Any extra information (e.g., apartment number)
}

type PropertyType = 'apartment' | 'house' | 'commercial';
type OccupancyStatus = 'occupied' | 'vacant' | 'under_maintenance'