import { Link } from 'react-router-dom';
import { BiHome, BiCart, BiMenu, BiSearch } from 'react-icons/bi'; 

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full flex justify-between items-center">
      <Link to="/" className="hover:text-gray-400 flex flex-col items-center">
        <BiHome className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/cart" className="hover:text-gray-400 flex flex-col items-center">
        <BiCart className="h-6 w-6" />
        <span className="text-xs">Cart</span>
      </Link>
      <Link to="/search" className="hover:text-gray-400 flex flex-col items-center">
        <BiSearch className="h-6 w-6" />
        <span className="text-xs">Search</span>
      </Link>
      <Link to="/menu" className="hover:text-gray-400 flex flex-col items-center">
        <BiMenu className="h-6 w-6" />
        <span className="text-xs">Menu Bar</span>
      </Link>
    </footer>
  );
}

export default Footer;
    