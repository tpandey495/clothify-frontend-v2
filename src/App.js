import './App.css';
import Navbar from 'component/Navbar';
import MiddleNav from 'component/MiddleNav'; 
import Carousel from 'component/Carousel';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MiddleNav />
      <Carousel />
    </div>
  );
}

export default App;
