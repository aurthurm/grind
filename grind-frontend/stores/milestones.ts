import create from 'zustand'
import { IMilestone } from '../models/milestone'

interface IMilestoneState {
    milestones: IMilestone[]
    milestone: IMilestone | null
    openForm: boolean
    addMilestone: (milestone: IMilestone) => void
    setMilestone: (milestone: IMilestone| null) => void
    removeMilestone: (id: string) => void
    updateMilestone: (milestone: IMilestone) => void
    loadMilestones: (milestones: IMilestone[]) => void
    setOpenForm: (value: boolean) => void
}

const useMilestoneStore = create<IMilestoneState>()((set) => ({
    milestones: [],
    milestone: null,
    openForm: false,
    loadMilestones: (milestones) => {
        set((state) => ({ 
            milestones
        }))
    },
    addMilestone: (milestone) => {
        set((state) => ({ 
            milestones: [milestone, ...state.milestones]
        }))
    },
    setMilestone: (milestone) => {
        set((state) => ({ 
            milestone,
            openForm: true
        }))
    },
    removeMilestone: (id) => {
        set((state) => ({
            milestones: state.milestones.filter((t) => t._id !== id)
        }))
    },
    updateMilestone: (milestone) => {
        set((state) => ({
            milestones: state.milestones.map((t) => t._id === milestone._id ? {...t, ...milestone} : t)
        }))
    },
    setOpenForm:(value) => {
        set((state) => ({ 
            openForm: value
        }))
    },
}));

export default useMilestoneStore;