import Navbar from '../components/hilda/Navbar'
import BpoHappifySection from '../components/hilda/BpoHappifySection'
import ServicesSection from '../components/ServicesSection'
import HeroSection from '../components/hilda/HeroSection'
import AddContactModal from '../components/AddContactModal'

export default function HildaPage() {
    return (
        <div className="overflow-x-hidden">
            <AddContactModal
                contact={{
                    name: 'Hilda Palacios',
                    phone: '+57 315 8346517',
                }}
                storageKey="hasSeenContactModal_Hilda"
            />
            <Navbar />
            <div className="bg-white">
                <div className="bg-gradient-to-br from-[#9b6cf8] to-[#b89dfa] rounded-b-[80px] md:rounded-b-[6%]">
                    <HeroSection />
                    <BpoHappifySection />
                </div>
            </div>
            <ServicesSection />
        </div>
    )
}
