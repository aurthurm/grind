import create from 'zustand'
import { IStamp } from '../models/stamp'

interface IStampState {
    stamps: IStamp[]
    openForm: boolean
    addStamp: (stamp: IStamp) => void
    removeStamp: (id: string) => void
    updateStamp: (stamp: IStamp) => void
    loadStamps: (stamps: IStamp[]) => void
    setOpenForm: (value: boolean) => void
}

const useStampStore = create<IStampState>()((set) => ({
    stamps: [],
    openForm: false,
    loadStamps: (stamps) => {
        set((state) => ({ 
            stamps
        }))
    },
    addStamp: (stamp) => {
        set((state) => ({ 
            stamps: [stamp, ...state.stamps]
        }))
    },
    removeStamp: (id) => {
        set((state) => ({
            stamps: state.stamps.filter((t) => t._id !== id)
        }))
    },
    updateStamp: (stamp) => {
        set((state) => ({
            stamps: state.stamps.map((t) => t._id === stamp._id ? {...t, ...stamp} : t)
        }))
    },
    setOpenForm:(value) => {
        set((state) => ({ 
            openForm: value
        }))
    },
}));

export default useStampStore;