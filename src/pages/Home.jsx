import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Studio from '../components/Studio.jsx';
import Services from '../components/Services.jsx';
import Piercing from '../components/Piercing.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Gallery from '../components/Gallery.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import Reviews from '../components/Reviews.jsx';
import FAQ from '../components/FAQ.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';
import WhatsappButton from '../components/WhatsappButton.jsx';
import CallButton from "../components/CallButton.jsx";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Studio/>
        <Services />
        <Piercing/>
        <WhyChooseUs />
        <Gallery />
         {/*<BeforeAfter />*/}
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsappButton />
      <CallButton/>
    </>
  );
}

export default Home;
