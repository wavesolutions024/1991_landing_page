import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Studio from "../components/Studio.jsx";
import Services from "../components/Services.jsx";
import Piercing from "../components/Piercing.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Gallery from "../components/Gallery.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import Reviews from "../components/Reviews.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
import WhatsappButton from "../components/WhatsappButton.jsx";
import CallButton from "../components/CallButton.jsx";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        {/* Primary SEO Tags */}
        <title>Tattoo Studio in Wakad, Pune | Inkfly Tattoo</title>

        <meta
          name="description"
          content="Looking for a tattoo artist in Wakad, Pune? Explore custom tattoos, black and grey realism, fine-line designs, cover-ups and body piercing at Inkfly Tattoo. Contact us to book a consultation."
        />

        <meta
          name="keywords"
          content="tattoo studio in Wakad, tattoo artist in Wakad Pune, tattoo shop in Wakad, tattoo parlour Pune, custom tattoo designs Pune, realistic tattoos Pune, fine line tattoos Pune, tattoo cover up Pune, body piercing Wakad"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://landing.inkflytattoo.com/" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Inkfly Tattoo | Tattoo Studio in Wakad, Pune"
        />

        <meta
          property="og:description"
          content="Discover custom tattoo designs, realism, fine-line tattoos, cover-ups and body piercing at Inkfly Tattoo in Wakad, Pune."
        />

        <meta property="og:url" content="https://landing.inkflytattoo.com/" />

        <meta property="og:site_name" content="Inkfly Tattoo" />

        {/* Twitter / X Sharing */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Inkfly Tattoo | Tattoo Studio in Wakad, Pune"
        />

        <meta
          name="twitter:description"
          content="Explore custom tattoos, realism, fine-line designs and body piercing at Inkfly Tattoo, Wakad, Pune."
        />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Studio />
        <Services />
        <Piercing />
        <WhyChooseUs />
        <Gallery />
        {/*<BeforeAfter />*/}
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsappButton />
      <CallButton />
    </>
  );
}

export default Home;
