import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Image1 from '../../assets/portfolio/portfolio-3.jpg';
import Image2 from '../../assets/portfolio/portfolio-7.jpg';
import Image3 from '../../assets/portfolio/portfolio-6.jpg';

const Category = () => {
  const features = [
    {
      image: Image1,
      category: "Connect & Chat",
      title: "Overcome Loneliness",
      description: "Find genuine friends and meaningful conversations. Chat, call, and build real connections with people who understand you.",
      color: "text-green-700",
    },
    {
      image: Image2,
      category: "Life Transitions",
      title: "Navigate Life Changes",
      description: "Going through a breakup, relocation, career shift, or any major life change? Get support, guidance, and a community that cares.",
      color: "text-green-700",
    },
    {
      image: Image3,
      category: "Marriage & Growth",
      title: "Build Lasting Relationships",
      description: "Find compatible partners, prepare for marriage, strengthen relationships, and get tools for both personal and business growth.",
      color: "text-green-700",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - Aligned with Hero Title */}
        <div className="flex justify-center items-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center max-w-3xl leading-tight">
            A digital software that helps individuals navigate loneliness, 
            life transitions, marriage and business planning
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className={`block uppercase text-sm font-bold tracking-widest mb-3 ${item.color}`}>
                  {item.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group-hover:gap-3"
                >
                  Learn more
                  <AiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;