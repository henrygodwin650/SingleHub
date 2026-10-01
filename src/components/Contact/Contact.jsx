import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';

import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import ContactBlog from './ContactBlog';

import { BiMessage } from 'react-icons/bi';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-green-950 text-white">
      <Navbar />

      <div className="container mx-auto bg-green-900 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mb-20">
          
          {/* Left - Headline */}
          <div className="flex flex-col items-start max-w-xl text-center lg:text-left">
            <button className="flex items-center gap-3 bg-white text-green-950 font-semibold text-xl px-8 py-4 rounded-full hover:bg-green-100 transition">
              <BiMessage className="text-2xl" />
              Contact SingleHub
            </button>

            <h1 className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              We're here to help you navigate life's important journeys
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Whether you're feeling lonely, going through a life transition, preparing for marriage, 
              or planning your next chapter — our team is ready to support you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button className="bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition">
                Start Free Trial
              </button>
              <button className="border border-white/70 hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg transition">
                Learn About Us
              </button>
            </div>
          </div>

          {/* Right - Contact Info Cards */}
          <div className="w-full max-w-md flex flex-col gap-6">
            {/* Email */}
            <div className="bg-white text-gray-900 rounded-3xl p-8 flex gap-6">
              <div className="bg-green-100 text-green-700 w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-3xl">
                <AiOutlineMail />
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-1">Email Us</h3>
                <a href="mailto:youhouhh@gmail.com" className="text-green-700 font-medium text-lg hover:underline">
                  youhouhh@gmail.com
                </a>
                <p className="text-gray-600 mt-2 text-sm">We'll reply within a few hours.</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white text-gray-900 rounded-3xl p-8 flex gap-6">
              <div className="bg-green-100 text-green-700 w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-3xl">
                <AiOutlineWhatsApp />
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-1">WhatsApp Us</h3>
                <a href="https://calendly.com/youhouhh/30min" className="text-green-700 font-medium text-lg hover:underline">
                  chat with us on WhatsApp
                </a>
                <p className="text-gray-600 mt-2 text-sm">Monday to Friday, 9am – 5pm</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white text-gray-900 rounded-3xl p-8 flex gap-6">
              <div className="bg-green-100 text-green-700 w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-3xl">
                <AiOutlineEnvironment />
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-1">Visit Us</h3>
                <p className="font-medium">Remote-first team</p>
                <p className="text-gray-600 mt-2 text-sm">Open Monday – Friday, 9am – 5pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Hours / Location Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center">
            <h3 className="font-bold text-2xl mb-3">Support Hours</h3>
            <p className="text-white/80">24 hours a day, 7 days a week</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center">
            <h3 className="font-bold text-2xl mb-3">Location</h3>
            <p className="text-white/80">Remote-first team</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center">
            <h3 className="font-bold text-2xl mb-3">Response Time</h3>
            <p className="text-white/80">Under 24 hours for email • Instant for live chat</p>
          </div>
        </div>

        {/* Form, Support Channels & Partnerships */}
        <ContactForm />
        <ContactCard />
        <ContactBlog />

      </div>

      <Footer />
    </div>
  );
};

export default Contact;