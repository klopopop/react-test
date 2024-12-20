import {BookCard} from '../../bookcard'
import { useBookList } from '../../../shared/hooks/use-book-list'
import { IBook } from '../../../shared/types/book'
import {useErrorStore} from '../../../shared/store/error-store'
export const BookGrid = () => {
    const { books,  error } = useBookList()
    const showError = useErrorStore(state => state.showError)

    if (error) showError('Произошла ошибка при загрузке книг')

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

