import React from 'react';
import { BiCompass, BiHeart, BiCheckShield } from 'react-icons/bi';

const AboutCard = () => {
  const principles = [
    {
      icon: BiCompass,
      color: "bg-blue-600",
      title: "Clarity",
      description: "Simple, intuitive design so you can focus on what matters most — building real connections.",
    },
    {
      icon: BiHeart,
      color: "bg-teal-600",
      title: "Care",
      description: "Every feature is built with empathy, creating a safe and supportive space for meaningful relationships.",
    },
    {
      icon: BiCheckShield,
      color: "bg-orange-600",
      title: "Trust",
      description: "Your privacy and security come first. We protect your data and conversations with enterprise-grade standards.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="font-bold text-green-600 uppercase tracking-widest text-sm">
            Our Principles
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3 leading-tight">
            A product philosophy inspired by human connection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 hover:border-green-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl group"
              >
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110`}>
                  <Icon className="text-4xl" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;