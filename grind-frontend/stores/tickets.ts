import _ from 'lodash'
import create from 'zustand'
import { IErrand } from '../models/errand'

interface IErrandState {
    tickets: IErrand[]
    filtered: IErrand[]
    addTicket: (ticket: IErrand) => void
    removeTicket: (id: string) => void
    updateTicket: (ticket: IErrand) => void
    loadTickets: (tickets: IErrand[]) => void
    filter: (options: any) => void
}

const useTicketStore = create<IErrandState>()((set) => ({
    tickets: [],
    filtered: [],
    loadTickets: (tickets) => {
        set((state) => ({ 
            tickets
        }));
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
    },
    filter: (filters) => {
        set((state) => {
            let filtered = state.tickets
            const keys = Object.keys(filters);
            if(keys.includes('label')) {
                filtered = state.tickets.filter((t)  => t.label?._id  === filters['label']);
            }
            if(keys.includes('priority')) {
                filtered = state.tickets.filter((t)  => t.priority  === filters['priority']);
            }
            if(keys.includes('assignee')) {
                filtered = state.tickets.filter((t)  => t.assignee?._id  === filters['assignee']);
            }
            if(keys.includes('other')) {
                if(filters['other'] === 'new-today') {
                    filtered = state.tickets.filter((t)  => {
                        return +(new Date(t.createdAt)) >= +(new Date(new Date().setHours(0,0,0,0)));
                    });
                }
                if(filters['other'] === 'due-today') {
                    filtered = state.tickets.filter((t)  => {
                        if(!!!t.endDate) return false;
                        return (
                            +(new Date(t.endDate)) <= +(new Date(new Date().setHours(24,0,0,0))) && 
                            +(new Date(t.endDate)) >= +(new Date(new Date().setHours(0,0,0,0)))
                        )
                    });
                }
                if(filters['other'] === 'over-due') {
                    filtered = state.tickets.filter((t)  => {
                        if(!t.endDate) return false;
                        return +(new Date()) >= +(new Date(t.endDate))
                    });
                }
            }
            return { filtered };
        })
    }
}));

export default useTicketStore;