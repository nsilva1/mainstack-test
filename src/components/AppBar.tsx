import { AppBarImages } from '../lib/constants';

const AppBar = () => {
  return (
    <div className='fixed top-1/2 left-4 -translate-y-1/2 z-40 p-4 bg-white shadow-lg rounded-full'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        {AppBarImages.map((image, index) => (
          <div className='relative inline-block group' key={index}>
            <img
              key={index}
              src={image.imageURL}
              alt={image.alt}
              className='w-8 h-8 filter grayscale hover:grayscale-0 hover:bg-gray-100 hover:rounded-full'
            />
            <div className='absolute left-full top-1/2 ml-3 -translate-y-1/2 z-10 whitespace-nowrap bg-black text-white text-lg rounded px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none max-w-xs'>
              {image.tooltip}
              <span className='absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black'></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { AppBar };
