import { Header } from '../../header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 p-5">
                <Outlet />
            </main>
        </div>
    )
}
