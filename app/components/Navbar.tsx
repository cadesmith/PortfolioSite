"use client";
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'

// Fonts
import { bebas } from "../fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black mt-4 mb-2 mx-4 sm:mx-8 h-16 flex justify-between items-center">
      <div className="hidden sm:flex">
        <h1 className={bebas.className}>CADE SMITH</h1>
      </div>
      <div className="flex sm:hidden">
        <h1 className={bebas.className}>CS</h1>
      </div>

      <div className="lg:hidden mb-1.5">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className='w-6 h-6'
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex space-x-6 text-sm mb-2 lg:pr-4">
        <Link href="/" className="text-white hover:text-gray-400">HOME</Link>
        <Link href="/projects" className="text-white hover:text-gray-400">PROJECTS</Link>
        <Link href="/art" className="text-white hover:text-gray-400">ART</Link>
        <Link href="/about" className="text-white hover:text-gray-400">ABOUT</Link>
      </div>

      <div
        className={`lg:hidden absolute top-16 mt-6 border-t-2 border-white z-50 left-0 w-full bg-black text-white overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-start text-sm space-y-4 p-4">
          <Link href="/" className="text-white hover:text-gray-400" onClick={closeMenu}>HOME</Link>
          <Link href="/projects" className="text-white hover:text-gray-400" onClick={closeMenu}>PROJECTS</Link>
          <Link href="/art" className="text-white hover:text-gray-400" onClick={closeMenu}>ART</Link>
          <Link href="/about" className="text-white hover:text-gray-400" onClick={closeMenu}>ABOUT</Link>
        </div>
      </div>
    </nav>
  );
}
