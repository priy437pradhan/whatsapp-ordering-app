import { useNavigate } from 'react-router-dom';
import '../App.css';

const Category = ({ image, link, title, isLarge }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(link)}
            className={`category-container relative cursor-pointer border rounded-lg overflow-hidden shadow-md transition-all duration-300 mb-4 mt-2 ${isLarge ? 'w-full' : 'w-full'} sm:mx-4`}
            style={{ height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}
        >
            <div className="relative w-full h-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="category-image w-full h-full object-cover transition-transform duration-300"
                />
            </div>
            <div className="category-title absolute bottom-0 w-full bg-opacity-75 bg-white text-center py-2 border-t transition-all duration-300">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">{title}</span>
            </div>
        </div>
    );
};

export default Category;
