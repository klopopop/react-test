import { NavLink } from 'react-router-dom'

export const Header = () => {
    const activeClassName = "text-yellow-300 transition-colors"
    const inactiveClassName = "hover:text-gray-300 transition-colors"

    return (
        <header className="bg-zinc-600 text-white">
            <div className="mx-auto px-4 py-4 flex justify-start items-end">
                <h1 className="text-xl">e-буки :)</h1>
                <nav className="ml-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : inactiveClassName
                        }
                    >
                        Главная
                    </NavLink>
                </nav>
                <nav className="ml-5">
                    <NavLink
                        to="/management"
                        className={({ isActive }) =>
                            isActive ? activeClassName : inactiveClassName
                        }
                    >
                        Управление книгами
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
