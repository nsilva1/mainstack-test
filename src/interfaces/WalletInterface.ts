export interface IWalletInfo {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export interface IWalletGraphData {
  date: string;
  amount: number;
}
