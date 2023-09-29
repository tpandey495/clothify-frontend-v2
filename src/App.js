import './App.css';
import Home from 'pages/home';
import Cart from 'pages/cart';
import Layout from 'component/Layout';
import { Routes, Route } from 'react-router-dom';
import Registration from 'pages/registration';
import store from 'store/store';
import { Provider } from 'react-redux';
import WomenClothing from 'pages/WomenClothing';
import KidsClothing from 'pages/KidsClothing';
import MenClothing from 'pages/MenClothing';

const App=()=>{
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="signup" element={<Registration/>}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="/womenclothing" element={<WomenClothing />}></Route>
          <Route path="/kidsclothing" element={<KidsClothing />}></Route>
          <Route path="/menclothing" element={<MenClothing />}></Route>
        </Route>
      </Routes>
      </Provider>
  );
}

export default App;
