import {FC} from "react";
import {useBook} from '../../../shared/hooks/use-book'
import { useParams } from 'react-router-dom'

export const BookDetails: FC = () => {
    const { id } = useParams<{ id: string }>()

    if (!id) return <div>ID not found</div>
    
    const { book, error } = useBook({ id })

    if (error) return <div>Ошибка: {error}</div>

    if (!book) return <div>Book not found</div>
    
    return (
        <div  className="animate-fadeInUp">
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex gap-8">
                {/* Левая колонка с обложкой */}
                <div className="w-1/3">
                    <div className="aspect-[2/3] rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={book.coverUrl}
                            alt="Book cover"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Правая колонка с информацией */}
                <div className="w-2/3">
                    <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                    <div className="space-y-4">
                        <p className="text-xl text-gray-600">Автор: {book.author}</p>
                        <p className="text-gray-700">Жанр: </p>
                        <p className="text-gray-700">Год издания:</p>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-2">Описание</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Подробное описание книги...
                            </p>
                        </div>
                        <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            Читать
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
