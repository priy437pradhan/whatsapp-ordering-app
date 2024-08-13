// src/components/Accordion.jsx
import { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full py-4 px-6 bg-gradient-to-r  text-black rounded-lg shadow-md focus:outline-none transition-transform duration-300 ${isOpen ? 'transform scale-105' : ''}`}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white text-gray-700 rounded-b-lg shadow-inner transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const faqItems = [
    {
      question: "What is one-gram gold jewelry?",
      answer: "One-gram gold jewelry, also known as imitation or gold-plated jewelry, is made by electroplating a thin layer of gold onto a base metal like copper or brass. It offers the look and feel of real gold at a more affordable price."
    },
    {
      question: "Is one-gram gold jewelry durable?",
      answer: "While one-gram gold jewelry is more affordable than solid gold, its durability depends on how well it's cared for. Avoid exposing it to water, chemicals, or excessive friction to maintain its appearance."
    },
    {
      question: "Do you offer warranties on one-gram gold jewelry?",
      answer: "Yes, we provide warranties on our one-gram gold jewelry to ensure your satisfaction. Our warranty covers manufacturing defects and ensures that you receive a high-quality product."
    },
    {
      question: "How long does shipping take?",
      answer: "We strive to ship orders as quickly as possible. Typically, shipping takes [mention your usual shipping duration, e.g., 2-5 business days], but this may vary based on your location."
    },
    {
      question: "What are your return and exchange policies?",
      answer: "We accept returns and exchanges within [mention your return/exchange period, e.g., 30 days] of purchase, provided the jewelry is in its original condition and packaging. Please refer to our detailed return policy for more information."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, we provide order tracking for all shipments. Once your order is shipped, you will receive a tracking number via email to monitor the status of your delivery."
    },
    {
      question: "Do you offer gift wrapping services?",
      answer: "Yes, we offer complimentary gift wrapping services to add an extra touch of elegance to your purchase. Simply select the gift wrap option during checkout."
    },
    {
      question: "How can I contact customer support?",
      answer: "For any questions or assistance, our customer support team is available [mention your support hours, e.g., Monday to Friday, 9 AM to 5 PM] via email at [your email address] or by phone at [your phone number]."
    },
    {
      question: "How do you ensure the quality of your one-gram gold jewelry?",
      answer: "We take pride in offering high-quality one-gram gold jewelry crafted with precision and care. Each piece undergoes rigorous quality checks to ensure it meets our standards before being made available to our customers."
    },
  ];

  return (
    <div className="max-w-2xl mx-auto my-8">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
