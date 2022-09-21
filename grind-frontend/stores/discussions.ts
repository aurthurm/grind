import create from 'zustand'
import { IErrandDiscussion } from '../models/errand-discussion'

interface IErrandDiscussionState {
    discussions: IErrandDiscussion[]
    openForm: boolean
    addDiscussion: (discussion: IErrandDiscussion) => void
    removeDiscussion: (id: string) => void
    updateDiscussion: (discussion: IErrandDiscussion) => void
    loadDiscussions: (discussions: IErrandDiscussion[]) => void
    setOpenForm: (value: boolean) => void
}

const useDiscussionStore = create<IErrandDiscussionState>()((set) => ({
    discussions: [],
    openForm: false,
    loadDiscussions: (discussions) => {
        set((state) => ({ 
            discussions
        }))
    },
    addDiscussion: (discussion) => {
        set((state) => ({ 
            discussions: [discussion, ...state.discussions]
        }))
    },
    removeDiscussion: (id) => {
        set((state) => ({
            discussions: state.discussions.filter((t) => t._id !== id)
        }))
    },
    updateDiscussion: (discussion) => {
        set((state) => ({
            discussions: state.discussions.map((t) => t._id === discussion._id ? {...t, ...discussion} : t)
        }))
    },
    setOpenForm:(value) => {
        set((state) => ({ 
            openForm: value
        }))
    },
}));

export default useDiscussionStore;