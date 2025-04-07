export interface IWithdrawal {
  amount: number;
  date: string;
  status: string;
  type: string;
}

export interface IMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
}

export interface IDeposit {
  amount: number;
  metadata?: IMetadata;
  payment_reference?: string;
  status: string;
  type: string;
  date: string;
}

export type ITransaction = IDeposit;
