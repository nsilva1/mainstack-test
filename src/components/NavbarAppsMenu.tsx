import { useState } from 'react';
import { NavbarAppsMenuItems } from '../lib/constants'
import { IoIosArrowForward } from "react-icons/io";

const NavbarAppsMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

  return (
    <div className='bg-white shadow-lg rounded-xl p-4'>
        <div className='flex flex-col gap-8'>
            {NavbarAppsMenuItems.map((item, index) => (
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index} className='flex items-center gap-4 p-3 hover:border hover:border-gray-100 hover:rounded-xl'>
                    <img src={item.icon} alt={item.name} className='w-12 h-12 border border-gray-100 p-2 rounded-lg' />
                    <div>
                        <h2 className='text-base font-semibold'>{item.name}</h2>
                        <p className='text-gray-500 text-sm'>{item.description}</p>
                    </div>
                    {
                        isHovered && (
                            <div className='ml-auto'>
                                <IoIosArrowForward className='text-gray-500' />
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    </div>
  )
}

export { NavbarAppsMenu }