import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Receipt } from '../types';

interface AddReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (receipt: Receipt) => void;
}

const AddReceiptModal: React.FC<AddReceiptModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    loanNumber: '',
    amount: '',
    receiptMode: 'Cash' as 'Cash' | 'Bank',
    transactionDate: new Date().toISOString().split('T')[0],
    receiptTowards: 'Community Investment Fund (CIF)',
    remarks: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newReceipt: Receipt = {
      id: Math.random().toString(36).substr(2, 9),
      meetingDate: new Date().toISOString().split('T')[0], // Assuming meeting date is today for demo
      receiptMode: formData.receiptMode,
      receiptTowards: formData.receiptTowards,
      transactionDate: formData.transactionDate,
      amount: parseFloat(formData.amount) || 0,
      remarks: formData.remarks || `Loan Payment - ${formData.loanNumber}`,
      loanNumber: formData.loanNumber
    };

    onAdd(newReceipt);
    
    // Reset form
    setFormData({
      loanNumber: '',
      amount: '',
      receiptMode: 'Cash',
      transactionDate: new Date().toISOString().split('T')[0],
      receiptTowards: 'Community Investment Fund (CIF)',
      remarks: ''
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {/* Modal Header */}
        <div className="bg-[#0091ea] px-6 py-4 flex justify-between items-center">
          <h3 className="text-white font-semibold text-lg">Add New Receipt Entry</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Date</label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={formData.transactionDate}
                onChange={(e) => setFormData({...formData, transactionDate: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Receipt Mode</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                value={formData.receiptMode}
                onChange={(e) => setFormData({...formData, receiptMode: e.target.value as 'Cash' | 'Bank'})}
              >
                <option value="Cash">Cash</option>
                <option value="Bank">Bank</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Receipt Towards</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
              value={formData.receiptTowards}
              onChange={(e) => setFormData({...formData, receiptTowards: e.target.value})}
            >
               <option>Community Investment Fund (CIF)</option>
               <option>Membership Fee</option>
               <option>Loan Repayment</option>
               <option>Savings Deposit</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Number</label>
              <input
                type="text"
                required
                placeholder="e.g. 297"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={formData.loanNumber}
                onChange={(e) => setFormData({...formData, loanNumber: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₹)</label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
              placeholder="Enter details about this transaction..."
              value={formData.remarks}
              onChange={(e) => setFormData({...formData, remarks: e.target.value})}
            ></textarea>
          </div>

          <div className="pt-2 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#0091ea] text-white rounded text-sm font-medium hover:bg-blue-600 shadow-sm transition-colors"
            >
              Save Receipt
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddReceiptModal;