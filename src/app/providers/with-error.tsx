import { ErrorModal } from '../../shared/ui/error-modal/'
import { useErrorStore } from '../../shared/store/error-store'

export const WithError = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, message, hideError } = useErrorStore()

    return (
        <>
            {children}
            <ErrorModal
                isOpen={isOpen}
                message={message}
                onClose={hideError}
            />
        </>
    )
}
