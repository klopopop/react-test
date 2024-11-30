interface ErrorModalProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}

export const ErrorModal = ({ isOpen, message, onClose }:ErrorModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 animate-fadeInUp">
                <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-2 rounded-full">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold ml-2">Ошибка</h3>
                </div>
                <p className="text-gray-600 mb-6">{message}</p>
                <button 
                    onClick={onClose}
                    className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};
