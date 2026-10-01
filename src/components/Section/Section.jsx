import React from 'react';
import Slider from 'react-slick';
import Parterns from './Parterns.jsx';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Image1 from '../../assets/testimonials/client-1.jpg';
import Image2 from '../../assets/testimonials/client-2.jpg';
import Image3 from '../../assets/testimonials/client-3.jpg';
import Image4 from '../../assets/testimonials/client-4.jpg';
import Image5 from '../../assets/testimonials/client-5.jpg';

const Section = () => {
  const testimonials = [
    {
      id: 1,
      img: Image1,
      subtitle: "Helping people overcome loneliness",
      quote: "SingleHub helped me find genuine friends and meaningful conversations after moving to a new city. I no longer feel alone.",
      name: "Amaka Nwosu",
      position: "Community Member, Benin City",
      linkText: "READ MORE SUCCESS STORIES",
    },
    {
      id: 2,
      img: Image2,
      subtitle: "Support during life transitions",
      quote: "Going through a divorce was tough. Through SingleHub I found a support group and people who truly understood what I was experiencing.",
      name: "Chinedu Okoro",
      position: "Entrepreneur & Single Parent",
      linkText: "READ MORE SUCCESS STORIES",
    },
    {
      id: 3,
      img: Image3,
      subtitle: "Building meaningful relationships",
      quote: "I met my fiancé on SingleHub. The platform made it easy to connect with someone who shares my values and life goals.",
      name: "Fatima Ibrahim",
      position: "Teacher, Edo State",
      linkText: "READ MORE SUCCESS STORIES",
    },
    {
      id: 4,
      img: Image4,
      subtitle: "Marriage preparation & guidance",
      quote: "We used SingleHub’s relationship tools and counseling resources before getting married. It strengthened our foundation tremendously.",
      name: "Mr. & Mrs. Adebayo",
      position: "Newly Married Couple",
      linkText: "READ MORE SUCCESS STORIES",
    },
    {
      id: 5,
      img: Image5,
      subtitle: "Business planning & networking",
      quote: "I found my business partner and mentor through SingleHub. The platform helped us turn our idea into a thriving startup.",
      name: "Emmanuel Okafor",
      position: "Founder, TechStart NG",
      linkText: "READ MORE SUCCESS STORIES",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
  };

  return (
    <div className="relative">
      {/* Top Wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
        <path
          fill="#032712"
          fillOpacity="1"
          d="M0,32L48,48C96,64,192,96,288,133.3C384,171,480,213,576,202.7C672,192,768,128,864,133.3C960,139,1056,213,1152,234.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Main Testimonial Section */}
      <div className="bg-[#032712] pb-16 pt-8 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl mx-auto -mt-20 sm:-mt-28 lg:-mt-32 relative z-10 overflow-hidden">
            
            <div className="text-center pt-12 pb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 px-4">
                Real people. Real connections. Real growth.
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto px-4">
                A digital software that helps individuals navigate loneliness, 
                life transitions, marriage and business planning
              </p>
            </div>

            <Slider {...settings}>
              {testimonials.map((item) => (
                <div key={item.id} className="px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left - Profile */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-green-600 shadow-lg"
                      />
                      <div className="mt-6">
                        <h3 className="font-bold text-2xl text-gray-900">{item.name}</h3>
                        <p className="text-green-700 font-medium mt-1">{item.position}</p>
                      </div>
                    </div>

                    {/* Right - Quote */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                      <p className="text-green-700 font-semibold text-lg mb-5">
                        {item.subtitle}
                      </p>
                      <blockquote className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed italic">
                        “{item.quote}”
                      </blockquote>

                      <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-10 text-blue-600 hover:text-blue-700 font-semibold text-sm uppercase tracking-widest transition-colors"
                      >
                        {item.linkText} 
                        <AiOutlineArrowRight className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Partners */}
            <div className="border-t border-gray-100 pt-10 pb-8 px-6 sm:px-10">
              <Parterns />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full -mt-1">
        <path
          fill="#032712"
          fillOpacity="1"
          d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,176C672,171,768,117,864,117.3C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  );
};

export default Section;