const HandleShare = ({ card }) => {
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
  
    return (
      <button
        onClick={handleShare}
        className="bg-blue-500 text-white py-2 px-4 mr-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Share
      </button>
    );
  };
 
  export default HandleShare;
  