export const Header = () => {
    return (
        <header className="bg-zinc-600 text-white">
            <div className="mx-auto px-4 py-4 flex justify-start items-end">
                <h1 className="text-xl">e-буки :)</h1>
                <nav className="ml-5">
                    <a href="/" className="hover:text-gray-300 transition-colors">Главная</a>
                </nav>
            </div>
        </header>
    )
}
