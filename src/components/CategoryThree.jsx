import PropTypes from 'prop-types';


import { useNavigate } from 'react-router-dom';
import image1 from '../assets/jewellery-set.jpg';
import image2 from '../assets/Chain.jpg';
import image3 from '../assets/brecelets.jpg';
import image4 from '../assets/ear-ring.jpg';
import image5 from '../assets/ring.jpg';
import image6 from '../assets/bengle.jpg';
import image7 from '../assets/anklet.jpg';
import image8 from '../assets/nose-pin.jpg';
import '../App.css';

const categories = [
  { image: image1, link: '/alljewellery/set', title: "Set" },
  { image: image2, link: '/alljewellery/Chain', title: "Chain" },
  { image: image3, link: '/alljewellery/Bracelets', title: "Bracelets" },
  { image: image4, link: '/alljewellery/Ear-Ring', title: "Ear Ring" },
  { image: image5, link: '/alljewellery/Ring', title: "Ring" },
  { image: image6, link: '/alljewellery/Bangle', title: "Bangle" },
  { image: image7, link: '/alljewellery/Anklet', title: "Anklet" },
  { image: image8, link: '/alljewellery/Nose-Pin', title: "Nose Pin" },
];

const CategoryThree = () => {
  return (
    <div className="container px-2 py-2 mb-16 overflow-x-auto">
      <div className="flex space-x-4 w-max">
        {categories.map((category, index) => (
          <Category key={index} image={category.image} link={category.link} title={category.title} />
        ))}
      </div>
    </div>
  );
};

const Category = ({ image, link, title }) => {
  const navigate = useNavigate();
  window.scrollTo({ top: 0 }); 
  return (
    <div
    onClick={() => {
      navigate(link); 
     
    }}
    className="category-container relative cursor-pointer border rounded-md overflow-hidden shadow-md transition-all duration-300 mb-4 mt-2 mx-2"
    style={{ width: '150px', height: '150px' }}
  >
    <div className="relative w-full h-full overflow-hidden rounded-md">
      <img
        src={image}
        alt={title}
        className="category-image w-full h-full object-cover transition-transform duration-300 rounded-md"
      />
    </div>
    <div className="category-title absolute bottom-0 left-0 right-0 text-opacity-75 bg-opacity-75 bg-white text-center py-2 border-t transition-all duration-300 rounded-md">
      <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">{title}</span>
    </div>
  </div>
  
  );
};
Category.propTypes = {
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
export default CategoryThree;
