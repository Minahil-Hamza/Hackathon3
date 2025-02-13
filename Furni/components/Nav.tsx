"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Logo } from './Logo';
import { VscAccount } from "react-icons/vsc";


const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-black text-white">
      <nav className="bg-white text-black">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold"><Logo /></div>

          {/* Hamburger Menu Icon (Visible on Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

          {/* Navigation Links (Visible on Desktop) */}
          <ul className="hidden md:flex space-x-8">
            <li className="hover:text-gray-700">
              <Link href="/products">Plants</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/products">Ceramics</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/products">Table</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/products">Chairs</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/products">Crokery</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/products">Tablesware</Link>
            </li>
          </ul>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-700" />
            </Link>
            <Link href="/login">
              <VscAccount className="text-xl cursor-pointer hover:text-gray-700" />
            </Link>
          </div>
        </div>

        {/* Sidebar (Visible on Mobile) */}
        <div className={`fixed inset-y-0 left-0 bg-white text-black w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
          <div className="p-4">
            <button onClick={toggleSidebar} className="mb-4">
              <FaTimes className="text-xl" />
            </button>
            <ul className="space-y-4">
              <li className="hover:text-gray-700">
                <Link href="/products">Plants</Link>
              </li>
              <li className="hover:text-gray-700">
                <Link href="/products">Ceramics</Link>
              </li>
              <li className="hover:text-gray-700">
                <Link href="/products">Table</Link>
              </li>
              <li className="hover:text-gray-700">
                <Link href="/products">Chairs</Link>
              </li>
              <li className="hover:text-gray-700">
                <Link href="/products">Crokery</Link>
              </li>
              <li className="hover:text-gray-700">
                <Link href="/products">Tablesware</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;