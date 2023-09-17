import './App.css';
import Home from 'pages/home';
import Cart from 'pages/cart';
import Navbar from 'component/wholeNavbar';
import { Routes, Route } from 'react-router-dom';
import Registration from 'pages/registration';
import store from 'store/store';
import { Provider } from 'react-redux';

const App=()=>{
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="signup" element={<Registration/>}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
      </Provider>
  );
}

export default App;
