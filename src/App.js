import './App.css';
import Home from 'pages/home';
import Cart from 'pages/cart';
import Navbar from 'component/wholeNavbar';
import { Routes, Route } from 'react-router-dom';
import Registration from 'pages/registration';
const App=()=>{
  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="signup" element={<Registration/>}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
  );
}

export default App;
