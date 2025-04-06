import logo from '../assets/images/logo.svg'
import { navLinks } from '../lib/constants'
import bell from '../assets/images/bell.svg'
import messages from '../assets/images/messages.svg'
import menu from '../assets/images/menu.svg'

const Navbar = () => {
  return (
    <div className=''>
        <nav className='fixed top-3 left-0 right-0 z-50 flex justify-between items-center bg-white shadow-lg p-4 rounded-full'>
            <div className='cursor-pointer'>
                <img src={logo} alt="logo" className='w-16 h-16' />
            </div>
            <div>
                <ul className='flex gap-8'>
                    {navLinks.map((link, index) => (
                        <li key={index} className={`flex items-center gap-2 cursor-pointer ${link.name === 'Revenue' ? 'bg-black text-white p-3 rounded-full' : 'text-gray-400 hover:bg-gray-100 hover:rounded-full py-2 px-3'} `}>
                            <img src={link.icon} alt={link.name} className='w-6 h-6' />
                            <span>{link.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className='flex gap-4 items-center justify-center'>
                    <div>
                        <img src={bell} alt='Notifications' className='w-16 h-16' />
                    </div>
                    <div>
                        <img src={messages} alt='Messages' className='w-16 h-16' />
                    </div>
                    <button className='bg-[#EFF1F6] p-2 rounded-full flex gap-4 items-center'>
                        <div className='bg-gradient-to-r from-[#5C6670] to-[#131316] text-white p-4 rounded-full flex justify-center items-center w-8 h-8'>
                            <p className=''>OJ</p>
                        </div>
                        <img src={menu} alt='Menu' className='w-8 h-8' />
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export { Navbar }