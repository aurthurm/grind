import create from 'zustand'
import { IUser } from '../models/user'

interface IUserState {
    users: IUser[]
    openForm: boolean
    addUser: (user: IUser) => void
    removeUser: (id: string) => void
    updateUser: (user: IUser) => void
    loadUsers: (users: IUser[]) => void
    setOpenForm: (value: boolean) => void
}

const useUserStore = create<IUserState>()((set) => ({
    users: [],
    openForm: false,
    loadUsers: (users) => {
        set((state) => ({ 
            users
        }))
    },
    addUser: (user) => {
        set((state) => ({ 
            users: [user, ...state.users]
        }))
    },
    removeUser: (id) => {
        set((state) => ({
            users: state.users.filter((t) => t._id !== id)
        }))
    },
    updateUser: (user) => {
        set((state) => ({
            users: state.users.map((t) => t._id === user._id ? {...t, ...user} : t)
        }))
    },
    setOpenForm:(value) => {
        set((state) => ({ 
            openForm: value
        }))
    },
}));

export default useUserStore;