import React from 'react';
import { ChevronLeft, Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0091ea] text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-medium tracking-wide">Receipts</h1>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-blue-100 transition-colors">
            <Home size={18} />
            <span className="text-sm font-medium">Home</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-100 transition-colors bg-blue-600/30 px-3 py-1 rounded">
            <ChevronLeft size={18} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;