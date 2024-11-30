import { useState, useEffect } from 'react'
import { api } from '../api/axios'
import { IBook, IBookListResponse } from '../types/book'
import {useLoading} from './use-loading'

interface UseBookListReturn {
    books: IBook[]
    error: string | null
    refetch: () => Promise<void>
}

export const useBookList = (): UseBookListReturn => {
    const [books, setBooks] = useState<IBook[]>([])
    const [error, setError] = useState<string | null>(null)
    const setLoading = useLoading((state) => state.setLoading)

    const fetchBooks = async (): Promise<void> => {
        try {
            setLoading(true)
            const response = await api.get<IBookListResponse>('/books')
            setBooks(response.data.payload)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error occurred')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return { books, error, refetch: fetchBooks }
}
