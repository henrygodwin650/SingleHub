import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const AboutFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is SingleHub?",
      answer: "SingleHub is a digital platform designed to help individuals overcome loneliness, navigate major life transitions, build meaningful relationships and marriages, and grow personally or in business."
    },
    {
      question: "Who is SingleHub for?",
      answer: "Anyone feeling lonely, going through a life change (divorce, relocation, career shift, loss), looking for a meaningful relationship or marriage, or seeking community and mentorship for personal or business growth."
    },
    {
      question: "Is SingleHub safe and private?",
      answer: "Yes. We use enterprise-grade security and strict privacy policies. Your conversations and personal information are protected and never shared without your consent."
    },
    {
      question: "How does SingleHub help with loneliness?",
      answer: "We connect you with like-minded people through meaningful chat, voice calls, support groups, and community events. Our goal is to help you build real, lasting connections."
    },
    {
      question: "Can I use SingleHub for marriage and relationships?",
      answer: "Absolutely. We offer tools for meeting compatible partners, relationship advice, premarital guidance, and resources to strengthen marriages."
    },
    {
      question: "Is there a cost to use SingleHub?",
      answer: "You can start for free. We also offer premium features and personalized support through subscription plans."
    },
    {
      question: "Where is SingleHub available?",
      answer: "SingleHub is available globally. We currently have a strong and growing community in Nigeria and across Africa."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to know about SingleHub
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
              >
                <span className="font-medium text-gray-900 text-lg pr-6 text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <AiOutlineMinus className="text-green-600 text-xl flex-shrink-0" />
                ) : (
                  <AiOutlinePlus className="text-green-600 text-xl flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-4 text-gray-600 leading-relaxed border-t border-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="text-green-600 font-medium hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFAQ;