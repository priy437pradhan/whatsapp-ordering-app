import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { jewelleryData } from '../lib/jewelleryData';
import { chainData } from '../lib/Chain'; // Correct import

import OrderCard from './OrderCard';
import '../App.css';

const CardDetail = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  let card = jewelleryData.find((card) => card.id === id) || {};
  const Chaincard = chainData.find((Chaincard) => Chaincard.id === id) || {};

  // Combine the card and Chaincard objects
  card = { ...card, ...Chaincard };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: card.title,
          text: `Check out this ${card.title} at our store!`,
          url: window.location.href,
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing the content:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  const handleOrder = () => {
    const orderUrl = `https://wa.me/9861667624?text=${encodeURIComponent(
      `Hello, I am interested in the ${card.title}.\n\nCheck it out here: ${window.location.href}`
    )}`;
    window.open(orderUrl, '_blank');
  };

  const toggleExpand = () => {
    console.log('toggleExpand called');
    setIsExpanded(!isExpanded);
    console.log('isExpanded:', !isExpanded);
  };

  if (!card.title) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <p>Card not found</p>
      </div>
    );
  }

  return (
    <>
      <div
        className={`c-responsive-image-sc relative rounded overflow-hidden shadow-lg lg:m-4 my-4 mx-1 group cursor-pointer lg:float-left ${isExpanded ? 'h-expanded hi-expanded' : ''}`}
        onClick={toggleExpand}
      >
        <div className="relative">
          <img
            src={card.imageUrl}
            alt={card.title}
            className={`responsive-image-sc ${isExpanded ? 'hi-expanded' : ''}`}
          />
          <div className={`materialCard absolute inset-0 ${isExpanded ? 'gradient-bottom-to-top' : 'bg-gradient-to-r from-black via-transparent to-transparent'} flex items-center p-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100`}>
            <span className="py-2">{card.material}</span>
          </div>
        </div>
        <div className="px-4 py-4 relative z-10">
          <div className="font-500 text-m mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">{card.price}</p>
        </div>
      </div>
      <div className={`shareOrder ${isExpanded ? 'btn-mt-2' : ''}`}>
        <button
          onClick={handleShare}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mx-4"
        >
          Share
        </button>
        <button
          onClick={handleOrder}
          className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 mx-4"
        >
          Order
        </button>
        <OrderCard />
      </div>
    </>
  );
};

export default CardDetail;
