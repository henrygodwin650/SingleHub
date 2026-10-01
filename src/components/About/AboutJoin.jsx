import React from 'react';
import { BiBuildings, BiBriefcaseAlt2, BiCheckShield } from 'react-icons/bi';

const AboutJoin = () => {
  return (
    <div className="bg-blue-700 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side */}
          <div className="text-white max-w-lg">
            <p className="uppercase font-bold tracking-widest mb-3">Join Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Modern lives deserve modern support.
            </h2>
            <p className="mt-5 text-lg text-blue-100">
              If you're ready to build real connections, overcome loneliness, and grow — 
              SingleHub is ready for you.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl font-semibold transition">
                Create Account
              </button>
              <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition">
                See Plans
              </button>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="bg-white rounded-3xl p-8 md:p-10 w-full lg:w-auto">
            <div className="space-y-6 text-gray-800">
              <div className="flex items-start gap-4">
                <BiBuildings className="text-3xl text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Built for real people</p>
                  <p className="text-sm text-gray-600">From individuals to communities</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BiBriefcaseAlt2 className="text-3xl text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Seamless experience</p>
                  <p className="text-sm text-gray-600">Easy to join and start connecting</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BiCheckShield className="text-3xl text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Privacy & Safety First</p>
                  <p className="text-sm text-gray-600">Your data and conversations are protected</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutJoin;