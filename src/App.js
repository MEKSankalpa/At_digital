import './App.css';
import Navbar from './components/navbar/navbar';
import HeroSection from './components/herosection/hero';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
