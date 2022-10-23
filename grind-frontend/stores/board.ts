import create from 'zustand'
import { toMomentDate } from '../lib/utils'
import { IBoard } from '../models/board'
import { IErrand } from '../models/errand'
import { IPoster } from '../models/poster'

interface IBoardState {
    board: IBoard | null
    setBoard: (board: IBoard) => void
    updateBoard: (val: any) => void
    clear: () => void
    addPoster: (poster: IPoster) => void
    setPosters: (posters: IPoster[]) => void
    addErrand: (errand: IErrand) => void
    setErrands: (poster: IPoster, errands: IErrand[]) => any
    switchErrandPoster: (errandIndex: number, fromPotser: string, toPotser: string) => void
    switchErrandPosition: (posterIdx: number, from: number, to: number) => void
    switchPosterPosition: (errands: IErrand[], from: IPoster, to: string) => void
}

const useBoardStore = create<IBoardState>()((set) => ({
    board: {} as IBoard,
    setBoard: (board) => {
        set((state) => ({ 
            board
        }))
    },
    updateBoard: (values: any) => {
        set((state) => ({
            board: { 
                ...state.board, 
                ...values,
            }
        }))
    },
    clear: () => {
        set((state) => ({ 
            board: null,
        }))
    },
    addPoster: (poster) => {
        set((state) => {
            let board = state.board;
            if(!!board?.posters) {
                board = { ...board!, posters: [...board.posters, poster]}
            } else {
                board = { ...board!, posters: [poster]}
            }
            return { 
                board
            }
        })
    },
    setPosters: (posters) => {
        set((state) => {
            return { 
                board: { ...state.board!, posters: [...posters]}
            }
        })
    },
    addErrand: (errand) => {
        set((state) => {
            let board = state.board;
            const index = board?.posters.findIndex(p => p._id === errand?.poster?._id) ?? -1;
            if(index > -1) {
                if(!!board!.posters[index].errands) {
                    board!.posters[index] = { ...board?.posters[index], errands: [...board?.posters[index].errands!, errand] } as IPoster
                } else {
                    board!.posters[index] = { ...board?.posters[index], errands: [errand] } as IPoster
                }
            }
            return { 
                board: { ...board } as IBoard
            }
        })
    },
    setErrands: (poster, errands) => {
        set((state) => {
            let board = state.board;
            const index = board?.posters.findIndex(p => p._id === poster?._id) ?? -1;
            if(index > -1) {
                board!.posters[index] = { ...board?.posters[index], errands: [...errands] } as IPoster
            }
            return { 
                board: { ...board } as IBoard
            }
        })
    },
    switchErrandPoster: (errandIndex, fromPotser, toPotser) => {
        set((state) => {
            const board = state.board;
            const fromPotserIndex = board?.posters.findIndex(p => p?._id === fromPotser) ?? -1;
            const toPotserIndex = board?.posters.findIndex(p => p?._id === toPotser) ?? -1;
            const errand = board?.posters![fromPotserIndex]?.errands![errandIndex];
            board!.posters[fromPotserIndex] = { ...board?.posters[fromPotserIndex], errands: board?.posters[fromPotserIndex]?.errands?.filter(e => e?._id !== errand?._id) } as IPoster
            board!.posters[toPotserIndex] = { ...board?.posters[toPotserIndex], errands: [errand!, ...board!.posters[toPotserIndex].errands!] } as IPoster
            console.log(errand, fromPotserIndex, toPotserIndex);
            return {
                board
            }
        })
    },
    switchErrandPosition: (posterIdx, fromIndex, toIndex) => {
        set((state) => { 
            const errands = [...state?.board?.posters[posterIdx].errands!];
            const errand = errands![fromIndex];
            //
            errands?.splice(fromIndex, 1);
            errands?.splice(toIndex, 0, errand);
            // 
            let board = state.board;
            board!.posters[posterIdx] = { ...board?.posters[posterIdx], errands: [...(errands ?? [])] } as IPoster
            return {
                board
            }
        })
    },
    switchPosterPosition: (errand, from, to) => {
        set((state) => ({ 
            ...state,
        }))
    }
}));

export default useBoardStore;