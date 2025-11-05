import { useState, useEffect } from 'react';

interface AddToHomeScreenModalProps {
    onClose?: () => void;
}

export default function AddToHomeScreenModal({ onClose }: AddToHomeScreenModalProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        setIsIOS(iOS);

        const standalone = window.matchMedia('(display-mode: standalone)').matches;
        setIsStandalone(standalone);

        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setTimeout(() => {
                e.prompt();
                e.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('Usuario aceptó instalar');
                    }
                    setDeferredPrompt(null);
                    handleClose();
                });
            }, 500);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        if (onClose) {
            onClose();
        }
    };

    const handleInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('Usuario aceptó instalar');
            }
            setDeferredPrompt(null);
            handleClose();
        }
    };

    if (!isOpen || isStandalone) return null;

    if (!isIOS && !deferredPrompt) {
        setTimeout(handleClose, 100);
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
        >
            <div
                className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
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
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-indigo-500 mb-4">
                        Agregar a Inicio
                    </h2>

                    {isIOS ? (
                        <div className="text-left space-y-4">
                            <p className="text-gray-700">
                                Para agregar esta página a tu pantalla de inicio:
                            </p>
                            <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="flex-shrink-0">1.</span>
                                    <span>Toca el botón de <strong>Compartir</strong>
                                        <svg className="inline-block w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                            <polyline points="16 6 12 2 8 6" />
                                            <line x1="12" y1="2" x2="12" y2="15" />
                                        </svg>
                                        en la parte inferior de Safari
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="flex-shrink-0">2.</span>
                                    <span>Desplázate y selecciona <strong>"Agregar a Inicio"</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="flex-shrink-0">3.</span>
                                    <span>Toca <strong>"Agregar"</strong> en la esquina superior derecha</span>
                                </li>
                            </ol>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-gray-700 mb-4">
                                Instala esta aplicación en tu dispositivo para acceso rápido
                            </p>
                            <button
                                onClick={handleInstall}
                                className="bg-gradient-to-br from-cyan-500 to-cyan-400 border-none px-8 py-3 text-xl font-semibold rounded-full cursor-pointer shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 w-full"
                                style={{ color: '#004AAD' }}
                            >
                                Instalar
                            </button>
                        </div>
                    )}

                    {isIOS && (
                        <button
                            onClick={handleClose}
                            className="bg-gradient-to-br from-cyan-500 to-cyan-400 border-none px-8 py-3 text-xl font-semibold rounded-full cursor-pointer shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 w-full mt-6"
                            style={{ color: '#004AAD' }}
                        >
                            Entendido
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
