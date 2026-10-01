import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can connect this to your backend or email service later
    alert('Thank you! Your message has been received.');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-blue-600 rounded-3xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Tell us what you need
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Whether you're struggling with loneliness, navigating a life transition, 
              preparing for marriage, or planning your business — we're here to help.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
            {/* Full Name */}
            <div>
              <label className="block text-white font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-5 py-4 rounded-2xl border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-5 py-4 rounded-2xl border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 801 234 5678"
                className="w-full px-5 py-4 rounded-2xl border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-white font-medium mb-2">How can we help you? *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your situation or what you're looking for..."
                className="w-full px-5 py-4 rounded-3xl border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white resize-y"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg px-12 py-4 rounded-2xl transition transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;