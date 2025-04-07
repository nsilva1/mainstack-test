import { ElementType } from 'react';

const UserProfileMenuItem = ({ icon: Icon, label }: { icon: ElementType; label: string }) => {
  return (
    <div className='flex gap-2 w-full items-center py-2.5 px-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer'>
      <Icon className='w-5 h-5 mr-3 text-gray-500' strokeWidth={1.5} />
      <span className='text-black font-medium'>{label}</span>
    </div>
  );
};

export { UserProfileMenuItem };
