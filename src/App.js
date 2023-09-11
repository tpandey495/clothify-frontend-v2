import './App.css';
import Navbar from 'component/Navbar';
import MiddleNav from 'component/MiddleNav'; 
import Carousel from 'component/Carousel';
import Card from 'component/Card';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MiddleNav />
      <Carousel />
      <Card />
    </div>
  );
}

export default App;
