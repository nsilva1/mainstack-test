import { IUserInfo } from '../interfaces/UserInterface'
import { CiSettings } from "react-icons/ci";
import { RiFilePaper2Line } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";
import { TbLayoutGridAdd } from "react-icons/tb";
import { IoBugOutline } from "react-icons/io5";
import { FaUsersRectangle } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { UserProfileMenuItem } from './UserProfileMenuItem';
import { getInitials } from '../lib/helperFunctions';

const UserProfileMenu = ({user}: {user: IUserInfo}) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md w-full border border-gray-200'>
        <div className='flex items-center mb-4'>
            <div className='bg-gradient-to-r from-[#5C6670] to-[#131316] text-white p-4 rounded-full flex justify-center items-center w-16 h-16'>
                <p className='text-lg'>{getInitials(user.first_name, user.last_name)}</p>
            </div>
            <div className='ml-4'>
                <h2 className='text-lg font-semibold'>{user.first_name} {user.last_name}</h2>
                <p className='text-gray-500'>{user.email}</p>
            </div>
        </div>
        <hr className='border-gray-200 mb-4' />
        <div className='flex flex-col gap-2'>
            <UserProfileMenuItem icon={CiSettings} label="Settings" />
            <UserProfileMenuItem icon={RiFilePaper2Line} label="Purchase History" />
            <UserProfileMenuItem icon={AiOutlineGift} label="Refer and Earn" />
            <UserProfileMenuItem icon={TbLayoutGridAdd} label="Integrations" />
            <UserProfileMenuItem icon={IoBugOutline} label="Report Bug" />
            <UserProfileMenuItem icon={FaUsersRectangle} label="Switch Account" />
            <UserProfileMenuItem icon={FiLogOut} label="Logout" />
        </div>
    </div>
  )
}

export { UserProfileMenu }