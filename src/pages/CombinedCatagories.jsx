import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainCatCard from '../components/MainCatCard';
import { CombinedData } from '../lib/CombinedData';
import FilterSort from '../components/FilterSort';
import HandleOrderTwo from '../components/HandleOrderTwo';
import CategoryTwo from '../components/CategoryTwo';
import CategoryThree from '../components/CategoryThree';

function CombinedCategories() {
  const { category } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    applyFilters([]);
  }, [category]);

  const applyFilters = (selectedFilters) => {
    let dataToFilter = CombinedData.filter(item => item.category === category);

    if (selectedFilters.length > 0) {
      dataToFilter = dataToFilter.filter(item => {
        let matches = false;

        if (selectedFilters.includes('Option 1') && (item.discount === '20%' || item.discount === '30%' || item.discount === '40%')) {
          matches = true;
        } else if (selectedFilters.includes('Option 2') && (item.discount === '30%' || item.discount === '40%')) {
          matches = true;
        } else if (selectedFilters.includes('Option 3') && item.discount === '40%') {
          matches = true;
        }

        if (selectedFilters.includes('Option 4') && item.price < 1000) {
          matches = true;
        }
        if (selectedFilters.includes('Option 5') && item.price >= 1000 && item.price <= 3000) {
          matches = true;
        }
        if (selectedFilters.includes('Option 6') && item.price > 3000) {
          matches = true;
        }

        return matches;
      });
    }

    setFilteredData(dataToFilter);
  };

  const addToCart = (item) => {
    setCartItems(prevItems => {
      if (prevItems.find(cartItem => cartItem.id === item.id)) {
        return prevItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const dataToDisplay = filteredData.length > 0 ? filteredData : CombinedData.filter(item => item.category === category);

  if (dataToDisplay.length === 0) {
    return <div className="p-4">Category not found</div>;
  }

  return (
    <>
      <div className="p-2 md:p-4 lg:p-6">
        <FilterSort applyFilters={applyFilters} />
        <HandleOrderTwo />
      </div>
      <div className="flex flex-wrap justify-start">
        {dataToDisplay.map((card, index) => (
          <React.Fragment key={index}>
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
              <MainCatCard
                id={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                price={card.price}
                discount={card.discount}
                addToCart={() => addToCart(card)}
                addedToCart={!!cartItems.find(item => item.id === card.id)}
                disableAddToCart={!!cartItems.find(item => item.id === card.id)}
              />
            </div>
            {(index + 1) === 4 && (
              <div className="w-full p-2">
                <CategoryTwo />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <CategoryThree />
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </>
  );
}

export default CombinedCategories;
