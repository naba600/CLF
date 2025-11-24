import React from 'react';
import { Briefcase, Landmark } from 'lucide-react';

const StatsBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-end space-x-8">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-green-100 rounded-full text-green-600">
          <Briefcase size={20} />
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-800">₹87,373.00</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">Cash In Hand</div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-100 rounded-full text-blue-600">
          <Landmark size={20} />
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-800">₹11,67,585.80</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">Cash at Bank</div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;