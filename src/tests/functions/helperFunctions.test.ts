
import { describe, it, expect } from 'vitest';
import { formatNumber, formatDate, getInitials } from '../../lib/helperFunctions';

describe('Helper Functions', () => {
  
  describe('formatNumber', () => {
    it('should format positive integers with commas', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1234567)).toBe('1,234,567');
      expect(formatNumber(100)).toBe('100');
    });

    it('should format negative integers with commas', () => {
      expect(formatNumber(-5000)).toBe('-5,000');
    });

    it('should format numbers with decimals', () => {
      
      expect(formatNumber(1234.56)).toMatch(/1,234\.56/); 
      expect(formatNumber(12345.6789)).toMatch(/12,345\.679/); 
    });

     it('should handle zero', () => {
      expect(formatNumber(0)).toBe('0');
    });

    it('should handle large numbers', () => {
      expect(formatNumber(1000000000)).toBe('1,000,000,000');
      expect(formatNumber(-9876543210)).toBe('-9,876,543,210');
    });
  });


  describe('formatDate', () => {
    it('should format YYYY-MM-DD string to Mmm DD, YYYY', () => {
      expect(formatDate('2022-02-03')).toBe('Feb 03, 2022');
      expect(formatDate('2023-12-25')).toBe('Dec 25, 2023');
      expect(formatDate('2024-01-09')).toBe('Jan 09, 2024');
    });
  });

  describe('getInitials', () => {
    it('should return initials from first and last name', () => {
      expect(getInitials('Olivier', 'Jones')).toBe('OJ');
      expect(getInitials('Ada', 'Lovelace')).toBe('AL');
    });

    it('should handle lowercase names', () => {
      expect(getInitials('olivier', 'jones')).toBe('OJ');
    });

     it('should handle names with leading/trailing spaces', () => {
      expect(getInitials('  Olivier  ', '  Jones  ')).toBe('OJ');
    });

    it('should handle missing first name', () => {
       expect(getInitials('', 'Jones')).toBe('J'); 
    });

    it('should handle missing last name', () => {
       expect(getInitials('Olivier', '')).toBe('O');
    });

     it('should handle both names missing', () => {
       expect(getInitials('', '')).toBe(''); 
    });
  });
});