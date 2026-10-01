import React from 'react';
import Navbar from '../Navbar/Navbar';
import { AiOutlineArrowRight, AiOutlineHeart, AiOutlineUsergroupAdd, AiOutlineCalendar } from 'react-icons/ai';
import { BiChat, BiBriefcaseAlt } from 'react-icons/bi';
// import heroImage from '../../assets/service-1.png'; // reuse or add a new image

const Solutions = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-950 text-white py-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              A digital software that helps individuals{' '}
              <span className="text-blue-500">navigate loneliness</span>, Life transitions, Marriage and Business Planning
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              SingleHub brings people together — whether you're seeking meaningful connection, 
              support during life changes, building a relationship, or growing your business.
            </p>
            <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3 transition">
              Start Your Journey Today
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Four Main Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Everything you need in one place</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-4xl mb-6">
                <AiOutlineHeart />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Combat Loneliness</h3>
              <p className="text-gray-600">
                Connect with like-minded people, join meaningful conversations, and build real friendships in a safe, supportive community.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-4xl mb-6">
                <AiOutlineUsergroupAdd />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Life Transitions</h3>
              <p className="text-gray-600">
                Moving to a new city? Career change? Divorce? Retirement? Find guidance, support groups, and people who truly understand.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-4xl mb-6">
                <BiChat />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Marriage & Relationships</h3>
              <p className="text-gray-600">
                Meet compatible partners, get relationship advice, premarital counseling, and tools to build strong, lasting marriages.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-4xl mb-6">
                <BiBriefcaseAlt />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Business Planning</h3>
              <p className="text-gray-600">
                Find mentors, business partners, investors, and a community that helps turn your ideas into successful ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How SingleHub Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-6">1</div>
              <h4 className="font-semibold text-xl mb-3">Create Your Profile</h4>
              <p className="text-gray-600">Tell us about yourself, your current situation, and what you're looking for.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-6">2</div>
              <h4 className="font-semibold text-xl mb-3">Connect & Chat</h4>
              <p className="text-gray-600">Meet verified people who share similar goals and life stages.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-6">3</div>
              <h4 className="font-semibold text-xl mb-3">Grow Together</h4>
              <p className="text-gray-600">Build real relationships, get support, and achieve your personal or business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to take the next step?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Join thousands of people who are no longer navigating life alone.
          </p>
          <button className="bg-white text-green-950 hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 transition">
            Get Started for Free
            <AiOutlineArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;