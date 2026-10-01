import React, { useState } from 'react';
import { Link } from 'react-router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/logo/logo.png'; // adjust path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-green-950/95 backdrop-blur-md border-b border-green-800/40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-2.5 font-bold text-xl sm:text-2xl text-white">
              <img
                src={logo}
                alt="SingleHub"
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/44?text=SH'; }}
              />
              SingleHub
            </Link>

            <div className="hidden lg:flex items-center gap-8 text-white font-medium">
              <Link to="/" className="text-green-400 transition">Home</Link>
              <Link to="/about" className="hover:text-green-400 transition">About</Link>
              <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
              <Link to="/blogs" className="hover:text-green-400 transition">Blogs</Link>
            </div>

            <button
              className="lg:hidden text-white text-3xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-green-950/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6 text-white">
            <div className="flex justify-between items-center mb-12">
              <Link to="/" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
                SingleHub
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <AiOutlineClose className="text-3xl" />
              </button>
            </div>

            <div className="flex flex-col gap-10 text-xl font-medium">
              <Link to="/" className="text-green-400 transition">
              Home
              </Link>

              <Link to="/about" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>
              About
              </Link>

              <Link to="/contact" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>
              Contact
              </Link>
              
              <Link to="/blogs" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Blogs</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;