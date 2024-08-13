import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { jewelleryData } from '../lib/jewelleryData';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    if (value.length >= 3) {
      const filteredItems = jewelleryData.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredItems);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-white shadow-sm rounded-lg transition duration-300 hover:scale-110 overflow-hidden">
        <div className="px-3">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="py-3 px-4 text-sm text-gray-700 outline-none focus:outline-none w-full"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      {searchQuery.length >= 3 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 text-black z-10">
        {suggestions.map((item, index) => (
          <li key={index} className="px-2 py-1 cursor-pointer hover:bg-gray-100">
            {item.title}
          </li>
        ))}
      </ul>
      
      )}
    </div>
  );
};

export default SearchBar;
