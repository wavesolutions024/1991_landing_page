import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Gallery from '../components/Gallery.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import Reviews from '../components/Reviews.jsx';
import FAQ from '../components/FAQ.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';
import WhatsappButton from '../components/WhatsappButton.jsx';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <BeforeAfter />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default Home;
