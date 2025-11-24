import { EntityType, Organization, Receipt, TabType } from './types';

export const INITIAL_ORGS: Organization[] = [
  { id: '1', name: 'AKASH VO', code: '040000121273', isSelected: true },
  { id: '2', name: 'AKOTA VO', code: '040000122039', isSelected: false },
  { id: '3', name: 'ASHA VO', code: '040000121803', isSelected: false },
  { id: '4', name: 'BALY VO', code: '040000121740', isSelected: false },
  { id: '5', name: 'CHAMPA VO', code: '040000121999', isSelected: false },
  { id: '6', name: 'DURGA VO', code: '040000121555', isSelected: false },
];

export const INITIAL_RECEIPTS: Receipt[] = [
  {
    id: '1',
    meetingDate: '2025-10-25',
    receiptMode: 'Cash',
    receiptTowards: 'Community Investment Fund (CIF) - Repayment from VO',
    transactionDate: '2025-10-29',
    amount: 37774.00,
    remarks: 'CIF Loan received from Akash VO',
    loanNumber: '297'
  }
];

export const ENTITY_TYPES = [
  EntityType.SHG,
  EntityType.VO,
  EntityType.SRLM,
  EntityType.OtherCLF,
  EntityType.OtherInst,
  EntityType.Others,
  EntityType.Bank,
  EntityType.PG_PE_CHC
];

export const TABS = [
  TabType.Receipt,
  TabType.Payment,
  TabType.Contra,
  TabType.JournalVoucher,
  TabType.BRS,
  TabType.Cash,
  TabType.Bank
];