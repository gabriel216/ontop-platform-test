export interface IContract {
    contractorName: string;
    type: string;
    startDate: string;
    amount: string;
    status: string;
}

export enum CONTRACT_TYPE {
    TRADITIONAL = 'Traditional'
}

export enum CONTRACT_STATUS {
    ACTIVE = 'Active',
    SIGNATURE_PENDING = 'Signature pending'
}