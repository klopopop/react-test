import { useState, useEffect } from 'react'
import { api } from '../api/axios'
import { IBook, IBookResponse } from '../types/book'

interface UseBookReturn {
    book?: IBook
    loading: boolean
    error: string | null
    refetch: () => Promise<void>
}

interface UseBookProps {
    id: string | number;
}

export const useBook = ({id}:UseBookProps): UseBookReturn => {
    const [book, setBook] = useState<IBook>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchBook = async (bookId:string|number): Promise<void> => {
        try {
            const response = await api.get<IBookResponse>(`/books/${bookId}`)
            setBook(response.data.payload)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error occurred')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBook(id)
    }, [id])

    return { book, loading, error, refetch: ()=>fetchBook(id) }
}
