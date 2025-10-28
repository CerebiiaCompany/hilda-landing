import BpoHappifySection from './components/BpoHappifySection'
import ServicesSection from './components/ServicesSection'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className="overflow-x-hidden">
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

export default App
