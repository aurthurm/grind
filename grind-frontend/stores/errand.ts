import create from 'zustand'
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
            errand
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