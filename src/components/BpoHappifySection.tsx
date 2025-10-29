export default function BpoHappifySection() {
    return (
        <div className="relative py-5 pb-28 flex flex-col items-center px-12 md:px-20">


            <div className="flex flex-col md:flex-row justify-between items-center gap-24 max-w-7xl w-full">
                <div className="flex-1 text-white">
                    <h2 className="text-5xl md:text-6xl font-bold mb-2 tracking-wider">BPOHAPPIFY</h2>
                    <p className="text-lg italic mb-12 opacity-90">"frase típica o que siempre nombra"</p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-cyan-500 text-xl font-bold">✓</span>
                            </div>
                            <p className="text-lg leading-relaxed m-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-cyan-500 text-xl font-bold">✓</span>
                            </div>
                            <p className="text-lg leading-relaxed m-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-cyan-500 text-xl font-bold">✓</span>
                            </div>
                            <p className="text-lg leading-relaxed m-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-cyan-500 text-xl font-bold">✓</span>
                            </div>
                            <p className="text-lg leading-relaxed m-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="relative flex justify-center items-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] bg-white rounded-full blur-3xl opacity-40"></div>
                        <img src={`${import.meta.env.BASE_URL}Frame 38.png`} alt="BPO Happify" className="w-full max-w-[450px] relative z-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}
