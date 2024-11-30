export const BookDetails = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex gap-8">
                {/* Левая колонка с обложкой */}
                <div className="w-1/3">
                    <div className="aspect-[2/3] rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://picsum.photos/400/600"
                            alt="Book cover"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Правая колонка с информацией */}
                <div className="w-2/3">
                    <h1 className="text-3xl font-bold mb-4">Название книги</h1>
                    <div className="space-y-4">
                        <p className="text-xl text-gray-600">Автор: Имя Автора</p>
                        <p className="text-gray-700">Жанр: Фантастика</p>
                        <p className="text-gray-700">Год издания: 2023</p>
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
    )
}
