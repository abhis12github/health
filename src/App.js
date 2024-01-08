import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Test from './components/Tets';
import CarouselDefault from './components/CarouselDefault';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <Features></Features>
    <CarouselDefault></CarouselDefault>
    <Footer></Footer>
    </div>
  );
}

export default App;
