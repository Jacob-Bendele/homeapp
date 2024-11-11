import type { ImageInfo } from "./imageInfo";
import type { Money } from "../payment/money"


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
    streetAddress1: string; // Full street address
    streetAddress2?: string; // Full street address
    city: string;
    postalCode: string;
    country: string;
    state?: string;
    province?: string;
    region?: string;
    county?: string;
    district?: string;
    buildingName?: string;
    buildingNumber?: string;
    floor?: string;
    apartment?: string;
    type?: 'residential' | 'business' | 'poBox';
    additionalInfo?: string; // Any extra information (e.g., apartment number)
}

type PropertyType = 'apartment' | 'house' | 'commercial';
type OccupancyStatus = 'occupied' | 'vacant' | 'under_maintenance'