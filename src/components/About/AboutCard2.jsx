import React from 'react';
import Img1 from '../../assets/portfolio/portfolio-1.jpg';
import Img2 from '../../assets/portfolio/portfolio-3.jpg';
import Img3 from '../../assets/portfolio/portfolio-7.jpg';

const AboutCard2 = () => {
  const roadmap = [
    {
      year: "2021",
      title: "The Beginning",
      description: "SingleHub was born from a simple idea — to help people overcome loneliness and build meaningful connections.",
      image: Img1,
    },
    {
      year: "2023",
      title: "Community Growth",
      description: "Expanded features for life transitions, relationship building, and early marriage support tools.",
      image: Img2,
    },
    {
      year: "2026",
      title: "Scaling Impact",
      description: "Advanced matching, group support, business networking, and global community features.",
      image: Img3,
    },
  ];

  return (
    <div className="bg-teal-600 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase font-bold text-teal-200 tracking-widest text-sm">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
            Built with purpose, refined by real stories
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <p className="text-4xl font-bold text-white mb-2">{item.year}</p>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-teal-100 text-[15px] leading-relaxed flex-grow">
                  {item.description}
                </p>

                <div className="mt-6 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard2;