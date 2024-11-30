import { useState, useEffect } from 'react'
import { api } from '../api/axios'
import { IBook, IBookResponse } from '../types/book'

interface UseBookReturn {
    books: IBook[]
    loading: boolean
    error: string | null
    refetch: () => Promise<void>
}

export const useBooks = (): UseBookReturn => {
    const [books, setBooks] = useState<IBook[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchBooks = async (): Promise<void> => {
        try {
            const response = await api.get<IBookResponse>('/books')
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
