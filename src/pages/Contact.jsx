
const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <p className="text-gray-700">123 Jewelry Street, Cityville, State, Country</p>
            </div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <p className="text-gray-700">Phone: +1 234 567 8901</p>
            </div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <p className="text-gray-700">Email: info@bharatijewelry.com</p>
            </div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <p className="text-gray-700">Opening Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="p-6 bg-gray-100 flex justify-center items-center">
            <a href="/" className="text-gray-600 hover:text-gray-800 mx-4 transition duration-300 ease-in-out transform hover:scale-105">
              Home
            </a>
            <a href="about" className="text-gray-600 hover:text-gray-800 mx-4 transition duration-300 ease-in-out transform hover:scale-105">
              About
            </a>
            <a href="service" className="text-gray-600 hover:text-gray-800 mx-4 transition duration-300 ease-in-out transform hover:scale-105">
              Services
            </a>
            <a href="contact" className="text-gray-600 hover:text-gray-800 mx-4 transition duration-300 ease-in-out transform hover:scale-105">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
