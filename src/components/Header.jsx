import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/mainLogo.png';
import { BiCart } from 'react-icons/bi'; 
import { useCart } from '../Context/CartContext';
import '../App.css';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 left-0 text-orange-400 shadow-md z-20 w-full" style={{ backgroundColor: "#082217" }}>
      <div className="container mx-auto flex justify-between items-center p-4 pb-3">
        <div onClick={() => navigate(`/`)}>
          <img src={mainLogo} alt="" className='mainLogo' />
        </div>
        <div className="p-4 ml-16 relative">
          <Link to="/cart" className="hover:text-gray-400 flex flex-col items-center">
            <BiCart className="h-6 w-6" />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity > 9 ? '9+' : totalQuantity}
              </span>
            )}
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="about" className="hover:text-orange-500 transition-colors duration-200">About</a>
          <a href="service" className="hover:text-orange-500 transition-colors duration-200">Services</a>
          <a href="contact" className="hover:text-orange-500 transition-colors duration-200">Contact</a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-400 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <a href="about" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">About</a>
        <a href="service" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Services</a>
        <a href="contact" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Contact</a>
      </div>
    </header>
  );
};

export default Header;
