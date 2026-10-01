import React from 'react';
import { BiBookOpen } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

const BlogCard = () => {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-green-950 text-white">
      <div className="bg-gradient-to-br from-blue-600 to-green-700 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-10">

          {/* Badge */}
          <button className="flex items-center gap-3 bg-white/90 hover:bg-white text-green-700 font-semibold text-sm uppercase tracking-widest px-8 py-3.5 rounded-3xl transition-all duration-300 shadow-lg">
            <BiBookOpen className="text-xl" />
            SingleHub Insights
          </button>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Chat, Grow, Engage: <br />
            SingleHub Technology Insights
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Discover expert advice on overcoming loneliness, navigating life transitions, 
            building strong marriages, and growing your personal or business life.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-lg mt-6">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700">
              <AiOutlineSearch className="text-2xl" />
            </div>
            <input
              type="text"
              placeholder="Search articles, topics, or insights..."
              className="w-full bg-white text-gray-900 pl-14 pr-6 py-4 rounded-3xl focus:outline-none focus:ring-4 focus:ring-white/50 text-lg placeholder:text-gray-500"
            />
          </div>

          {/* Optional Hint */}
          <p className="text-white/60 text-sm mt-3">
            Try searching: loneliness, marriage, business growth, life transition
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;