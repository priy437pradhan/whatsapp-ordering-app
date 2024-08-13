import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home';

import CardDetail from './pages/CardDetail'
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage'; 

import './App.css';

import CombinedCategories from './pages/CombinedCatagories';
function App() {
  return (
    <>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/alljewellery/:category" element={<CombinedCategories />} />
        

        <Route path="/jewellery/:id" element={<CardDetail />}/>
        <Route path="/about" element={<About  />} />
        <Route path="/service" element={<Services  />} />
        <Route path="/Contact" element={<Contact  />} /> 
        <Route path="/cart" element={<CartPage/>} />
       
      </Routes>
     {/* <Footer/> */}
    </>
  );
}

export default App;
