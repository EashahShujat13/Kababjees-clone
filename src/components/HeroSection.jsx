
import MainNavbar from './MainNavbar'
import Navbar from './Navbar'
import BackgroundVideo from './BgVideo'


function HeroSection() {
  return (
    <>
    
    <section id='home' className="relative h-screen ">
       < BackgroundVideo/>
        <div className="relative z-10">
        <MainNavbar/>
        <Navbar/>
        </div>
      </section>

     
      

    </>
  )
}

export default HeroSection
