import { useState, useEffect } from 'react';

export default function AddContactModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenModal = localStorage.getItem('hasSeenContactModal');
        if (!hasSeenModal) {
            setIsOpen(true);
        }
    }, []);

    const handleAddContact = () => {
        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Hilda Palacios
TEL:+57 315 8346517
END:VCARD`;

        const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Hilda_Palacios.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            window.URL.revokeObjectURL(url);
        }, 100);

        localStorage.setItem('hasSeenContactModal', 'true');
        setIsOpen(false);
    };

    const handleClose = () => {
        localStorage.setItem('hasSeenContactModal', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                >
                    ×
                </button>

                <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <line x1="19" y1="8" x2="19" y2="14" />
                            <line x1="22" y1="11" x2="16" y2="11" />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-indigo-500 mb-2">
                        Añadir Contacto
                    </h2>

                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <p className="text-lg font-semibold text-gray-800">Hilda Palacios</p>
                        <p className="text-cyan-500 font-medium">+57 315 8346517</p>
                    </div>

                    <button
                        onClick={handleAddContact}
                        className="bg-gradient-to-br from-cyan-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold w-full mb-3 hover:shadow-lg transition-all duration-300"
                        style={{ color: '#9D6FEB' }}
                    >
                        Añadir Contacto
                    </button>

                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                        Continuar sin añadir
                    </button>
                </div>
            </div>
        </div>
    );
}
