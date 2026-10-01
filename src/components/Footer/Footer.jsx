import React from 'react';
import ImgLogo from '../../assets/logo/logo.png'
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-3xl flex gap-2 mb-14 justify-start -ms-3 font-bold ">
          <img src={ImgLogo} alt="" width='50px' className="inline" />
          SingleHub
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Product</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition">Source & Attract</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Evaluate & Collaborate</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Automate & Hire</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Onboard & Manage</a></li>
              <li><a href="#" className="hover:text-green-400 transition">All Features</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Platform</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Why SingleHub</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Partners & Integrations</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Resources</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition">Job Descriptions</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Hiring Templates</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Career Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6">SingleHub</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition">About</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Press</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Work with Us</a></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-800 ">
          
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} SingleHub. All rights reserved.
        </div>
        <div className="flex lg:text-4xl gap-3 text-2xl">
          <p className="hover:text-green-500">
            <AiOutlineWhatsApp />
          </p>
          <p className="hover:text-green-500">
            <AiOutlineLinkedin />
          </p>
          <p className="hover:text-green-500">
            <AiOutlineFacebook />
          </p>
          <p className="hover:text-green-500">
            <AiOutlineTwitter />
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;