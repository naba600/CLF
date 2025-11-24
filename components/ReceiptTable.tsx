import React from 'react';
import { Info, Trash2 } from 'lucide-react';
import { Receipt } from '../types';

interface ReceiptTableProps {
  receipts: Receipt[];
  onDelete: (id: string) => void;
}

const ReceiptTable: React.FC<ReceiptTableProps> = ({ receipts, onDelete }) => {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-semibold text-[#1a237e]">Summary of Receipts</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-[#1a237e] uppercase bg-white border-b border-gray-200">
            <tr>
              <th className="px-4 py-4 font-semibold text-center w-16 border-r">S.No</th>
              <th className="px-4 py-4 font-semibold w-28 border-r">Meeting Date</th>
              <th className="px-4 py-4 font-semibold w-24 border-r">Receipt Mode</th>
              <th className="px-4 py-4 font-semibold border-r">Receipt Towards</th>
              <th className="px-4 py-4 font-semibold w-28 border-r text-center">Transaction Date</th>
              <th className="px-4 py-4 font-semibold w-32 border-r text-right">Amount Received</th>
              <th className="px-4 py-4 font-semibold border-r">Remarks</th>
              <th className="px-4 py-4 font-semibold w-24 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {receipts.map((receipt, index) => (
              <tr key={receipt.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 text-center text-gray-500 border-r">{index + 1}</td>
                <td className="px-4 py-4 text-gray-600 border-r bg-gray-50/30">{receipt.meetingDate}</td>
                <td className="px-4 py-4 text-gray-600 border-r">{receipt.receiptMode}</td>
                <td className="px-4 py-4 text-gray-700 border-r leading-relaxed">
                  {receipt.receiptTowards}
                  {receipt.loanNumber && (
                    <span className="text-gray-500 text-xs block mt-1">(Loan No-{receipt.loanNumber})</span>
                  )}
                </td>
                <td className="px-4 py-4 text-gray-600 text-center border-r">{receipt.transactionDate}</td>
                <td className="px-4 py-4 text-gray-700 font-medium text-right border-r">
                   ₹{receipt.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                   <span className="ml-2 inline-block text-gray-400">
                     <Info size={14} />
                   </span>
                </td>
                <td className="px-4 py-4 text-gray-600 text-xs border-r leading-relaxed">{receipt.remarks}</td>
                <td className="px-4 py-4 text-center">
                  <div className="flex justify-center space-x-2">
                    <button className="p-1.5 bg-[#00bcd4] text-white rounded hover:bg-[#00acc1] transition-colors">
                      <Info size={16} />
                    </button>
                    <button 
                      onClick={() => onDelete(receipt.id)}
                      className="p-1.5 bg-[#ef5350] text-white rounded hover:bg-[#e53935] transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {receipts.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-gray-400 italic">
                  No receipts added yet. Click "Add New Receipt" to begin.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceiptTable;