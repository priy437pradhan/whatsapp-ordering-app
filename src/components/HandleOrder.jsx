const HandleOrder = ({ card }) => {
    const handleOrder = () => {
      const orderUrl = `https://wa.me/7077817064?text=${encodeURIComponent(
        `Hello, I am interested in the ${card.title}.\n\nCheck it out here: ${window.location.href}`
      )}`;
      window.open(orderUrl, '_blank');
    };
  
    return (
      <button
        onClick={handleOrder}
        className="mt-4 bg-green-700 text-white py-2 px-4  rounded hover:bg-green-600 transition duration-300"
      >
        Order
      </button>
    );
  };
  
  export default HandleOrder;
  