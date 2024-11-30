import { useLoading } from '../hooks/use-loading'
import { Spinner } from '../ui/spinner'

export const WithLoading = ({ children }: { children: React.ReactNode }) => {
    const isLoading = useLoading((state) => state.isLoading)

    return (
        <>
            {isLoading && <Spinner />}
            {children}
        </>
    )
}
