import React from 'react';
import { FaHandshake } from 'react-icons/fa';   // ← Best icon for Partnerships

const ContactBlog = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="bg-green-100 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
        <div className="max-w-2xl mx-auto">
          
          {/* Icon Button */}
          <button className="inline-flex items-center gap-3 bg-white hover:bg-green-50 text-green-700 font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg">
            <FaHandshake className="text-3xl" />
            Partnerships
          </button>

          {/* Heading */}
          <h2 className="mt-10 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Let's Build Something Together
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg mx-auto">
            We welcome partnerships with organizations, counselors, churches, NGOs, businesses, 
            and community leaders who share our vision of helping people overcome loneliness, 
            navigate life transitions, build strong marriages, and grow together.
          </p>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300 flex items-center gap-3 mx-auto">
              Become a Partner
              <FaHandshake className="text-xl" />
            </button>
          </div>

          {/* Trust line */}
          <p className="mt-12 text-sm text-gray-500">
            Join other organizations already working with SingleHub to create meaningful impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBlog;