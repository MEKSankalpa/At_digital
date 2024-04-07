import './App.css';
import Navbar from './components/navbar/navbar';
import HeroSection from './components/herosection/hero';
import Footer from './components/footer/footer';
import AboutUsSection1 from './components/aboutUs/aboutUssection1';
import AboutUsSection2 from './components/aboutUs/aboutUssection2';
import FQASection from './components/FAQs/faq';
import HiddenSection from './components/hiddenSection/hiddenSection';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <HiddenSection></HiddenSection>
      <AboutUsSection1></AboutUsSection1>
      <AboutUsSection2></AboutUsSection2>
      <FQASection></FQASection> 
      <Footer></Footer>
      
    </div>
  );
}

export default App;
