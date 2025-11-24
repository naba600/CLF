export interface Organization {
  id: string;
  name: string;
  code: string;
  isSelected: boolean;
}

export interface Receipt {
  id: string;
  meetingDate: string;
  receiptMode: 'Cash' | 'Bank';
  receiptTowards: string;
  transactionDate: string;
  amount: number;
  remarks: string;
  loanNumber?: string;
}

export enum EntityType {
  SHG = 'SHG',
  VO = 'VO',
  SRLM = 'SRLM',
  OtherCLF = 'Other CLF',
  OtherInst = 'Other Institution',
  Others = 'Others',
  Bank = 'Bank',
  PG_PE_CHC = 'PG/PE/CHC'
}

export enum TabType {
  Receipt = 'Receipt',
  Payment = 'Payment',
  Contra = 'Contra',
  JournalVoucher = 'Journal Voucher',
  BRS = 'BRS',
  Cash = 'Cash',
  Bank = 'Bank'
}