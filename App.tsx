import React, { useState } from 'react';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import Sidebar from './components/Sidebar';
import FilterSection from './components/FilterSection';
import ReceiptTable from './components/ReceiptTable';
import AddReceiptModal from './components/AddReceiptModal';
import { INITIAL_ORGS, INITIAL_RECEIPTS } from './constants';
import { EntityType, Receipt, TabType } from './types';

const App: React.FC = () => {
  const [orgs, setOrgs] = useState(INITIAL_ORGS);
  const [receipts, setReceipts] = useState<Receipt[]>(INITIAL_RECEIPTS);
  const [activeTab, setActiveTab] = useState<TabType>(TabType.Receipt);
  const [activeEntity, setActiveEntity] = useState<EntityType>(EntityType.VO);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrgSelect = (id: string) => {
    setOrgs(orgs.map(org => ({
      ...org,
      isSelected: org.id === id
    })));
  };

  const handleAddReceipt = (newReceipt: Receipt) => {
    setReceipts([...receipts, newReceipt]);
  };

  const handleDeleteReceipt = (id: string) => {
    if(window.confirm("Are you sure you want to delete this receipt?")) {
        setReceipts(receipts.filter(r => r.id !== id));
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#f1f5f9]">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:block h-full shadow-lg z-10">
          <Sidebar orgs={orgs} onSelect={handleOrgSelect} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          
          <StatsBar />
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
            
            <FilterSection 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeEntity={activeEntity}
              setActiveEntity={setActiveEntity}
            />

            {/* Action Bar */}
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#178598] hover:bg-[#136f80] text-white px-8 py-2.5 rounded shadow-sm text-sm font-medium transition-all transform hover:-translate-y-0.5"
              >
                Add New Receipt
              </button>
            </div>

            <ReceiptTable 
              receipts={receipts} 
              onDelete={handleDeleteReceipt}
            />
            
            {/* Footer / Copyright mock */}
            <div className="mt-8 text-center text-xs text-gray-400 pb-4">
              &copy; 2025 Financial Management System. All rights reserved.
            </div>

          </div>
        </div>
      </div>

      <AddReceiAddReceiptModalptModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddReceipt}
      />
    </div>
  );
};

export default App;