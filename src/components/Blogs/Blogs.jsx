import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ImageBlog from '../../assets/service-2.png'; // adjust path if needed

const Blogs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side - Text */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-green-700 leading-tight">
              Let's grow together
            </h2>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Whether you're looking to overcome loneliness, navigate a major life transition, 
              build a meaningful marriage, or grow your business — SingleHub is here to support you.
            </p>

            <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Join thousands of people who are no longer facing life's challenges alone. 
              Start building real connections and meaningful progress today.
            </p>

            <button className="mt-10 bg-green-800 hover:bg-green-900 text-white px-10 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3 transition shadow-lg">
              Start Your Free Journey 
              <AiOutlineArrowRight className="text-xl" />
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="mt-10 lg:mt-0 flex-shrink-0">
            <img
              src={ImageBlog}
              alt="People growing together on SingleHub"
              className="w-full max-w-md lg:max-w-lg mx-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blogs;