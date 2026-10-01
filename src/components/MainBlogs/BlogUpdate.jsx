import React from 'react';
import { BiMessage } from 'react-icons/bi';

const BlogUpdate = () => {
  return (
    <div className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <button className="flex items-center gap-3 bg-white/90 hover:bg-white text-green-700 font-semibold text-sm uppercase tracking-widest px-8 py-3.5 rounded-3xl transition-all duration-300 shadow-lg hover:shadow-xl">
            <BiMessage className="text-xl" />
            Stay Updated
          </button>

          {/* Heading */}
          <h2 className="mt-10 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Get the latest SingleHub Insights
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
            Subscribe to our newsletter and receive expert tips, heartfelt stories, and practical guidance 
            to help you overcome loneliness, navigate life transitions, build strong relationships, and grow.
          </p>

          {/* Newsletter Form */}
          <div className="mt-12 w-full max-w-lg">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white bg-white text-lg placeholder:text-gray-500"
              />
              <button className="bg-white hover:bg-green-50 text-green-700 font-semibold px-10 py-4 rounded-2xl transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-white/70 text-sm mt-4">
              Join 2,500+ people receiving weekly insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogUpdate;