import Navbar from '../components/santiago/NavbarSantiago'
import BpoHappifySection from '../components/santiago/BpoHappifySectionSantiago'
import ServicesSection from '../components/ServicesSection'
import HeroSectionSantiago from '../components/santiago/HeroSectionSantiago'
import AddContactModal from '../components/AddContactModal'

export default function SantiagoPage() {
    return (
        <div className="overflow-x-hidden">
            <AddContactModal
                contact={{
                    name: 'Santiago Castañeda',
                    phone: '+57 318 2574616',
                }}
                storageKey="hasSeenContactModal_Santiago"
            />
            <Navbar />
            <div className="bg-white">
                <div className="bg-gradient-to-br from-[#9b6cf8] to-[#b89dfa] rounded-b-[80px] md:rounded-b-[6%]">
                    <HeroSectionSantiago />
                    <BpoHappifySection />
                </div>
            </div>
            <ServicesSection />
        </div>
    )
}
