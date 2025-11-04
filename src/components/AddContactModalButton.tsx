import { useState } from 'react';

interface ContactInfo {
    name: string;
    phone: string;
}

interface AddContactModalProps {
    contact: ContactInfo;
    onClose?: () => void;
}

export default function AddContactModal({ contact, onClose }: AddContactModalProps) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        if (onClose) {
            onClose();
        }
    };

    const handleAddContact = () => {
        // vCard con formato más estándar
        const vCard = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${contact.name}`,
            `TEL;TYPE=CELL:${contact.phone}`,
            'END:VCARD',
        ].join('\n');

        // Creamos un data URL para intentar abrir directamente el contacto
        const encoded = encodeURIComponent(vCard);
        const url = `data:text/vcard;charset=utf-8,${encoded}`;

        // En muchos móviles esto abre el diálogo nativo para añadir el contacto
        window.location.href = url;

        // Cerramos el modal y marcamos como visto
        handleClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleClose} // click en el fondo cierra
        >
            <div
                className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
                onClick={(e) => e.stopPropagation()} // evita que el click dentro cierre el modal
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                >
                    ×
                </button>

                <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        >
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
                        <p className="text-lg font-semibold text-gray-800">
                            {contact.name}
                        </p>
                        <p className="text-cyan-500 font-medium">
                            {contact.phone}
                        </p>
                    </div>

                    <button
                        onClick={handleAddContact}
                        className="bg-gradient-to-br from-cyan-500 to-cyan-400 border-none px-8 py-3 text-xl font-semibold rounded-full cursor-pointer shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 w-full mb-3"
                        style={{ color: '#004AAD' }}
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
