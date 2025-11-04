import { useState } from 'react';
import Footer from './Footer';

export default function ServicesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);


    const services = [
        {
            image: `${import.meta.env.BASE_URL}Happy-purple.png`,
            alt: 'Implementación sin fricción',
            text: 'Implementación sin fricción; piloto en semanas.'
        },
        {
            image: `${import.meta.env.BASE_URL}Happy-purple.png`,
            alt: 'Agentes felices',
            text: 'Agentes felices; menor rotación y mejor CSAT.'
        },
        {
            image: `${import.meta.env.BASE_URL}Happy-purple.png`,
            alt: 'Automatización con sentido',
            text: 'Automatización con sentido; +65% de agendamientos automáticos.'
        }
    ];

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 600);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 600);
    };

    const getCardIndex = (offset: number) => {
        return (currentIndex + offset + services.length) % services.length;
    };

    return (
        <div className="bg-white">
            <div className="min-h-screen relative pb-20 pt-20 px-12 md:px-20">
                <div className="flex justify-center absolute top-0 left-0 right-0 -translate-y-8 z-20">
                    <div className="relative">
                        <div className="absolute inset-0 w-24 h-12 rounded-b-full -translate-x-4 translate-y-8 bg-primary-lighter"></div>
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg shadow-cyan-500/50 relative z-10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="#004AAD" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-500 mb-4 leading-tight relative z-20">
                        Contact center feliz en <span className="text-cyan-400">Colombia</span>
                    </h2>
                    <p className="text-lg text-gray-800 mb-4 relative z-20 max-w-4xl mx-auto px-4">En Happify fusionamos automatización inteligente con agentes motivados para entregar una atención al cliente humana, rápida y medible.</p>

                    <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
                        <a href="https://happybpo.co/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-br from-cyan-500 to-cyan-400 border-none px-8 md:px-16 py-4 text-base font-semibold rounded-full cursor-pointer shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 whitespace-nowrap" style={{ color: '#004AAD' }}>
                                WEB DE HAPPY
                            </button>
                        </a>
                        <a href={`${import.meta.env.BASE_URL}brochure presentaciónHappifyc2.pdf`} target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-br from-cyan-500 to-cyan-400 border-none px-8 md:px-16 py-4 text-base font-semibold rounded-full cursor-pointer shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 whitespace-nowrap" style={{ color: '#004AAD' }}>
                                PORTAFOLIO
                            </button>
                        </a>
                    </div>

                    <div className="md:hidden relative py-8 flex items-center justify-center gap-4 z-20">
                        <button onClick={handlePrev} className="text-5xl text-black cursor-pointer transition-all duration-300 flex-shrink-0 hover:scale-125 active:scale-95 bg-transparent border-none z-30 relative">‹</button>

                        <div className="rounded-2xl p-10 w-full max-w-sm min-h-[280px] flex flex-col items-center gap-6 border-2 border-purple-300 shadow-xl transition-all duration-600 ease-out relative z-20" style={{ backgroundColor: 'rgba(230, 220, 250, 0.5)' }}>
                            <img src={services[currentIndex].image} alt={services[currentIndex].alt} className="w-20 h-20 object-contain" />
                            <p className="text-sm leading-relaxed text-gray-700 text-center m-0">
                                {services[currentIndex].text}
                            </p>
                        </div>

                        <button onClick={handleNext} className="text-5xl text-black cursor-pointer transition-all duration-300 flex-shrink-0 hover:scale-125 active:scale-95 bg-transparent border-none z-30 relative">›</button>
                    </div>

                    <div className="hidden md:flex relative py-8 gap-8 justify-center items-center">
                        <button onClick={handlePrev} className="text-4xl text-black cursor-pointer transition-all duration-300 flex-shrink-0 hover:text-indigo-500 hover:scale-125 active:scale-95">‹</button>

                        <div className="rounded-2xl p-10 w-72 min-h-[280px] flex flex-col items-center gap-6 border-2 border-purple-300 opacity-70 scale-90 hover:scale-95 transition-all duration-600 ease-out" style={{ backgroundColor: 'rgba(230, 220, 250, 0.5)' }}>
                            <img src={services[getCardIndex(-1)].image} alt={services[getCardIndex(-1)].alt} className="w-20 h-20 object-contain" />
                            <p className="text-sm leading-relaxed text-gray-700 text-center m-0">
                                {services[getCardIndex(-1)].text}
                            </p>
                        </div>

                        <div className="rounded-2xl p-10 w-72 min-h-[280px] flex flex-col items-center gap-6 border-2 border-purple-300 shadow-xl transition-all duration-600 ease-out hover:scale-105" style={{ backgroundColor: 'rgba(230, 220, 250, 0.5)' }}>
                            <img src={services[currentIndex].image} alt={services[currentIndex].alt} className="w-20 h-20 object-contain" />
                            <p className="text-sm leading-relaxed text-gray-700 text-center m-0">
                                {services[currentIndex].text}
                            </p>
                        </div>

                        <div className="rounded-2xl p-10 w-72 min-h-[280px] flex flex-col items-center gap-6 border-2 border-purple-300 opacity-70 scale-90 hover:scale-95 transition-all duration-600 ease-out" style={{ backgroundColor: 'rgba(230, 220, 250, 0.5)' }}>
                            <img src={services[getCardIndex(1)].image} alt={services[getCardIndex(1)].alt} className="w-20 h-20 object-contain" />
                            <p className="text-sm leading-relaxed text-gray-700 text-center m-0">
                                {services[getCardIndex(1)].text}
                            </p>
                        </div>

                        <button onClick={handleNext} className="text-4xl text-black cursor-pointer transition-all duration-300 flex-shrink-0 hover:text-indigo-500 hover:scale-125 active:scale-95">›</button>
                    </div>
                </div>

                <img src={`${import.meta.env.BASE_URL}vector1.png`} alt="" className="absolute top-[10%] left-[5%] w-32 h-32 z-0 opacity-70" />
                <img src={`${import.meta.env.BASE_URL}vector2.png`} alt="" className="absolute top-[15%] right-[8%] w-36 h-36 z-0 opacity-70" />
                <img src={`${import.meta.env.BASE_URL}vector3.png`} alt="" className="absolute top-[50%] left-[15%] w-28 h-28 z-0 opacity-70" />
                <img src={`${import.meta.env.BASE_URL}vector4.png`} alt="" className="absolute bottom-[25%] left-[8%] w-32 h-32 z-0 opacity-70" />
                <img src={`${import.meta.env.BASE_URL}vector5.png`} alt="" className="absolute bottom-[20%] right-[10%] w-36 h-36 z-0 opacity-70" />
            </div>

            <Footer />
        </div>
    );
}
