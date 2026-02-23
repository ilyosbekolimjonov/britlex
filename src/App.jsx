import AboutUs from './components/AboutUs'
import Hero from './components/Hero'
import Listening from './components/Skills/Listening'
import Navbar from './components/Navbar'
import Reading from './components/Skills/Reading'
import Speaking from './components/Skills/Speaking'
import Writing from './components/Skills/Writing'
import Footer from './components/Footer'
import PricingCard from './components/Pricing/PricingCard'
import ContactUs from './components/ContactUs'

function App() {
    return (
        <div className='max-w-100 my-5 mx-4 m-auto lp:max-w-7xl lp:m-auto'>
            <Navbar />
            <Hero />

            <div id='skills'>
                <h2 className="mt-17 mb-12 text-3xl font-semibold m-auto text-center lp:text-5xl lp:mb-18">Skills</h2>
                <div className='grid grid-cols-1 gap-5 lp:grid-cols-3'>
                    <Speaking />
                    <Writing />
                    <Reading />
                    <Listening />
                </div>
            </div>

            <AboutUs />

            <div id='pricing'>
                <h2 className="mt-17 mb-10 text-3xl font-bold text-center lp:text-4xl lp:mt-25 lp:mb-15">Pricing</h2>
                <div className='flex flex-col gap-10 mb-5 lp:flex-row lp:justify-between'>
                    <PricingCard />
                </div>
            </div>

            <ContactUs />
            <Footer />
        </div>
    )
}

export default App;
