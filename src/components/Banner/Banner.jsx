import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { BiHeadphone, BiKey, BiPhone, BiPieChartAlt, BiHighlight } from 'react-icons/bi';

const features = [
  { 
    icon: AiOutlineWechat, 
    title: "Build Real Connections", 
    desc: "Chat, call, and connect with like-minded people who understand your journey — from overcoming loneliness to building meaningful relationships." 
  },
  { 
    icon: BiHeadphone, 
    title: "24/7 Caring Support", 
    desc: "Our compassionate support team is always here to help you navigate tough life transitions, relationship challenges, or personal growth." 
  },
  { 
    icon: BiKey, 
    title: "Safe & Private Space", 
    desc: "Your conversations, stories, and personal information are protected with enterprise-grade security and privacy." 
  },
  { 
    icon: BiPhone, 
    title: "Guided Onboarding", 
    desc: "Get personalized help to create your profile and find the right people — whether you're seeking friendship, love, or business partners." 
  },
  { 
    icon: BiPieChartAlt, 
    title: "Expert Guidance", 
    desc: "Access thousands of resources, relationship advice, marriage preparation tools, and business planning templates created by experts." 
  },
  { 
    icon: BiHighlight, 
    title: "Simple & Beautiful", 
    desc: "Designed to be warm, intuitive, and easy to use — so you can focus on what matters most: genuine human connection." 
  },
];

const Banner = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 leading-tight">
          More reasons people around the world choose{' '}
          <span className="text-green-500">SingleHub</span>
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-3 mb-12 text-lg">
          A digital software that helps individuals navigate loneliness, 
          life transitions, marriage and business planning
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center px-6 py-10 rounded-2xl bg-white/5 border border-green-800/30 hover:border-green-600/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6">
                  <Icon className="text-7xl sm:text-8xl text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;