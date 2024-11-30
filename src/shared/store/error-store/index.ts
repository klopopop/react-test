import {create} from 'zustand'

interface ErrorStore {
    isOpen: boolean
    message: string
    details: string
    showError: (message: string) => void
    hideError: () => void
}

export const useErrorStore = create<ErrorStore>((set) => ({
    isOpen: false,
    message: '',
    details: '',
    showError: (message) => set({isOpen: true, message}),
    hideError: () => set({isOpen: false, message: ''})
}))
