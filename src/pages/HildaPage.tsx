import Navbar from '../components/Navbar'
import BpoHappifySection from '../components/BpoHappifySection'
import ServicesSection from '../components/ServicesSection'
import HeroSection from '../components/HeroSection'
import AddContactModal from '../components/AddContactModal'

export default function HildaPage() {
    return (
        <div className="overflow-x-hidden">
            <AddContactModal />
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
