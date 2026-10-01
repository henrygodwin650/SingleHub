import React from 'react';
import { BiSolidFileDoc } from 'react-icons/bi';

const BlogContact = () => {
  return (
    <div className="bg-green-900 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
          
          {/* Icon */}
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8">
            <BiSolidFileDoc className="text-5xl text-white/80" />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            No articles found
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed">
            We couldn't find any articles matching your criteria right now.
          </p>
          <p className="text-gray-400 mt-2 text-base">
            Try changing your search term or exploring different categories.
          </p>

          {/* Action Button */}
          <button 
            className="mt-10 bg-white text-green-900 font-semibold px-8 py-3.5 rounded-2xl hover:bg-green-50 transition-all duration-300"
          >
            Browse All Articles
          </button>

          {/* Optional Help Text */}
          <p className="text-gray-500 text-sm mt-12">
            Need help finding something specific? 
            <span className="text-green-400 hover:underline cursor-pointer"> Contact our team</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogContact;