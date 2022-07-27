import { CONTRACT_STATUS, CONTRACT_TYPE, IContract } from "./types.constants";

export let CONTRACTS: Array<IContract> = [
    {
        contractorName: 'Darlene Zamora',
        type: CONTRACT_TYPE.TRADITIONAL,
        startDate: 'Mar 4, 2021',
        amount: '200',
        status: CONTRACT_STATUS.ACTIVE
    },
    {
        contractorName: 'Darlene Robertson',
        type: CONTRACT_TYPE.TRADITIONAL,
        startDate: 'Mar 4, 2021',
        amount: '200',
        status: CONTRACT_STATUS.ACTIVE
    },
    {
        contractorName: 'Darlene Robertson',
        type: CONTRACT_TYPE.TRADITIONAL,
        startDate: 'Mar 4, 2021',
        amount: '200',
        status: CONTRACT_STATUS.SIGNATURE_PENDING
    },
]