import {BookCard} from '../../bookcard'
import { FC } from 'react'
import { useBookList } from '../../../shared/hooks/use-book-list'
import { IBook } from '../../../shared/types/book'

export const BookGrid: FC = () => {
    const { books,  error } = useBookList()

    if (error) return <div>Ошибка: {error}</div>

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {books.map((book: IBook) => (
                <BookCard 
                    key={book.id}
                    id={book.id.toLocaleString()}
                    title={book.title}
                    author={book.author}
                    coverUrl={book.coverUrl}
                />
            ))}
        </div>
    )
}

