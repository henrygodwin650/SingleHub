import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ImageHero from '../../assets/campanies/bg-2.jpg';

const AboutHeader = () => {
  return (
    <div className="pt-16 xs:pt-20 sm:pt-20 pb-20 bg-green-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <button className="uppercase font-semibold mt-20 bg-white text-green-700 px-6 py-3 rounded-3xl text-sm tracking-widest">
              About SingleHub
            </button>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              We build technology that helps people feel less alone.
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
              SingleHub was created to support individuals navigating loneliness, life transitions, 
              marriage, and personal growth — with meaningful connections at the heart of everything we do.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition">
                Start Free Trial 
                <AiOutlineArrowRight />
              </button>
              <button className="border border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold transition">
                Talk To Our Team
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img 
              src={ImageHero} 
              alt="SingleHub Community" 
              className="rounded-3xl shadow-2xl object-cover w-full max-w-lg lg:max-w-xl" 
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutHeader;