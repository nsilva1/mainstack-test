import { describe, it, expect } from 'vitest';
import { getWalletInfo } from '../../api/wallet';
import { IWalletInfo } from '../../interfaces/WalletInterface';

describe('API: User', () => {
  const mockUserData: IWalletInfo = {
    balance: 750.56,
    total_payout: 500,
    total_revenue: 1250.56,
    pending_payout: 0,
    ledger_balance: 500,
  };

  it('getWalletInfo should fetch user data successfully', async () => {
    const userInfo = await getWalletInfo();
    expect(userInfo).toEqual(mockUserData);
  });
});
