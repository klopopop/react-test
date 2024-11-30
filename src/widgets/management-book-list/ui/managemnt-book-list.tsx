import {useBookList} from '../../../shared/hooks/use-book-list'
import {IBook} from '../../../shared/types/book'
import {useState} from 'react';
import {ConfirmModal} from '../../../shared/ui/confitm-modal';

export const ManagementBookList = () => {
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const {books, error} = useBookList()
    const handleEdit = (id: number) => {
        console.log(id);
    }

    const handleDeleteClick = (id: number) => {
        setDeleteId(id);
    };

    const handleConfirmDelete = () => {
        if (deleteId) {
            // Логика удаления
            console.log('Удаление книги с ID:', deleteId);
        }
        setDeleteId(null);
    };

    if (error) return <div>Ошибка: {error}</div>

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book: IBook) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {book.title}
                            </th>
                            <td className="px-6 py-4">
                                {book.author}
                            </td>
                            <td className="px-6 py-4">

                            </td>
                            <td className="px-6 py-4 flex gap-2">
                                <button
                                    onClick={() => handleEdit(book.id)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(book.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

            <ConfirmModal
                isOpen={deleteId !== null}
                onClose={() => setDeleteId(null)}
                onConfirm={handleConfirmDelete}
                title="Подтверждение удаления"
                message="Вы уверены, что хотите удалить эту книгу?"
            />
        </>
    );
}


