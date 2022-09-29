import create from 'zustand'
import { IErrand } from '../models/errand'
import { IUser } from '../models/user'

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
            errand: { ...errand, memberIds: errand.members?.map(t => (t as any)._id) }
        }))
    },
    updateErrand: (values: any) => {
        set((state) => ({
            errand: { ...state.errand, ...values }
        }))
    },
    clear: () => {
        set((state) => ({ 
            errand: {} as IErrand,
        }))
    },
}));

export default useErrandStore;