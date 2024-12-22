
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import PricingCards from '../components/PricingCard';
import ContactForm from '../components/ContactForm';
import Banner from '../components/Banner';
import Global from '../components/Global';
import Offer from '../components/Offer';
import ProfitShareSlider from '../components/ProfitSlider';
const Home = () => {
  return (
    <>
      <Banner/>
      <PricingCards/> 
      <Global/>
      <Offer/>
      <FAQ />
      <ProfitShareSlider/>
      <ContactForm/>
      <Footer />
    </>
  )
}

export default Home