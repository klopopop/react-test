import { Routes, Route } from 'react-router-dom'
import { Layout } from '../widgets/layout'
import { BookDetails } from './book-details/index'
import {HomePage} from './home-page'

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="book" element={<HomePage />} />
                <Route path="book/:id" element={<BookDetails />} />
            </Route>
        </Routes>
    )
}