import create from 'zustand'
import { IBoard } from '../models/board'
import { IScheme } from '../models/scheme'

interface ISchemeState {
    schemes: IScheme[]
    scheme: IScheme | null
    openForm: boolean
    addScheme: (scheme: IScheme) => void
    setScheme: (scheme: IScheme| null) => void
    removeScheme: (id: string) => void
    updateScheme: (scheme: IScheme) => void
    loadSchemes: (schemes: IScheme[]) => void
    setOpenForm: (value: boolean) => void
    addBoard: (board: IBoard) => void
}

const useSchemeStore = create<ISchemeState>()((set) => ({
    schemes: [],
    scheme: null,
    openForm: false,
    loadSchemes: (schemes) => {
        set((state) => ({ 
            schemes
        }))
    },
    addScheme: (scheme) => {
        set((state) => ({ 
            schemes: [scheme, ...state.schemes]
        }))
    },
    setScheme: (scheme) => {
        set((state) => ({ 
            scheme,
            openForm: true
        }))
    },
    removeScheme: (id) => {
        set((state) => ({
            schemes: state.schemes.filter((t) => t._id !== id)
        }))
    },
    updateScheme: (scheme) => {
        set((state) => ({
            schemes: state.schemes.map((t) => t._id === scheme._id ? {...t, ...scheme} : t)
        }))
    },
    setOpenForm:(value) => {
        set((state) => ({ 
            openForm: value
        }))
    },
    addBoard: (board) => {
        set((state) => {
            let scheme = state.scheme;
            if(!!scheme?.boards) {
                scheme.boards.push(board);
            } else {
                scheme = { ...scheme!, boards: [board]}
            }
            return { 
                scheme
            }
        })
    },
}));

export default useSchemeStore;