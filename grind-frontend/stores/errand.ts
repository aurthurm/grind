import create from 'zustand'
import { toMomentDate } from '../lib/utils'
import { IErrand } from '../models/errand'

interface IErrandState {
    errand: IErrand
    setErrand: (errand: IErrand) => void
    updateErrand: (val: any) => void
    clear: () => void
}

const useErrandStore = create<IErrandState>()((set) => ({
    errand: {} as IErrand,
    setErrand: (errand) => {
        set((state) => ({ 
            errand: { 
                ...errand, 
                memberIds: errand.members?.map(t => (t as any)._id),
                stampIds: errand.stamps?.map(t => (t as any)._id),
                startDate: toMomentDate(errand?.startDate),
                endDate: toMomentDate(errand?.endDate),
            }
        }))
    },
    updateErrand: (values: any) => {
        set((state) => ({
            errand: { 
                ...state.errand, 
                ...values,
                startDate: toMomentDate(values?.startDate),
                endDate: toMomentDate(values?.endDate),
            }
        }))
    },
    clear: () => {
        set((state) => ({ 
            errand: {} as IErrand,
        }))
    },
}));

export default useErrandStore;