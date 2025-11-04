export default function BpoHappifySection() {
    return (
        <div className="relative py-5 pb-28 flex flex-col items-center px-6 md:px-20">

            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 max-w-7xl w-full">
                <div className="flex-1 text-white pl-0 md:pl-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-wider">Especialidades</h2>
                    <p className="text-base md:text-lg italic mb-8 md:mb-12 opacity-90">"Impulsa resultados sostenibles a través de estrategia, innovación digital y liderazgo colaborativo con propósito."</p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 border-2 border-[#5CE1E6] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#5CE1E6] text-sm font-bold">✓</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed m-0">Estrategia Financiera y Operativa.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 border-2 border-[#5CE1E6] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#5CE1E6] text-sm font-bold">✓</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed m-0">Transformación Digital.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 border-2 border-[#5CE1E6] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#5CE1E6] text-sm font-bold">✓</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed m-0">Cultura Organizacional.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 border-2 border-[#5CE1E6] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#5CE1E6] text-sm font-bold">✓</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed m-0">Alianzas B2B.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 border-2 border-[#5CE1E6] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#5CE1E6] text-sm font-bold">✓</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed m-0">Liderazgo Femenino.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="relative flex justify-center items-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[650px] md:h-[650px] bg-white rounded-full blur-3xl opacity-40"></div>
                        <img src={`${import.meta.env.BASE_URL}Frame 38.png`} alt="BPO Happify" className="w-full max-w-[350px] md:max-w-[450px] relative z-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}
