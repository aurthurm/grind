import _ from 'lodash'
import create from 'zustand'
import { IErrand } from '../models/errand'

interface IErrandState {
    messages: IErrand[]
    filtered: IErrand[]
    addMessage: (message: IErrand) => void
    removeMessage: (id: string) => void
    updateMessage: (message: IErrand) => void
    loadMessages: (messages: IErrand[]) => void
    filter: (options: any) => void
}

const useMessageBoardStore = create<IErrandState>()((set) => ({
    messages: [],
    filtered: [],
    loadMessages: (messages) => {
        set((state) => ({ 
            messages
        }));
    },
    addMessage: (message) => {
        set((state) => ({ 
            messages: [message, ...state.messages]
        }))
    },
    removeMessage: (id) => {
        set((state) => ({
            messages: state.messages.filter((t) => t._id !== id)
        }))
    },
    updateMessage: (message) => {
        set((state) => ({
            messages: state.messages.map((t) => t._id === message._id ? {...t, ...message} : t)
        }))
    },
    filter: (filters) => {
        set((state) => {
            let filtered = state.messages
            const keys = Object.keys(filters);
            return { filtered };
        })
    }
}));

export default useMessageBoardStore;