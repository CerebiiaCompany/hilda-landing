export default function Footer() {
    return (
        <>
            {/* Mobile Footer */}
            <footer className="md:hidden py-8 relative" style={{ backgroundColor: '#B590FF' }}>
                <div className="flex flex-col items-center gap-6 px-6">
                    {/* Logo - Centered */}
                    <div className="flex items-center gap-2 justify-center">
                        <img src={`${import.meta.env.BASE_URL}logoBPO.png`} alt="Logo BPO" className="h-20" />
                        <img src={`${import.meta.env.BASE_URL}BPO.png`} alt="BPO Happify" className="h-20" />
                    </div>

                    {/* Contact Icons - Horizontal */}
                    <div className="flex gap-6 items-center justify-center">
                        <a href="mailto:contact@bpohappify.com" className="hover:opacity-80 transition-opacity">
                            <img src={`${import.meta.env.BASE_URL}gmail.png`} alt="Email" className="h-10 w-10" />
                        </a>
                        <a href="https://www.linkedin.com/in/hilda-palacios-01637713a/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src={`${import.meta.env.BASE_URL}linklind.png`} alt="LinkedIn" className="h-10 w-10" />
                        </a>
                    </div>
                </div>
            </footer>

            {/* Desktop Footer */}
            <footer className="hidden md:block py-8 relative -mx-12 md:-mx-20 px-12 md:px-20" style={{ backgroundColor: '#B590FF' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center gap-6">
                        {/* Logo - Centered */}
                        <div className="flex items-center gap-4 justify-center">
                            <img src={`${import.meta.env.BASE_URL}logoBPO.png`} alt="Logo BPO" className="h-16" />
                            <img src={`${import.meta.env.BASE_URL}BPO.png`} alt="BPO Happify" className="h-16" />
                        </div>

                        {/* Contact Icons - Horizontal */}
                        <div className="flex items-center gap-8 justify-center">
                            <a href="mailto:contact@bpohappify.com" className="hover:opacity-80 transition-opacity">
                                <img src={`${import.meta.env.BASE_URL}gmail.png`} alt="Email" className="h-8 w-8" />
                            </a>
                            <a href="https://www.linkedin.com/in/hilda-palacios-01637713a/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src={`${import.meta.env.BASE_URL}linklind.png`} alt="LinkedIn" className="h-8 w-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
