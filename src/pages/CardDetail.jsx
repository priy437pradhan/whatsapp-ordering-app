import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HandleShare from '../components/HandleShare';
import HandleOrder from '../components/HandleOrder';
import OrderCard from '../components/OrderCard';
import GoBackButton from '../components/GoBackButton';
import { CombinedData } from '../lib/CombinedData';
import { useCart } from '../Context/CartContext';
import { FiShoppingCart, FiCheckCircle } from 'react-icons/fi';
import '../App.css';

const CardDetail = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const CombinedDataItem = CombinedData.find((item) => item.id === id) || {};
  const card = { ...CombinedDataItem };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const addToCartHandler = (e) => {
    e.stopPropagation();
    addToCart(card);
    setAddedToCart(true);
  };

  if (!card.title) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <p>Card not found</p>
      </div>
    );
  }

  return (
    <div className="p-2">
      <GoBackButton />
      <div
        className={`card-detail-container relative rounded-lg overflow-hidden shadow-lg lg:m-4 my-4 mx-1 group cursor-pointer lg:float-left ${isExpanded ? 'h-expanded' : ''}`}
        onClick={toggleExpand}
      >
        <div className="relative">
          <img
            src={card.imageUrl}
            alt={card.title}
            className={`card-detail-image ${isExpanded ? 'hi-expanded' : ''} object-cover w-full`}
          />
          {!isExpanded && (
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <div className="flex  items-center">
          <span className="text-base font-medium text-white-800">Rs: {card.price}</span>
          {card.discount && <span className="text-sm font-bold text-red-600">-Discount : {card.discount}%</span>}
        </div>
              <button
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
              </button>
            </div>
          )}
        </div>
        {isExpanded && (
          <div className="p-4 bg-white">
            <div>
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-800 mr-8">Rs: {card.price}</span>
          {card.discount && <span  className="text-sm font-bold text-red-600">-Discount : {card.discount}%</span>}
        </div>
              <button
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
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={`shareOrder p-2 ${isExpanded ? 'btn-mt-2' : ''}`}>
        <HandleShare card={card} />
        <HandleOrder card={card} />
        <OrderCard />
      </div>
    </div>
  );
};

export default CardDetail;
