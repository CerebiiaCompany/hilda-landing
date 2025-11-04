const FooterContent = () => (
    <>
        {/* Logo - Centered */}
        <div className="flex items-center gap-2 md:gap-4 justify-center">
            <img src={`${import.meta.env.BASE_URL}logoBPO.png`} alt="Logo BPO" className="h-16 md:h-16" />
            <img src={`${import.meta.env.BASE_URL}BPO.png`} alt="BPO Happify" className="h-16 md:h-16" />
        </div>

        {/* Contact Icons - Horizontal */}
        <div className="flex gap-6 md:gap-8 items-center justify-center">
            <a href="https://www.instagram.com/bpohappify/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={`${import.meta.env.BASE_URL}ig.png`} alt="Instagram" className="h-10 w-10 md:h-8 md:w-8" />
            </a>
            <a href="https://www.linkedin.com/company/bpo-happify/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={`${import.meta.env.BASE_URL}linklind.png`} alt="LinkedIn" className="h-10 w-10 md:h-8 md:w-8" />
            </a>
        </div>
    </>
);

export default function Footer() {
    return (
        <footer className="py-8 relative md:-mx-12 md:px-12 lg:-mx-20 lg:px-20" style={{ backgroundColor: '#B590FF' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-0">
                <div className="flex flex-col items-center gap-6">
                    <FooterContent />
                </div>
            </div>
        </footer>
    );
}
