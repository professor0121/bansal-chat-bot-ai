import React from 'react';
import { School } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <School size={32} />
          <div>
            <h1 className="text-2xl font-bold">Bansal Group of Institution</h1>
            <p className="text-blue-200">Bhopal, Madhya Pradesh</p>
          </div>
        </div>
        <nav className=" md:flex space-x-6">

          <a href="https://bgibhopal.com/" className="hover:text-blue-200 transition-colors">About</a>
          <a href="https://bgibhopal.com/online-fee-payment/" className="hover:text-blue-200 transition-colors">Courses</a>
          <a href="https://bgibhopal.com/online-fee-payment/" className="hover:text-blue-200 transition-colors">Admissions</a>
          <a href="https://bgibhopal.com/" className="hover:text-blue-200 transition-colors">Contact</a>
          <a href="https://bgibhopal.com/examination/" className="hover:text-blue-200 transition-colors">Result</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;