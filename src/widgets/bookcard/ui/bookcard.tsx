import { Link } from 'react-router-dom'
import {BookCardProps} from '../../../entities/types'

export const BookCard = ({ id, title, author, coverUrl }: BookCardProps) => {
    return (
        <div className="animate-fadeInUp">
        <Link to = {`/book/${id}`}>
        <div className="group relative w-45 mx-auto">
            <div className="aspect-[2/3] rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2">
                <img
                    src={coverUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="mt-2 text-center">
                <h3 className="font-medium text-sm">{title}</h3>
                <p className="text-xs text-gray-600">{author}</p>
            </div>
        </div>
        </Link>
        </div>
    )
}
