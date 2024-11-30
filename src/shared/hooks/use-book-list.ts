import { useState, useEffect } from 'react'
import { api } from '../api/axios'
import { IBook, IBookListResponse } from '../types/book'

interface UseBookListReturn {
    books: IBook[]
    loading: boolean
    error: string | null
    refetch: () => Promise<void>
}

export const useBookList = (): UseBookListReturn => {
    const [books, setBooks] = useState<IBook[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchBooks = async (): Promise<void> => {
        try {
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

    return { books, loading, error, refetch: fetchBooks }
}
