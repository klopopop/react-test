import {BookCard} from '../../bookcard'

const MOCK_BOOKS = [
    {
        id: '1',
        title: 'React: современные шаблоны для разработки приложений 2-е издание',
        author: 'Алекс Бенкс',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/5b/019078d2-faa3-7cd6-90fb-14720896e05b.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '2',
        title: 'ASP.NET Core. Разработка приложений',
        author: 'Пэкетт Дэвид, Саймон Тиммс, Чамберс Джеймс ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/6c/a8/01907883-4c2d-7ef2-a577-e535d8826ca8.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '3',
        title: 'Microsoft SQL Server 2022 ',
        author: 'Бондарь Александр ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/3e/018eed16-e81e-7eaf-a5e6-b5a3f1c7e03e.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '1',
        title: 'React: современные шаблоны для разработки приложений 2-е издание',
        author: 'Алекс Бенкс',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/5b/019078d2-faa3-7cd6-90fb-14720896e05b.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '2',
        title: 'ASP.NET Core. Разработка приложений',
        author: 'Пэкетт Дэвид, Саймон Тиммс, Чамберс Джеймс ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/6c/a8/01907883-4c2d-7ef2-a577-e535d8826ca8.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '3',
        title: 'Microsoft SQL Server 2022 ',
        author: 'Бондарь Александр ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/3e/018eed16-e81e-7eaf-a5e6-b5a3f1c7e03e.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '1',
        title: 'React: современные шаблоны для разработки приложений 2-е издание',
        author: 'Алекс Бенкс',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/5b/019078d2-faa3-7cd6-90fb-14720896e05b.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '2',
        title: 'ASP.NET Core. Разработка приложений',
        author: 'Пэкетт Дэвид, Саймон Тиммс, Чамберс Джеймс ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/6c/a8/01907883-4c2d-7ef2-a577-e535d8826ca8.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '3',
        title: 'Microsoft SQL Server 2022 ',
        author: 'Бондарь Александр ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/3e/018eed16-e81e-7eaf-a5e6-b5a3f1c7e03e.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '1',
        title: 'React: современные шаблоны для разработки приложений 2-е издание',
        author: 'Алекс Бенкс',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/5b/019078d2-faa3-7cd6-90fb-14720896e05b.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '2',
        title: 'ASP.NET Core. Разработка приложений',
        author: 'Пэкетт Дэвид, Саймон Тиммс, Чамберс Джеймс ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/6c/a8/01907883-4c2d-7ef2-a577-e535d8826ca8.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '3',
        title: 'Microsoft SQL Server 2022 ',
        author: 'Бондарь Александр ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/3e/018eed16-e81e-7eaf-a5e6-b5a3f1c7e03e.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '1',
        title: 'React: современные шаблоны для разработки приложений 2-е издание',
        author: 'Алекс Бенкс',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/5b/019078d2-faa3-7cd6-90fb-14720896e05b.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '2',
        title: 'ASP.NET Core. Разработка приложений',
        author: 'Пэкетт Дэвид, Саймон Тиммс, Чамберс Джеймс ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/6c/a8/01907883-4c2d-7ef2-a577-e535d8826ca8.jpg?width=608&height=867&fit=bounds'
    },
    {
        id: '3',
        title: 'Microsoft SQL Server 2022 ',
        author: 'Бондарь Александр ',
        coverUrl: 'https://content.img-gorod.ru/pim/products/images/e0/3e/018eed16-e81e-7eaf-a5e6-b5a3f1c7e03e.jpg?width=608&height=867&fit=bounds'
    }
]

export const BookGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {MOCK_BOOKS.map(book => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    coverUrl={book.coverUrl}
                />
            ))}
        </div>
    )
}

