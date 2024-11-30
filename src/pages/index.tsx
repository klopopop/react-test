import { Routes, Route } from 'react-router-dom'
import { BookDetails } from './book-details/index'
import {HomePage} from './home-page'
import {ManagementBookListPage} from './management/book-list'
export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="book" element={<HomePage />} />
            <Route path="book/:id" element={<BookDetails />} />
            <Route path="management" element={<ManagementBookListPage />} />
        </Routes>
    )
}