import React from 'react';
import { EntityType, TabType } from '../types';
import { ENTITY_TYPES, TABS } from '../constants';

interface FilterSectionProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  activeEntity: EntityType;
  setActiveEntity: (entity: EntityType) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ 
  activeTab, 
  setActiveTab, 
  activeEntity, 
  setActiveEntity 
}) => {
  return (
    <div className="bg-white px-6 pt-4 pb-2 border-b border-gray-200">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-end">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-1.5 text-sm font-medium rounded-md border transition-colors
              ${activeTab === tab 
                ? 'bg-[#0091ea] text-white border-[#0091ea]' 
                : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Entity Radio Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 pb-4">
        {ENTITY_TYPES.map((entity) => (
          <label key={entity} className="flex items-center space-x-2 cursor-pointer group">
            <div className={`
              w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
              ${activeEntity === entity ? 'border-[#0091ea]' : 'border-gray-300 group-hover:border-gray-400'}
            `}>
              {activeEntity === entity && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#0091ea]" />
              )}
            </div>
            <input 
              type="radio" 
              name="entityType" 
              className="hidden"
              checked={activeEntity === entity}
              onChange={() => setActiveEntity(entity)}
            />
            <span className={`text-sm ${activeEntity === entity ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
              {entity}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;