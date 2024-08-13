import PropTypes from 'prop-types';
import '../App.css';

const Cards = ({ id, title, imageUrl }) => {
  return (

    <a href={`/${id}`}>
      <div className="BorderedSqrCard card-hover relative max-w-xs rounded overflow-hidden shadow-lg m-4 group cursor-pointer" style={{  width: '200px' }}>
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            style={{ height: '168px', width: '200px', objectFit: 'cover' }}
          />
          <div className="materialCard absolute inset-0 bg-gradient-to-r flex items-end p-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="px-1 py-2 relative z-1">
          <div className="font-700 text-m">{title}</div>
        </div>
          </div>
          
        </div>
        
      </div>
    </a>
  );
};

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
};

export default Cards;
