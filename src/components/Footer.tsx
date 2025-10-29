export default function Footer() {
    return (
        <footer className="py-12 relative -mx-12 md:-mx-20 px-12 md:px-20" style={{ backgroundColor: '#B590FF' }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <img src={`${import.meta.env.BASE_URL}logoBPO.png`} alt="Logo BPO" className="h-20" />
                    <img src={`${import.meta.env.BASE_URL}BPO.png`} alt="BPO Happify" className="h-20" />
                </div>
            </div>
        </footer>
    );
}
