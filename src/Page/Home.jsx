
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import Specialities from '../components/Specialities'
import CallToActionSection from '../components/Call'
import BankDiscount from '../components/BankDiscount'
import Gallery from '../components/Gallery'
import MainReview from '../components/Review'
import MainLocation from '../components/Location'
import Contact from '../components/ContactPage'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>

  <AboutUs/>
  <Specialities/>
  <CallToActionSection/>
  <BankDiscount/>
  <Gallery/>
  <MainReview/>
  <MainLocation/>
  <Contact/>
  <Footer/>
    </div>
  )
}

export default Home ;
