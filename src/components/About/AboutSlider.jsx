import React from 'react';
import Slider from 'react-slick';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Image1 from '../../assets/testimonials/client-1.jpg';
import Image2 from '../../assets/testimonials/client-2.jpg';
import Image3 from '../../assets/testimonials/client-3.jpg';
import Image4 from '../../assets/testimonials/client-4.jpg';
import Image5 from '../../assets/testimonials/client-5.jpg';

const AboutSlider = () => {
  const testimonials = [
    {
      id: 1,
      img: Image1,
      subtitle: "Helping people overcome loneliness",
      quote: "SingleHub helped me find genuine friends and meaningful conversations after moving to a new city. I no longer feel alone.",
      name: "Amaka Nwosu",
      position: "Community Member, Benin City",
    },
    {
      id: 2,
      img: Image2,
      subtitle: "Support during life transitions",
      quote: "Going through a divorce was tough. Through SingleHub I found a support group and people who truly understood what I was experiencing.",
      name: "Chinedu Okoro",
      position: "Entrepreneur & Single Parent",
    },
    {
      id: 3,
      img: Image3,
      subtitle: "Building meaningful relationships",
      quote: "I met my fiancé on SingleHub. The platform made it easy to connect with someone who shares my values and life goals.",
      name: "Fatima Ibrahim",
      position: "Teacher, Edo State",
    },
    {
      id: 4,
      img: Image4,
      subtitle: "Marriage preparation & guidance",
      quote: "We used SingleHub’s relationship tools before getting married. It strengthened our foundation tremendously.",
      name: "Mr. & Mrs. Adebayo",
      position: "Newly Married Couple",
    },
    {
      id: 5,
      img: Image5,
      subtitle: "Business planning & networking",
      quote: "I found my business partner through SingleHub. The platform helped us turn our idea into a thriving startup.",
      name: "Emmanuel Okafor",
      position: "Founder, TechStart NG",
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
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase font-bold text-green-600 tracking-widest text-sm">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Real people. Real connections. Real growth.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <Slider {...settings}>
              {testimonials.map((item) => (
                <div key={item.id} className="px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Profile Image & Info */}
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

                    {/* Quote */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                      <p className="text-green-700 font-semibold text-lg mb-5">
                        {item.subtitle}
                      </p>
                      <blockquote className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed italic">
                        “{item.quote}”
                      </blockquote>

                      <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-10 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Read Full Story 
                        <AiOutlineArrowRight className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;