import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BlogPrice = () => {
  return (
    <div className="my-16 bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ready to transform your life and connections?
          </h2>

          {/* Subheading */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Join thousands of people who are no longer navigating loneliness, life transitions, 
            marriage, and personal growth alone. Start your journey with SingleHub today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 transition-all duration-300">
              Start Free Trial
              <AiOutlineArrowRight />
            </button>

            <button className="border border-gray-400 hover:border-gray-600 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
              View Pricing
            </button>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-gray-500">
            Trusted by individuals, couples, and communities across Nigeria and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPrice;