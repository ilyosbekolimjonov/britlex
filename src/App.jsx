import './App.css'
import AboutUs from './components/AboutUs'
import Hero from './components/Hero'
import Listening from './components/Skills/Listening'
import Navbar from './components/Navbar'
import Reading from './components/Skills/Reading'
import Speaking from './components/Skills/Speaking'
import Writing from './components/Skills/Writing'
import Footer from './components/Footer'
import SelfStudy from './components/Pricing/SelfStudy'
import LiveClasses from './components/Pricing/LiveClasses'
import PersonalTuition from './components/Pricing/PersonalTuition'
import ContactUs from './components/ContactUs'

function App() {
    return (
        <div className='max-w-100 my-5 mx-4 m-auto'>
            <Navbar />
            <Hero />

            {/* Skills */}
            <div className='flex flex-col gap-5'>
                <Speaking />
                <Writing />
                <Reading />
                <Listening />
            </div>
            <AboutUs />

            {/* Pricing */}
            <div className='flex flex-col gap-10 mb-5'>
                <SelfStudy />
                <LiveClasses />
                <PersonalTuition />
            </div>

            <ContactUs />
            <Footer />
        </div>
    )
}

export default App