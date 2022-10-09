import _ from 'lodash'
import create from 'zustand'
import { IErrand } from '../models/errand'

interface IErrandState {
    engagements: IErrand[]
    filtered: IErrand[]
    addEngagement: (engagement: IErrand) => void
    removeEngagement: (id: string) => void
    updateEngagement: (engagement: IErrand) => void
    loadEngagements: (engagements: IErrand[]) => void
    filter: (options: any) => void
}

const useEngagementStore = create<IErrandState>()((set) => ({
    engagements: [],
    filtered: [],
    loadEngagements: (engagements) => {
        set((state) => ({ 
            engagements
        }));
    },
    addEngagement: (engagement) => {
        set((state) => ({ 
            engagements: [engagement, ...state.engagements]
        }))
    },
    removeEngagement: (id) => {
        set((state) => ({
            engagements: state.engagements.filter((t) => t._id !== id)
        }))
    },
    updateEngagement: (engagement) => {
        set((state) => ({
            engagements: state.engagements.map((t) => t._id === engagement._id ? {...t, ...engagement} : t)
        }))
    },
    filter: (filters) => {
        set((state) => {
            let filtered = state.engagements
            const keys = Object.keys(filters);
            return { filtered };
        })
    }
}));

export default useEngagementStore;