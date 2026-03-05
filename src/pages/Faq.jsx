import React, { useState, useRef, useEffect } from "react";
import styles from "../css/Faq.module.css";
// Sample FAQ data
const faqsData = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase."
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, we provide 24/7 technical support via chat and email."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade or downgrade anytime from your account."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade or downgrade anytime from your account."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade or downgrade anytime from your account."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade or downgrade anytime from your account."
  }
];

// FAQ Item component
const FAQItem = ({ faq, isOpen, toggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={`${styles.faqItem} border border-gray-300 rounded-lg mb-4 overflow-hidden transition-all duration-300`}>
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
      >
        <h3 className="text-left text-gray-800 font-medium">{faq.question}</h3>
        <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-max-height duration-300 px-4"
      >
        <p className="py-3 text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]); // allows multiple open

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className={`${styles.faq} max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12`}>
      {/* Left side: Accordion */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        {faqsData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndexes.includes(index)}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>

      {/* Right side: Image */}
      <div className="lg:w-1/2 flex justify-center items-start">
        <img
          src="https://backend.coreops.ai/wp-content/uploads/2025/06/Faq.png"
          alt="FAQ Illustration"
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>
    </div>
  );
};

export default FAQ;