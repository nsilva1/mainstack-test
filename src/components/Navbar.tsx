import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import { navLinks } from '../lib/constants';
import bell from '../assets/images/bell.svg';
import messages from '../assets/images/messages.svg';
import menu from '../assets/images/menu.svg';
import { UserProfileMenu } from './UserProfileMenu';
import { IUserInfo } from '../interfaces/UserInterface';
import { getUserInfo } from '../api/user';
import { IoIosArrowDown } from 'react-icons/io';
import { NavbarAppsMenu } from './NavbarAppsMenu';

const Navbar = () => {
  const [user, setUser] = useState<IUserInfo>({
    first_name: '',
    last_name: '',
    email: '',
  });
  const [showMenu, setShowMenu] = useState(false);
  const [appMenuClicked, setAppMenuClicked] = useState(false);

  const handleMenuClick = (linkName: string) => {
    if (linkName === 'Apps') {
      setAppMenuClicked((prev) => !prev);
    }
  };

  const fetchUserInfo = async () => {
    const userInfo = await getUserInfo();
    setUser(userInfo);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className=''>
      <nav className='fixed top-3 left-4 right-4 z-50 flex justify-between items-center bg-white shadow-lg p-4 rounded-full h-16'>
        <div className='cursor-pointer'>
          <img src={logo} alt='logo' className='w-16 h-16' />
        </div>
        <div>
          <ul className='flex gap-8'>
            {navLinks.map((link, index) => (
              <li
                onClick={() => handleMenuClick(link.name)}
                key={index}
                className={`flex items-center gap-2 cursor-pointer ${link.name === 'Revenue' ? 'bg-black text-white p-3 rounded-full' : appMenuClicked && link.name === 'Apps' ? 'bg-black text-white rounded-full hover:bg-black hover:text-white py-2 px-3' : 'text-[#56616B] hover:bg-gray-100 hover:rounded-full py-2 px-3'} `}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className={`w-6 h-6 ${appMenuClicked && link.name === 'Apps' ? 'filter brightness-0 invert' : ''}`}
                />
                <span className='font-semibold text-base leading-[24px] align-middle tracking-[-0.4px]'>
                  {link.name}
                </span>
                {appMenuClicked && link.name === 'Apps' && (
                  <div className='flex items-center gap-2'>
                    <span>Link in Bio</span>
                    <IoIosArrowDown />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div
            className={`${appMenuClicked ? 'flex' : 'hidden'} absolute top-20 right-1/4 min-w-[300px] z-50`}
          >
            <NavbarAppsMenu />
          </div>
        </div>
        <div>
          <div className='flex gap-4 items-center justify-center'>
            <div>
              <img src={bell} alt='Notifications' className='w-16 h-16' />
            </div>
            <div>
              <img src={messages} alt='Messages' className='w-16 h-16' />
            </div>
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className='bg-[#EFF1F6] p-2 rounded-full flex gap-4 items-center cursor-pointer'
            >
              <div className='bg-gradient-to-r from-[#5C6670] to-[#131316] text-white p-4 rounded-full flex justify-center items-center w-8 h-8'>
                <p className=''>OJ</p>
              </div>
              <img src={menu} alt='Menu' className='w-8 h-8' />
            </button>
            <div
              className={`${showMenu ? 'flex' : 'hidden'} absolute top-20 right-4 min-w-[300px] z-50`}
            >
              <UserProfileMenu user={user} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
