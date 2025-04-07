// src/api/user.test.ts
import { describe, it, expect } from 'vitest';
import { getUserInfo } from '../../api/user';
import { IUserInfo } from '../../interfaces/UserInterface';

describe('API: User', () => {
  const mockUserData: IUserInfo = {
    first_name: 'Olivier',
    last_name: 'Jones',
    email: 'olivierjones@gmail.com',
  };

  it('getUserInfo should fetch user data successfully', async () => {
    // Act: Call the function under test
    const userInfo = await getUserInfo();
    expect(userInfo).toEqual(mockUserData);
  });
});
