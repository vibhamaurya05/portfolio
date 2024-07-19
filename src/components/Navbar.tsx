"use client";
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed w-full top-0 bg-[#080818] shadow-2xl p-3 text-[#e6e6d4] z-50'>
      <div className='flex justify-between items-center sm:px-16 md:px-20'>
        {/* Responsive Logo */}
        <h1 className='text-4xl font-semibold hidden sm:block  shadow-2xl'>Vibha Maurya</h1>
        <h1 className='text-3xl font-semibold sm:hidden'>Vibha</h1>
        
        {/* Menu Button for Small Screens */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
            <div className='space-y-2'>
              <span className={`block w-8 h-1 bg-white transform transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-8 h-1 bg-white transform transition-transform ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-1 bg-white transform transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Navigation for Medium Screens */}
        <nav className='hidden md:flex'>
          <ul className='flex gap-8 text-xl font-semibold'>
            <li><Link href="#home" className="hover:text-cyan-400">Home</Link></li>
            <li><Link href="#skills" className="hover:text-cyan-400">Skills</Link></li>
            <li><Link href="#services" className="hover:text-cyan-400">Services</Link></li>
            <li><Link href="#projects" className="hover:text-cyan-400">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className='md:hidden mt-4'>
          <ul className='flex flex-col gap-4 text-medium font-semibold'>
            <li><Link href="#home" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#skills" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Skills</Link></li>
            <li><Link href="#services" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="#projects" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="#contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;

