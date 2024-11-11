export interface Payment {
    id: string;
    leaseId: string;
    amount: number;
    date: Date;
    status: PaymentStatus;
}

type PaymentStatus =  'pending' | 'completed' | 'failed';