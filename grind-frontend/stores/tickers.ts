import create from 'zustand'
import { IErrand } from '../models/errand'

interface IErrandState {
    tickets: IErrand[]
    addTicket: (ticket: IErrand) => void
    removeTicket: (id: string) => void
    updateTicket: (ticket: IErrand) => void
    loadTickets: (tickets: IErrand[]) => void
}

const useTicketStore = create<IErrandState>()((set) => ({
    tickets: [],
    loadTickets: (tickets) => {
        set((state) => ({ 
            tickets
        }))
    },
    addTicket: (ticket) => {
        set((state) => ({ 
            tickets: [ticket, ...state.tickets]
        }))
    },
    removeTicket: (id) => {
        set((state) => ({
            tickets: state.tickets.filter((t) => t._id !== id)
        }))
    },
    updateTicket: (ticket) => {
        set((state) => ({
            tickets: state.tickets.map((t) => t._id === ticket._id ? {...t, ...ticket} : t)
        }))
    }
}));

export default useTicketStore;