import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FilterSort = ({ applyFilters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const navigate = useNavigate();
  const openFilterMenu = () => {
    setIsFilterOpen(true);
  };

  const closeMenu = () => {
    setIsFilterOpen(false);
  };

  const handleFilterSelect = (option) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter(item => item !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  const handleApplyFilters = () => {
    applyFilters(selectedFilters);
    closeMenu();
  };

  return (
    <div className="fixed top-22 left-0 z-20 w-full flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-md"


>
      <button
        type="button"
        className="inline-flex justify-center w-36 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-expanded={isFilterOpen}
        aria-haspopup="true"
        onClick={openFilterMenu}
      >
        Filter
      </button>
      {isFilterOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-80 z-10">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-gray-700">Filter Options</p>
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={closeMenu}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul>
            Discount
            <li className="py-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-gray-600"
                  onChange={() => handleFilterSelect('Option 1')}
                  checked={selectedFilters.includes('Option 1')}
                />
                <span className="ml-2 text-gray-700">20% or more</span>
              </label>
            </li>
            <li className="py-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-gray-600"
                  onChange={() => handleFilterSelect('Option 2')}
                  checked={selectedFilters.includes('Option 2')}
                />
                <span className="ml-2 text-gray-700">30% or more</span>
              </label>
            </li>
            <li className="py-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-gray-600"
                  onChange={() => handleFilterSelect('Option 3')}
                  checked={selectedFilters.includes('Option 3')}
                />
                <span className="ml-2 text-gray-700">40% or more</span>
              </label>
            </li>
            </ul>
            <ul>
              Price
            <li className="py-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-gray-600"
                  onChange={() => handleFilterSelect('Option 4')}
                  checked={selectedFilters.includes('Option 4')}
                />
                <span className="ml-2 text-gray-700">Below 1000</span>
              </label>
            </li>
            <li className="py-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-gray-600"
                  onChange={() => handleFilterSelect('Option 5')}
                  checked={selectedFilters.includes('Option 5')}
                />
                <span className="ml-2 text-gray-700">1000-3000</span>
              </label>
            </li>
            <li className="py-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-gray-600"
                  onChange={() => handleFilterSelect('Option 6')}
                  checked={selectedFilters.includes('Option 6')}
                />
                <span className="ml-2 text-gray-700">Above 3000</span>
              </label>
            </li>
          </ul>
          <button
            type="button"
            className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={handleApplyFilters}
          >
            Apply
          </button>
        </div>
      )}
     
     <button type="button"
        className="inline-flex justify-center w-36 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-haspopup="true"
       onClick={() => navigate('/')}>
      
     Category

    </button>
    </div>
  );
};

export default FilterSort;
