// import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { FiShoppingCart, FiCheckCircle } from 'react-icons/fi';
// import { useCart } from '../Context/CartContext';
import '../App.css';

const MainCatCard = ({ id, title, discount, imageUrl, price }) => {
  const navigate = useNavigate();
  // const { addToCart } = useCart();
  // const [addedToCart, setAddedToCart] = useState(false);

  // const addToCartHandler = (e) => {
  //   e.stopPropagation();
  //   const item = { id, title, discount, imageUrl, price };
  //   addToCart(item);
  //   setAddedToCart(true);
  // };

  return (
    <div
      onClick={() => navigate(`/jewellery/${id}`)}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-mono mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-800">Rs: {price}</span>
          {discount && <span className="text-sm text-red-500">-{discount}%</span>}
        </div>
        {/* <button
          onClick={addToCartHandler}
          disabled={addedToCart}
          className={`mt-2 flex items-center justify-center py-1 px-2 rounded-full transition-colors duration-300 ${addedToCart ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold text-sm`}
        >
          {addedToCart ? (
            <>
              <FiCheckCircle className="mr-1 text-white" size={16} />
              Added
            </>
          ) : (
            <>
              <FiShoppingCart className="mr-1 text-white" size={16} />
              Add
            </>
          )}
        </button> */}
      </div>
    </div>
  );
};

MainCatCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  discount: PropTypes.string,
};

export default MainCatCard;
