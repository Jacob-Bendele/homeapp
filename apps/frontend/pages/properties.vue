<script setup lang="ts">
  import { ref } from 'vue';
  import type { ListViewItem, Property } from '@monorepo/types'
  import { SubUnitType } from '@monorepo/types';
  definePageMeta({
    layout: 'manager'  
  }) 
  // Some form of v-if that conditionally shows page type
  // and empty state.
  
  const mockProperties: Property[] = [
  {
    id: "prop1",
    name: "Sunset Villa",
    address: {
      streetAddress: "123 Ocean Drive",
      city: "Malibu",
      state: "California",
      postalCode: "90265",
      country: "USA"
    },
    type: "house",
    ownerIds: ["owner1"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        caption: "Beachfront luxury home"
      }
    ],
    occupancyStatus: "occupied",
    rentalAmount: { amount: 5000, currency: "USD" }
  },
  {
    id: "prop2",
    name: "Downtown Loft",
    address: {
      streetAddress: "456 Main St",
      city: "New York",
      state: "New York",
      postalCode: "10001",
      country: "USA"
    },
    type: "apartment",
    ownerIds: ["owner2"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        caption: "Modern city apartment"
      }
    ],
    occupancyStatus: "vacant",
    rentalAmount: { amount: 3000, currency: "USD" }
  },
  {
    id: "prop3",
    name: "Green Acres Farm",
    address: {
      streetAddress: "789 Country Road",
      city: "Austin",
      state: "Texas",
      postalCode: "73301",
      country: "USA"
    },
    type: "house",
    ownerIds: ["owner3"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5",
        caption: "Rustic farmhouse"
      }
    ],
    occupancyStatus: "occupied",
    rentalAmount: { amount: 2500, currency: "USD" }
  },
  {
    id: "prop4",
    name: "Skyline Office Tower",
    address: {
      streetAddress: "101 Business Ave",
      city: "Chicago",
      state: "Illinois",
      postalCode: "60601",
      country: "USA"
    },
    type: "commercial",
    ownerIds: ["owner4", "owner5"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        caption: "Modern office building"
      }
    ],
    occupancyStatus: "occupied",
    subUnits: [
      { id: "su1", type: SubUnitType.Office, number: "101" },
      { id: "su2", type: SubUnitType.Office, number: "102" }
    ]
  },
  {
    id: "prop5",
    name: "Cozy Mountain Cabin",
    address: {
      streetAddress: "222 Pine Lane",
      city: "Aspen",
      state: "Colorado",
      postalCode: "81611",
      country: "USA"
    },
    type: "house",
    ownerIds: ["owner6"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        caption: "Snowy mountain retreat"
      }
    ],
    occupancyStatus: "vacant",
    rentalAmount: { amount: 300, currency: "USD" }
  },
  {
    id: "prop6",
    name: "Seaside Apartments",
    address: {
      streetAddress: "333 Coastal Highway",
      city: "Miami",
      state: "Florida",
      postalCode: "33101",
      country: "USA"
    },
    type: "apartment",
    ownerIds: ["owner7"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        caption: "Beachfront apartment complex"
      }
    ],
    occupancyStatus: "occupied",
    subUnits: [
      { id: "su3", type: SubUnitType.Apartment, number: "A1" },
      { id: "su4", type: SubUnitType.Apartment, number: "A2" }
    ]
  },
  {
    id: "prop7",
    name: "Tech Hub Offices",
    address: {
      streetAddress: "444 Innovation Blvd",
      city: "San Francisco",
      state: "California",
      postalCode: "94105",
      country: "USA"
    },
    type: "commercial",
    ownerIds: ["owner8"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        caption: "Modern tech office space"
      }
    ],
    occupancyStatus: "under_maintenance",
    subUnits: [
      { id: "su5", type: SubUnitType.Office, number: "201" },
      { id: "su6", type: SubUnitType.Office, number: "202" }
    ]
  },
  {
    id: "prop8",
    name: "Riverside Cottage",
    address: {
      streetAddress: "555 River Road",
      city: "Portland",
      state: "Oregon",
      postalCode: "97201",
      country: "USA"
    },
    type: "house",
    ownerIds: ["owner9"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
        caption: "Charming riverside home"
      }
    ],
    occupancyStatus: "occupied",
    rentalAmount: { amount: 2200, currency: "USD" }
  },
  {
    id: "prop9",
    name: "Urban Micro Apartments",
    address: {
      streetAddress: "666 Compact Lane",
      city: "Seattle",
      state: "Washington",
      postalCode: "98101",
      country: "USA"
    },
    type: "apartment",
    ownerIds: ["owner10"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        caption: "Efficient micro living spaces"
      }
    ],
    occupancyStatus: "occupied",
    subUnits: [
      { id: "su7", type: SubUnitType.Apartment, number: "M1" },
      { id: "su8", type: SubUnitType.Apartment, number: "M2" }
    ]
  },
  {
    id: "prop10",
    name: "Historic Downtown Shops",
    address: {
      streetAddress: "777 Heritage Street",
      city: "Boston",
      state: "Massachusetts",
      postalCode: "02108",
      country: "USA"
    },
    type: "commercial",
    ownerIds: ["owner11", "owner12"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
        caption: "Quaint shopping district"
      }
    ],
    occupancyStatus: "occupied",
    subUnits: [
      { id: "su9", type: SubUnitType.RetailSpace, number: "R1" },
      { id: "su10", type: SubUnitType.RetailSpace, number: "R2" }
    ]
  }
];

const parsed = Array.from(mockProperties, (item, index) => ({id: index, data: item}))
const items = ref<ListViewItem<Property>[]>(parsed)


</script>

<template>
  <GridList :items="items">
    <template v-slot="slotProps">
      <PropertyCard :property="slotProps.item.data"></PropertyCard>
    </template>
  </GridList>
</template>

<style scoped></style>
