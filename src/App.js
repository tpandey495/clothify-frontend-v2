import './App.css';
import Navbar from 'component/Navbar';
import MiddleNav from 'component/MiddleNav'; 
import Carousel from 'component/Carousel';
import Card from 'component/Card';
import Footer from 'component/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MiddleNav />
      <Carousel />
      <Card />
      <Footer/>
    </div>
  );
}

export default App;
