import { describe, it, expect } from 'vitest';
import { getTransactions } from '../../api/transactions';


describe('API: User', () => {
    


    it('getWalletInfo should fetch user data successfully', async () => {
        const userTransactions = await getTransactions()
        
        expect(Array.isArray(userTransactions)).toBe(true);
        expect(userTransactions.length).toBeGreaterThan(0);
        expect(userTransactions[0]).toHaveProperty('status');
        
    });

});