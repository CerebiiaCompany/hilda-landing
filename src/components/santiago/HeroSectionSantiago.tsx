import { useState, useEffect } from 'react';
import AddContactModal from '../AddContactModalButton';

export default function HeroSection() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true);
    }, []);

    const handleAddContact = () => {
        setShowModal(true);
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col justify-between p-12 md:p-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-16 z-10 max-w-7xl w-full mx-auto">
                <div className="flex-1 flex justify-center items-center relative order-1 md:order-2 min-h-[400px] md:min-h-[500px] z-10 overflow-visible">
                    <img src={`${import.meta.env.BASE_URL}fondo-Santiago-castaneda.png`} alt="Fondo" className="md:hidden w-[300px] h-auto absolute top-[46%] left-[56%] -translate-x-1/2 -translate-y-1/2 z-[5]" style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }} />
                    <img src={`${import.meta.env.BASE_URL}fondo-Santiago-castaneda.png`} alt="Fondo" className="hidden md:block w-[420px] h-auto absolute top-[48%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-[5]" style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }} />
                    <img src={`${import.meta.env.BASE_URL}santiago-castaneda.png`} alt="Santiago Castañeda" className="w-[280px] md:w-[400px] h-auto relative z-[15] left-[6%] md:left-[10%]" style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }} />
                </div>

                <div className="text-white flex-1 order-2 md:order-1 text-center md:text-left mt-4 md:mt-0">
                    <p className="text-sm mb-4 text-white opacity-90"><span style={{ color: '#004AAD' }}>Gerente General en BPO Happify </span> | Optimizar operaciones desde la productividad con bienestar.
                    </p>
                    <h1 className="text-5xl md:text-6xl font-Codec mb-4 leading-tight">Santiago Castañeda Lopera</h1>

                    <p className="text-lg leading-relaxed max-w-xl opacity-95 mx-auto md:mx-0">
                        Santiago Castañeda lidera la operación diaria de BPO Happify desde una premisa simple y poderosa: no se gestionan números, se potencian personas. Como Gerente General, combina rigor operativo y sensibilidad humana para convertir cada interacción en una oportunidad de fidelización. Su enfoque práctico une métricas (FCR, CSAT, AHT) con hábitos culturales que elevan la productividad, como la famosa “sonrisa telefónica”, micro-pausas y reconocimientos inmediatos, porque sabe que la eficiencia nace de equipos motivados. (Basado en enfoque y estilo de comunicación del equipo).
                    </p>
                </div>
            </div>

            <div className="text-center text-white text-lg z-10 opacity-90 flex flex-col items-center w-full md:w-2/5 mx-auto">
                <p className="pt-8 md:pt-12">Santiago ha representado a Happify en espacios sectoriales y comparte con claridad casos de éxito sobre cómo integrar RPA, chatbots y analítica para liberar a los agentes de lo repetitivo y potenciar lo humano.
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-6 w-full md:w-auto">
                    <button
                        onClick={handleAddContact}
                        className="bg-gradient-to-br from-cyan-500 to-cyan-400 border-none px-8 md:px-16 py-3 text-xl font-semibold rounded-full cursor-pointer shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 w-full md:w-auto whitespace-nowrap"
                        style={{ color: '#004AAD' }}
                    >
                        Añadir Contacto
                    </button>
                    <a href="https://www.linkedin.com/in/santiago-casta%C3%B1eda-894118267/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                        <button className="bg-gradient-to-br from-cyan-500 to-cyan-400 border-none px-8 md:px-16 py-3 text-xl font-semibold rounded-full cursor-pointer shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 w-full md:w-auto whitespace-nowrap" style={{ color: '#004AAD' }}>
                            LinkedIn
                        </button>
                    </a>
                </div>
            </div>

            {showModal && (
                <AddContactModal
                    contact={{
                        name: 'Santiago Castañeda',
                        phone: '+57 318 2574616',
                    }}
                    onClose={() => setShowModal(false)}
                />
            )}

            <img src={`${import.meta.env.BASE_URL}cuadro1.png`} alt="" className="absolute w-24 md:w-32 h-24 md:h-32 top-[5%] md:top-[8%] left-[5%] md:left-[54%] z-0 animate-float opacity-80" />
            <img src={`${import.meta.env.BASE_URL}cuadro2.png`} alt="" className="absolute w-24 md:w-32 h-24 md:h-32 top-[3%] md:top-[6%] right-0 md:right-0 z-0 animate-float animation-delay-500 opacity-80" />
            <img src={`${import.meta.env.BASE_URL}cuadro3.png`} alt="" className="absolute w-20 md:w-28 h-20 md:h-28 top-[25%] md:top-1/2 right-[2%] md:right-[5%] z-0 animate-float animation-delay-1000 opacity-80" />
            <img src={`${import.meta.env.BASE_URL}cuadro4.png`} alt="" className="absolute w-16 md:w-28 h-16 md:h-28 top-[12%] md:top-[25%] left-[60%] md:left-[58%] z-0 animate-float animation-delay-1500 opacity-80" />
            <img src={`${import.meta.env.BASE_URL}cuadro5.png`} alt="" className="absolute w-20 md:w-32 h-20 md:h-32 md:top-[50%] top-[20%] md:bottom-[-5%] left-[5%] md:left-[52%] z-0 animate-float animation-delay-2000 opacity-80" />

        </div>
    );
}
