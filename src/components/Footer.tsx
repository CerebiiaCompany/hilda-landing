export default function Footer() {
    return (
        <>
            {/* Mobile Footer */}
            <footer className="md:hidden py-8 relative" style={{ backgroundColor: '#B590FF' }}>
                <div className="flex items-start gap-8 px-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2 flex-shrink-0 mt-4">
                        <img src={`${import.meta.env.BASE_URL}logoBPO.png`} alt="Logo BPO" className="h-20" />
                        <img src={`${import.meta.env.BASE_URL}BPO.png`} alt="BPO Happify" className="h-20" />
                    </div>

                    {/* Contact Icons - Vertical Stack */}
                    <div className="flex flex-col gap-3 items-center">
                        <a href="mailto:contact@bpohappify.com" className="hover:opacity-80 transition-opacity">
                            <img src={`${import.meta.env.BASE_URL}gmail.png`} alt="Email" className="h-10 w-10" />
                        </a>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src={`${import.meta.env.BASE_URL}maps.png`} alt="Location" className="h-10 w-10" />
                        </a>
                        <a href="tel:+1234567890" className="hover:opacity-80 transition-opacity">
                            <img src={`${import.meta.env.BASE_URL}llamada.png`} alt="Phone" className="h-10 w-10" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src={`${import.meta.env.BASE_URL}ig.png`} alt="Instagram" className="h-10 w-10" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src={`${import.meta.env.BASE_URL}linklind.png`} alt="LinkedIn" className="h-10 w-10" />
                        </a>
                    </div>
                </div>
            </footer>

            {/* Desktop Footer */}
            <footer className="hidden md:block py-8 relative -mx-12 md:-mx-20 px-12 md:px-20" style={{ backgroundColor: '#B590FF' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-16">
                        {/* Logo */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <img src={`${import.meta.env.BASE_URL}logoBPO.png`} alt="Logo BPO" className="h-16" />
                            <img src={`${import.meta.env.BASE_URL}BPO.png`} alt="BPO Happify" className="h-16" />
                        </div>

                        {/* Contact Icons */}
                        <div className="flex items-start justify-between flex-grow">
                            {/* Gmail and Maps column */}
                            <div className="flex flex-col gap-3">
                                <a href="mailto:contact@bpohappify.com" className="hover:opacity-80 transition-opacity">
                                    <img src={`${import.meta.env.BASE_URL}gmail.png`} alt="Email" className="h-8 w-8" />
                                </a>
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <img src={`${import.meta.env.BASE_URL}maps.png`} alt="Location" className="h-8 w-8" />
                                </a>
                            </div>

                            {/* Llamada and Instagram column */}
                            <div className="flex flex-col gap-3">
                                <a href="tel:+1234567890" className="hover:opacity-80 transition-opacity">
                                    <img src={`${import.meta.env.BASE_URL}llamada.png`} alt="Phone" className="h-8 w-8" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <img src={`${import.meta.env.BASE_URL}ig.png`} alt="Instagram" className="h-8 w-8" />
                                </a>
                            </div>

                            {/* LinkedIn column */}
                            <div className="flex flex-col">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <img src={`${import.meta.env.BASE_URL}linklind.png`} alt="LinkedIn" className="h-8 w-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
