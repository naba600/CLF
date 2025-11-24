import React, { useState } from 'react';
import { Check, Search } from 'lucide-react';
import { Organization } from '../types';

interface SidebarProps {
  orgs: Organization[];
  onSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ orgs, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrgs = orgs.filter(org => 
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    org.code.includes(searchTerm)
  );

  return (
    <div className="w-full md:w-72 bg-white border-r border-gray-200 flex flex-col h-full shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
        </div>
      </div>
      
      <div className="px-4 py-2 bg-blue-50 text-blue-800 font-semibold text-sm border-b border-blue-100">
        List of VO
      </div>

      <div className="overflow-y-auto flex-1 custom-scrollbar p-2 space-y-2">
        {filteredOrgs.map((org, index) => (
          <div 
            key={org.id}
            onClick={() => onSelect(org.id)}
            className={`
              relative p-3 rounded-md cursor-pointer border transition-all duration-200
              ${org.isSelected 
                ? 'bg-white border-green-400 shadow-sm ring-1 ring-green-100' 
                : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:border-gray-200'}
            `}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm font-bold text-gray-700 flex gap-2">
                    <span className="text-gray-400 font-normal">{index + 1}</span> 
                    {org.name}
                </div>
                <div className="text-xs text-gray-500 mt-1 pl-4">( {org.code} )</div>
              </div>
              {org.isSelected && (
                <Check className="text-green-500" size={18} strokeWidth={3} />
              )}
            </div>
          </div>
        ))}
        {filteredOrgs.length === 0 && (
          <div className="text-center text-gray-400 text-sm py-8">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;