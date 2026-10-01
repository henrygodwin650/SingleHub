import React from 'react';
import { BiMessage, BiPhone, BiMailSend, BiTime } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ContactCard = () => {
  const supportOptions = [
    {
      icon: BiMessage,
      title: "Live Chat",
      description: "Get instant help from our friendly team. Usually responds in under 2 minutes.",
      link: "#",
      linkText: "Start Live Chat",
    },
    {
      icon: BiPhone,
      title: "Whatsapp Call",
      description: "Speak directly with someone who truly understands your situation.",
      link: "https://calendly.com/youhouhh/30min",
      linkText: "Call Now",
    },
    {
      icon: BiMailSend,
      title: "Email Support",
      description: "Detailed written responses from our support specialists.",
      link: "mailto:youhouhh@gmail.com",
      linkText: "Send Email",
    },
    {
      icon: BiTime,
      title: "Schedule a Call",
      description: "Book a personal 30-minute call at your convenient time.",
      link: "https://calendly.com/youhouhh/30min",
      linkText: "Book a Time",
    },
  ];

  return (
    <div className="bg-white shadow-xl rounded-3xl p-6 md:p-10 lg:p-12 mx-4 md:mx-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="uppercase font-bold text-green-600 tracking-widest text-sm">
            Beyond Email
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-3 leading-tight">
            Pick the support channel that fits your pace
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg mx-auto text-base md:text-lg">
            Whether you're navigating loneliness, life transitions, marriage, or business growth —
            we're here to support you in the way that feels most comfortable.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:border-green-500 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
              >
                {/* Icon */}
                <div className="bg-green-100 text-green-700 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-3">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-relaxed flex-grow">
                  {option.description}
                </p>

                {/* Link */}
                <a
                  href={option.link}
                  className="mt-6 inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-800 transition-colors group-hover:gap-3"
                >
                  {option.linkText}
                  <AiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;