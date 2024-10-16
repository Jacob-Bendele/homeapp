export interface User {
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string, 
    role: Role
}

type Role = 'owner' | 'manager' | 'tenant'