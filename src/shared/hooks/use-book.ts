import { useState, useEffect } from 'react'
import { api } from '../api/axios'
import { IBook, IBookResponse } from '../types/book'
import {useLoading} from './use-loading'

interface UseBookReturn {
    book?: IBook
    error: string | null
    refetch: () => Promise<void>
}

interface UseBookProps {
    id: string | number;
}

export const useBook = ({id}:UseBookProps): UseBookReturn => {
    const [book, setBook] = useState<IBook>()
    const [error, setError] = useState<string | null>(null)
    const setLoading = useLoading((state) => state.setLoading)


    const fetchBook = async (bookId:string|number): Promise<void> => {
        try {
            setLoading(true)
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

    return { book,  error, refetch: ()=>fetchBook(id) }
}
