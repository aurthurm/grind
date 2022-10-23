import create from 'zustand'
import { ILabel } from '../models/label'

interface ILabelState {
    labels: ILabel[]
    openForm: boolean
    addLabel: (label: ILabel) => void
    removeLabel: (id: string) => void
    updateLabel: (label: ILabel) => void
    loadLabels: (labels: ILabel[]) => void
    setOpenForm: (value: boolean) => void
}

const useLabelStore = create<ILabelState>()((set) => ({
    labels: [],
    openForm: false,
    loadLabels: (labels) => {
        set((state) => ({ 
            labels
        }))
    },
    addLabel: (label) => {
        set((state) => ({ 
            labels: [label, ...state.labels]
        }))
    },
    removeLabel: (id) => {
        set((state) => ({
            labels: state.labels.filter((t) => t._id !== id)
        }))
    },
    updateLabel: (label) => {
        set((state) => ({
            labels: state.labels.map((t) => t._id === label._id ? {...t, ...label} : t)
        }))
    },
    setOpenForm:(value) => {
        set((state) => ({ 
            openForm: value
        }))
    },
}));

export default useLabelStore;