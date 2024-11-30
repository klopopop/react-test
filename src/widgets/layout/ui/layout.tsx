import { Header } from '../../header'
import { BookGrid } from '../../bookgrid'
export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 p-5">
                <BookGrid />
            </main>
        </div>
    )
}
